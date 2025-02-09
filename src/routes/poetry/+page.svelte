<script>
  export let data;
</script>

<div class="container mx-auto p-4">
  <h1 class="text-4xl font-bold mb-8">Poetry</h1>

  {#if data.poems.length === 0}
    <p class="text-gray-600">No poetry posts found.</p>
  {:else}
    <ul class="mt-4 space-y-8">
      {#each data.poems as poem}
        <li class="border-b pb-6">
          <a
            href={`/blog/${poem.slug}`}
            class="text-blue-500 hover:underline transition-colors duration-300"
          >
            <h2 class="text-2xl font-semibold">{poem.title}</h2>
          </a>
          <p class="text-gray-600 mt-2">{poem.excerpt}</p>
          <p class="text-sm text-gray-500 mt-2">{poem.date}</p>
          {#if poem.tags}
            <div class="mt-2">
              {#each poem.tags as tag}
                <a
                  href={`/blog/tag/${tag}`}
                  class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 hover:bg-gray-300 transition-colors"
                >
                  #{tag}
                </a>
              {/each}
            </div>
          {/if}
        </li>
      {/each}
    </ul>
  {/if}

  <div class="mt-8">
    <a href="/" class="text-blue-500 hover:underline">&larr; Back to home</a>
  </div>
</div>
