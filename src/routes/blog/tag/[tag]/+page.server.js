export const prerender = true;

export async function entries() {
  const modules = import.meta.glob("../../posts/*.md");
  const iterablePosts = Object.entries(modules);
  const postsArray = await Promise.all(
    iterablePosts.map(async ([, resolver]) => {
      const post = await resolver();
      return post.metadata;
    })
  );
  const publishedPosts = postsArray.filter((post) => post.published !== false);

  // Get unique tags
  const tags = new Set();
  publishedPosts.forEach((post) => {
    if (post.tags) {
      post.tags.forEach((tag) => tags.add(tag));
    }
  });

  return Array.from(tags).map((tag) => ({ tag }));
}

export async function load({ params }) {
  const tag = params.tag;
  const modules = import.meta.glob("../../posts/*.md");
  const iterablePosts = Object.entries(modules);
  const postsArray = await Promise.all(
    iterablePosts.map(async ([path, resolver]) => {
      const post = await resolver();
      const slug = path.split("/").pop().slice(0, -3);
      return { ...post.metadata, slug };
    })
  );

  let posts = postsArray.filter((post) => {
    return post.published !== false && post.tags && post.tags.includes(tag);
  });

  posts.sort((a, b) => new Date(b.date) - new Date(a.date));

  if (posts.length === 0) {
    throw new Error(`No posts found with tag: ${tag}`);
  }

  return {
    tag,
    posts,
  };
}
