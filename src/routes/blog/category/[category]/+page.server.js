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

  // Get unique categories
  const categories = new Set();
  publishedPosts.forEach((post) => {
    if (post.category) {
      categories.add(post.category);
    }
  });

  return Array.from(categories).map((category) => ({ category }));
}

export async function load({ params }) {
  const category = params.category;
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
    return post.published !== false && post.category === category;
  });

  posts.sort((a, b) => new Date(b.date) - new Date(a.date));

  if (posts.length === 0) {
    throw new Error(`No posts found in category: ${category}`);
  }

  return {
    category,
    posts,
  };
}
