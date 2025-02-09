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

  // Get unique tags and count their occurrences
  const tagCounts = new Map();
  publishedPosts.forEach((post) => {
    if (post.tags) {
      post.tags.forEach((tag) => {
        tagCounts.set(tag, (tagCounts.get(tag) || 0) + 1);
      });
    }
  });

  // Convert to array and sort by count
  const tags = Array.from(tagCounts.entries())
    .map(([tag, count]) => ({
      tag,
      count,
    }))
    .sort((a, b) => b.count - a.count);

  return { tags };
}
