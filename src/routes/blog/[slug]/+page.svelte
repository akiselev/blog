<script>
  export let data;
</script>

<svelte:head>
  <title>{data.title}</title>
</svelte:head>

<article class="container mx-auto p-4">
  <header>
    <h1 class="text-4xl font-bold">{data.title}</h1>
    <p class="text-sm text-gray-500">{data.date}</p>
    {#if data.tags}
      <div class="mt-2">
        {#each data.tags as tag}
          <a
            href={`/blog/tag/${tag}`}
            class="mr-2 text-blue-500 hover:underline">#{tag}</a
          >
        {/each}
      </div>
    {/if}
    {#if data.categories}
      <div class="mt-2">
        {#each data.categories as category}
          <a
            href={`/blog/category/${category}`}
            class="mr-2 text-blue-500 hover:underline">{category}</a
          >
        {/each}
      </div>
    {/if}
  </header>

  <section class="mt-4 prose prose-lg">
    <svelte:component this={data.content} />
  </section>

  <div class="mt-8">
    <a href="/blog" class="text-blue-500 hover:underline"
      >&larr; Back to all posts</a
    >
  </div>
</article>
