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
    if (post.categories && Array.isArray(post.categories)) {
      post.categories.forEach((category) => {
        categories.add(category.trim().toLowerCase());
      });
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
    return (
      post.published !== false &&
      post.categories &&
      Array.isArray(post.categories) &&
      post.categories
        .map((cat) => cat.trim().toLowerCase())
        .includes(category.trim().toLowerCase())
    );
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
