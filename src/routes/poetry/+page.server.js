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

  // Filter for poetry posts and published status
  let poems = postsArray.filter(
    (post) => post.published !== false && post.type === "poetry"
  );

  // Sort by date, newest first
  poems.sort((a, b) => new Date(b.date) - new Date(a.date));

  return { poems };
}
