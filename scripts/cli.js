#!/usr/bin/env node
import { program } from 'commander';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import dayjs from 'dayjs';
import React, { useState, useEffect } from 'react';
import { render, Box, Text } from 'ink';
import SelectInput from 'ink-select-input';
import open from 'open';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const POSTS_DIR = path.join(__dirname, '..', 'src', 'routes', 'blog', 'posts');
const ASSETS_DIR = path.join(__dirname, '..', 'static', 'assets');
const ROUTES_DIR = path.join(__dirname, '..', 'src', 'routes');

// Ensure directories exist
if (!fs.existsSync(POSTS_DIR)) fs.mkdirSync(POSTS_DIR, { recursive: true });
if (!fs.existsSync(ASSETS_DIR)) fs.mkdirSync(ASSETS_DIR, { recursive: true });

function slugify(text) {
    return text.toLowerCase().trim().replace(/\s+/g, '-').replace(/[^a-z0-9\-]/g, '');
}

function createPostTemplate(title, options) {
    const slug = slugify(title);
    const date = dayjs().format('YYYY-MM-DD');
    let content = '';
    if (options.type === 'link') {
        content = `---
title: "${title}"
date: "${date}"
type: "link"
url: "${options.url}"
excerpt: "${options.excerpt || ''}"
published: true
---

Click the title below to visit the resource.
`;
    } else {
        content = `---
title: "${title}"
date: "${date}"
excerpt: "${options.excerpt || ''}"
published: true
---

# ${title}

Your content here...
`;
    }
    const filename = path.join(POSTS_DIR, `${slug}.md`);
    fs.writeFileSync(filename, content, 'utf-8');
    console.log(`Created post: ${filename}`);
}

// Subcommand: create
program
    .command('create <type> <title>')
    .description('Create a new post. Type can be "post" or "link".')
    .option('-u, --url <url>', 'URL for link posts')
    .option('-e, --excerpt <excerpt>', 'Excerpt for the post')
    .action((type, title, options) => {
        if (type === 'link' && !options.url) {
            console.error('Link posts require a --url option.');
            process.exit(1);
        }
        createPostTemplate(title, { type: type === 'link' ? 'link' : 'post', url: options.url, excerpt: options.excerpt });
    });

// Ink component for listing posts interactively
const PostList = ({ onSelect }) => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fs.readdir(POSTS_DIR, (err, files) => {
            if (err) return;
            const mdFiles = files.filter(f => f.endsWith('.md'));
            const items = mdFiles.map(file => ({
                label: file,
                value: path.join(POSTS_DIR, file)
            }));
            setItems(items);
        });
    }, []);

    const handleSelect = item => {
        const content = fs.readFileSync(item.value, 'utf8');
        onSelect({ file: item.label, content });
    };

    return <SelectInput items={items} onSelect={handleSelect} />;
};

// Subcommand: list (interactive via Ink)
program
    .command('list')
    .description('List all posts interactively')
    .action(() => {
        const App = () => {
            const [selected, setSelected] = useState(null);
            if (selected) {
                return (
                    <Box flexDirection="column">
                        <Text>{selected.file}</Text>
                        <Text>{selected.content}</Text>
                    </Box>
                );
            }
            return <PostList onSelect={setSelected} />;
        };
        render(<App />);
    });

// Subcommand: preview (open a post file)
program
    .command('preview <filepath>')
    .description('Preview a post in the default editor/browser')
    .action((filepath) => {
        open(filepath);
    });

// Subcommand: update (stub for updating metadata interactively)
program
    .command('update <filepath>')
    .description('Update metadata for a post interactively (TUI not implemented yet)')
    .action((filepath) => {
        console.log(`Update metadata for ${filepath} (this feature is under development).`);
    });

// Subcommand: generate-manifest (scan routes for markdown and write internal-links.json)
program
    .command('generate-manifest')
    .description('Generate internal links manifest')
    .action(() => {
        const manifest = {};
        function scanDir(dir, routePrefix = '') {
            const items = fs.readdirSync(dir);
            for (const item of items) {
                const fullPath = path.join(dir, item);
                const stat = fs.statSync(fullPath);
                if (stat.isDirectory()) {
                    const newPrefix = routePrefix + '/' + item;
                    scanDir(fullPath, newPrefix);
                } else if (item.endsWith('.md')) {
                    const content = fs.readFileSync(fullPath, 'utf8');
                    const fmMatch = content.match(/---\s*([\s\S]+?)\s*---/);
                    if (fmMatch) {
                        const frontmatter = fmMatch[1];
                        const titleMatch = frontmatter.match(/title:\s*["']?(.+?)["'\n]/);
                        let title = titleMatch ? titleMatch[1].trim() : item.replace('.md', '');
                        const slugMatch = frontmatter.match(/slug:\s*["']?(.+?)["'\n]/);
                        let slug = slugMatch ? slugMatch[1].trim() : slugify(title);
                        let urlPath = routePrefix + '/' + item.replace('.md', '');
                        if (item === 'index.md') {
                            urlPath = routePrefix || '/';
                        }
                        manifest[title] = urlPath;
                    }
                }
            }
        }
        scanDir(ROUTES_DIR, '');
        const manifestPath = path.join(process.cwd(), 'internal-links.json');
        fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2), 'utf8');
        console.log(`Generated manifest at ${manifestPath}`);
    });

program.parse(process.argv);
