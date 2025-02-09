export const prerender = true;

export async function entries() {
  const modules = import.meta.glob("../posts/*.md");
  return Object.keys(modules).map((path) => {
    const slug = path.split("/").pop().slice(0, -3);
    return { slug };
  });
}

export async function load({ params }) {
  const modules = import.meta.glob("../posts/*.md", { eager: true });
  const matchingPath = Object.keys(modules).find(
    (path) => path.split("/").pop().slice(0, -3) === params.slug
  );

  if (!matchingPath) {
    throw new Error(`Post not found: ${params.slug}`);
  }

  const post = modules[matchingPath];

  if (post.metadata.published === false) {
    throw new Error("Post not found");
  }

  return {
    ...post.metadata,
    slug: params.slug,
  };
}
