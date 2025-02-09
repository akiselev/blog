<script>
  // Your blog post's metadata is automatically available
  export let title;
  export let date;
  export let tags = [];
  export let categories = [];
</script>

<article class="container mx-auto p-4">
  <header>
    <h1 class="text-4xl font-bold">{title}</h1>
    <p class="text-sm text-gray-500">{date}</p>
    {#if tags && tags.length > 0}
      <div class="mt-2">
        {#each tags as tag}
          <a
            href={`/blog/tag/${tag}`}
            class="mr-2 text-blue-500 hover:underline">#{tag}</a
          >
        {/each}
      </div>
    {/if}
    {#if categories && categories.length > 0}
      <div class="mt-2">
        {#each categories as category}
          <a
            href={`/blog/category/${category}`}
            class="mr-2 text-blue-500 hover:underline">{category}</a
          >
        {/each}
      </div>
    {/if}
  </header>

  <section class="mt-4 prose prose-lg">
    <slot />
  </section>

  <div class="mt-8">
    <a href="/blog" class="text-blue-500 hover:underline"
      >&larr; Back to all posts</a
    >
  </div>
</article>
