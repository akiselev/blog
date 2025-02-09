export const prerender = true;

export async function load() {
  const modules = import.meta.glob("../posts/*.md");
  const iterablePosts = Object.entries(modules);
  const postsArray = await Promise.all(
    iterablePosts.map(async ([, resolver]) => {
      const post = await resolver();
      return post.metadata;
    })
  );

  const publishedPosts = postsArray.filter((post) => post.published !== false);

  // Get unique categories and count their occurrences
  const categoryCounts = new Map();
  publishedPosts.forEach((post) => {
    if (post.category) {
      categoryCounts.set(
        post.category,
        (categoryCounts.get(post.category) || 0) + 1
      );
    }
  });

  // Convert to array and sort by count
  const categories = Array.from(categoryCounts.entries())
    .map(([category, count]) => ({
      category,
      count,
    }))
    .sort((a, b) => b.count - a.count);

  return { categories };
}
