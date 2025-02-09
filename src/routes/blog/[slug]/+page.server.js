export const prerender = true;

export async function entries() {
  const modules = import.meta.glob("../posts/*.md");
  return Object.keys(modules).map((path) => {
    const slug = path.split("/").pop().slice(0, -3);
    return { slug };
  });
}
