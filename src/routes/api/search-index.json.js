export async function get({ url }) {
    const preview = url.searchParams.get('preview') === 'true';
    const modules = import.meta.glob('../blog/posts/*.md');
    const iterablePosts = Object.entries(modules);

    const postsArray = await Promise.all(
        iterablePosts.map(async ([path, resolver]) => {
            const post = await resolver();
            const slug = path.split('/').pop().slice(0, -3);
            return { ...post.metadata, slug };
        })
    );

    const posts = preview ? postsArray : postsArray.filter(post => post.published !== false);

    return {
        status: 200,
        body: posts
    };
}
