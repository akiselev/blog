<script>
  export let data;
</script>

<div class="container mx-auto p-4">
  <h1 class="text-4xl font-bold mb-8">Categories</h1>

  {#if data.categories.length === 0}
    <p class="text-gray-600">No categories found.</p>
  {:else}
    <div class="flex flex-wrap gap-4">
      {#each data.categories as { category, count }}
        <a
          href={`/blog/category/${category}`}
          class="inline-block bg-gray-200 rounded-full px-4 py-2 text-lg font-semibold text-gray-700 hover:bg-gray-300 transition-colors"
        >
          {category}
          <span class="text-gray-500 text-sm ml-1">({count})</span>
        </a>
      {/each}
    </div>
  {/if}

  <div class="mt-8">
    <a href="/blog" class="text-blue-500 hover:underline"
      >&larr; Back to all posts</a
    >
  </div>
</div>
