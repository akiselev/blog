export const prerender = true;

/** @type {import('./$types').PageServerLoad} */
export async function load() {
  const modules = import.meta.glob('../posts/*.md'); // Adjusted path relative to src/routes
  const iterablePosts = Object.entries(modules);

  const postsArray = await Promise.all(
    iterablePosts.map(async ([path, resolver]) => {
      const post = await resolver();
      const slug = path.split('/').pop()?.slice(0, -3);
      // Ensure metadata exists and construct the href
      if (post.metadata && slug) {
        return {
          ...post.metadata,
          href: `/blog/${slug}`, // Construct href based on slug
          date: post.metadata.date, // Ensure date is included
          description: post.metadata.description, // Ensure description is included
          title: post.metadata.title, // Ensure title is included
        };
      }
      return null; // Return null for posts without metadata or slug
    })
  );

  // Filter out nulls and unpublished posts
  let posts = postsArray.filter(
    (post) => post && post.published !== false
  );

  // Sort posts by date, newest first
  posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return {
    posts: posts,
    // Add page title and description for the root page
    title: 'Writing on software design, company building, and the aerospace industry.',
    description:
      'All of my long-form thoughts on programming, leadership, product design, and more, collected in chronological order.',
    metaTitle: 'Blog - Spencer Sharp', // Or your desired root page title
  };
}
