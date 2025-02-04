import fs from 'fs';
import path from 'path';
import { visit } from 'unist-util-visit';

let manifest = null;

function loadManifest() {
    if (manifest) return manifest;
    const manifestPath = path.join(process.cwd(), 'internal-links.json');
    try {
        const data = fs.readFileSync(manifestPath, 'utf8');
        manifest = JSON.parse(data);
    } catch (err) {
        manifest = {}; // fallback to empty manifest if file not found
    }
    return manifest;
}

export default function remarkInternalLinks() {
    const linksManifest = loadManifest();

    return (tree) => {
        visit(tree, 'text', (node, index, parent) => {
            if (!node.value.includes('[[')) return;
            const regex = /\[\[([^\]]+)\]\]/g;
            const newNodes = [];
            let lastIndex = 0;
            let match;
            while ((match = regex.exec(node.value)) !== null) {
                const matchStart = match.index;
                const matchEnd = regex.lastIndex;
                if (matchStart > lastIndex) {
                    newNodes.push({
                        type: 'text',
                        value: node.value.slice(lastIndex, matchStart)
                    });
                }
                const linkText = match[1].trim();
                const url = linksManifest[linkText];
                if (url) {
                    newNodes.push({
                        type: 'link',
                        url,
                        children: [{ type: 'text', value: linkText }]
                    });
                } else {
                    // If no matching link found, leave original text
                    newNodes.push({
                        type: 'text',
                        value: match[0]
                    });
                }
                lastIndex = matchEnd;
            }
            if (lastIndex < node.value.length) {
                newNodes.push({
                    type: 'text',
                    value: node.value.slice(lastIndex)
                });
            }
            if (newNodes.length > 0 && parent && Array.isArray(parent.children)) {
                parent.children.splice(index, 1, ...newNodes);
            }
        });
    };
}
