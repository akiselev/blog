import { visit } from 'unist-util-visit';

export default function remarkCustomElements() {
    return (tree) => {
        visit(tree, 'html', (node) => {
            if (node.value.includes('<Gallery')) {
                node.value = `<div class="gallery-wrapper">${node.value}</div>`;
            }
        });
    };
}
