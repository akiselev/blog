export const prerender = true;

export async function load() {
  const modules = import.meta.glob("../posts/*.md");
  const iterablePosts = Object.entries(modules);
  const postsArray = await Promise.all(
    iterablePosts.map(async ([path, resolver]) => {
      const post = await resolver();
      const slug = path.split("/").pop().slice(0, -3);
      return {
        ...post.metadata,
        slug,
        content: post.default.render().html, // Include rendered content for full-text search
      };
    })
  );

  // Only include published posts
  const posts = postsArray
    .filter((post) => post.published !== false)
    .sort((a, b) => new Date(b.date) - new Date(a.date));

  return { posts };
}
