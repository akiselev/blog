<script>
  export let data;
</script>

<div class="container mx-auto p-4">
  <div class="flex flex-col md:flex-row gap-8">
    <!-- Main content -->
    <main class="md:w-3/4">
      <h1 class="text-4xl font-bold mb-8">Blog Posts</h1>

      {#if data.posts.length === 0}
        <p class="text-gray-600">No posts found.</p>
      {:else}
        <ul class="space-y-8">
          {#each data.posts as post}
            <li class="border-b pb-6">
              <a
                href={`/blog/${post.slug}`}
                class="text-blue-500 hover:underline transition-colors duration-300"
              >
                <h2 class="text-2xl font-semibold">{post.title}</h2>
              </a>
              {#if post.type === "link"}
                <p class="text-gray-600 mt-2">Link post – {post.excerpt}</p>
              {:else}
                <p class="text-gray-600 mt-2">{post.excerpt}</p>
              {/if}
              <div class="mt-2 flex items-center space-x-4">
                <p class="text-sm text-gray-500">{post.date}</p>
                {#if post.category}
                  <a
                    href={`/blog/category/${post.category}`}
                    class="text-sm text-blue-500 hover:underline"
                  >
                    {post.category}
                  </a>
                {/if}
              </div>
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
      {/if}
    </main>

    <!-- Sidebar -->
    <aside class="md:w-1/4">
      <div class="sticky top-4">
        <!-- Categories -->
        <div class="mb-8">
          <h2 class="text-xl font-bold mb-4">Categories</h2>
          <ul class="space-y-2">
            {#each data.categories as category}
              <li>
                <a
                  href={`/blog/category/${category}`}
                  class="text-blue-500 hover:underline"
                >
                  {category}
                </a>
              </li>
            {/each}
          </ul>
        </div>

        <!-- Tags -->
        <div class="mb-8">
          <h2 class="text-xl font-bold mb-4">Tags</h2>
          <div class="flex flex-wrap gap-2">
            {#each data.tags as tag}
              <a
                href={`/blog/tag/${tag}`}
                class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 hover:bg-gray-300 transition-colors"
              >
                #{tag}
              </a>
            {/each}
          </div>
        </div>

        <!-- Search -->
        <div class="mb-8">
          <h2 class="text-xl font-bold mb-4">Search</h2>
          <a
            href="/search"
            class="inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
          >
            Search Posts
          </a>
        </div>
      </div>
    </aside>
  </div>
</div>
