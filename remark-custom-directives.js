import { visit } from 'unist-util-visit';

export default function remarkCustomDirectives() {
    return (tree) => {
        visit(tree, (node) => {
            if (node.type === 'containerDirective') {
                const componentName = node.name[0].toUpperCase() + node.name.slice(1);
                node.data = node.data || {};
                node.data.hName = componentName;
                node.data.hProperties = node.attributes;
            }
        });
    };
}
