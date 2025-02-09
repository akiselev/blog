export const prerender = true;

export async function load() {
  const modules = import.meta.glob("../posts/*.md");
  const iterablePosts = Object.entries(modules);
  const postsArray = await Promise.all(
    iterablePosts.map(async ([path, resolver]) => {
      const post = await resolver();
      const slug = path.split("/").pop().slice(0, -3);
      return { ...post.metadata, slug };
    })
  );

  // Filter and sort posts
  let posts = postsArray
    .filter((post) => post.published !== false)
    .sort((a, b) => new Date(b.date) - new Date(a.date));

  // Get unique categories for sidebar
  const categories = new Set();
  posts.forEach((post) => {
    if (post.category) {
      categories.add(post.category);
    }
  });

  // Get unique tags for sidebar
  const tags = new Set();
  posts.forEach((post) => {
    if (post.tags) {
      post.tags.forEach((tag) => tags.add(tag));
    }
  });

  return {
    posts,
    categories: Array.from(categories),
    tags: Array.from(tags),
  };
}
