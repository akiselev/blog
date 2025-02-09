import adapter from '@sveltejs/adapter-static';
import { mdsvex } from 'mdsvex';
import directive from 'remark-directive';
import internalLinks from './remark-internal-links.js';
import customDirectives from './remark-custom-directives.js';
import customElements from './remark-custom-elements.js';

const config = {
    extensions: ['.svelte', '.md'],
    kit: {
        adapter: adapter({
            pages: 'build',
            assets: 'build',
            fallback: null,
            precompress: false
        }),
        // trailingSlash: 'always',
        paths: {
            base: process.env.BASE_PATH || ''
        },
        prerender: {
            entries: ['*']
        }
    },
    preprocess: [
        mdsvex({
            extensions: ['.md'],
            remarkPlugins: [directive, internalLinks, customDirectives, customElements]
        })
    ]
};

export default config;
