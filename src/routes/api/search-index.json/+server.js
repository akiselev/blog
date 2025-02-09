const posts = import.meta.glob("../../blog/posts/*.md", { eager: true });

export async function GET() {
  const searchIndex = Object.entries(posts).map(([path, post]) => {
    const slug = path.split("/").pop().slice(0, -3);
    return {
      slug,
      title: post.metadata.title,
      excerpt: post.metadata.excerpt || "",
      content: post.metadata.content || "",
      date: post.metadata.date,
      category: post.metadata.category,
      tags: post.metadata.tags,
    };
  });

  return new Response(JSON.stringify(searchIndex), {
    headers: {
      "Content-Type": "application/json",
    },
  });
}
