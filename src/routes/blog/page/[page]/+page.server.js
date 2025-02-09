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
  const postsPerPage = 5;
  const totalPages = Math.ceil(publishedPosts.length / postsPerPage);
  const entriesArray = [];
  for (let i = 1; i <= totalPages; i++) {
    entriesArray.push({ page: String(i) });
  }
  return entriesArray;
}

export async function load({ params }) {
  const page = Number(params.page);
  const postsPerPage = 5;
  const modules = import.meta.glob("../../posts/*.md");
  const iterablePosts = Object.entries(modules);
  const postsArray = await Promise.all(
    iterablePosts.map(async ([path, resolver]) => {
      const post = await resolver();
      const slug = path.split("/").pop().slice(0, -3);
      return { ...post.metadata, slug };
    })
  );
  let posts = postsArray.filter((post) => post.published !== false);
  posts.sort((a, b) => new Date(b.date) - new Date(a.date));
  const totalPages = Math.ceil(posts.length / postsPerPage);
  const start = (page - 1) * postsPerPage;
  const paginatedPosts = posts.slice(start, start + postsPerPage);
  return { posts: paginatedPosts, currentPage: page, totalPages };
}
