<script>
  export let data;
</script>

<div class="container mx-auto p-4">
  <h1 class="text-4xl font-bold mb-8">Posts tagged with "{data.tag}"</h1>

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
        {#if post.tags}
          <div class="mt-2">
            {#each post.tags as tag}
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

  <div class="mt-8">
    <a href="/blog" class="text-blue-500 hover:underline"
      >&larr; Back to all posts</a
    >
  </div>
</div>
