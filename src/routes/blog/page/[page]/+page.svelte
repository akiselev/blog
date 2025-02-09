<script>
  export let data;
</script>

<div class="container mx-auto p-4">
  <h1 class="text-4xl font-bold">Blog Posts - Page {data.currentPage}</h1>
  <ul class="mt-4 space-y-4">
    {#each data.posts as post}
      <li>
        <a
          href={`/blog/${post.slug}`}
          class="text-blue-500 hover:underline transition-colors duration-300"
        >
          <h2 class="text-2xl">{post.title}</h2>
        </a>
        {#if post.type === "link"}
          <p class="text-gray-600">Link post – {post.excerpt}</p>
        {:else}
          <p class="text-gray-600">{post.excerpt}</p>
        {/if}
        <p class="text-sm text-gray-500">{post.date}</p>
      </li>
    {/each}
  </ul>

  <div class="mt-8 flex space-x-4">
    {#if data.currentPage > 1}
      <a
        href={`/blog/page/${data.currentPage - 1}`}
        class="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 transition-colors"
        >Previous</a
      >
    {/if}
    {#if data.currentPage < data.totalPages}
      <a
        href={`/blog/page/${data.currentPage + 1}`}
        class="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 transition-colors"
        >Next</a
      >
    {/if}
  </div>

  <div class="mt-8">
    <a href="/search" class="text-blue-500 hover:underline">Search Posts</a>
  </div>
</div>
