<script>
  import { onMount } from "svelte";
  export let data;

  let searchQuery = "";
  let searchResults = [];
  let isSearching = false;

  function performSearch() {
    isSearching = true;
    const query = searchQuery.toLowerCase();

    searchResults = data.posts.filter((post) => {
      const searchableText = `
        ${post.title} 
        ${post.excerpt || ""} 
        ${post.content || ""} 
        ${post.tags?.join(" ") || ""} 
        ${post.category || ""}
      `.toLowerCase();

      return searchableText.includes(query);
    });

    isSearching = false;
  }

  // Debounce search to avoid too many updates
  let searchTimeout;
  function handleSearchInput() {
    clearTimeout(searchTimeout);
    searchTimeout = setTimeout(performSearch, 300);
  }

  // Initialize search results with all posts
  onMount(() => {
    searchResults = data.posts;
  });
</script>

<div class="container mx-auto p-4">
  <h1 class="text-4xl font-bold mb-8">Search Posts</h1>

  <div class="mb-8">
    <input
      type="text"
      bind:value={searchQuery}
      on:input={handleSearchInput}
      placeholder="Search posts..."
      class="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors"
    />
  </div>

  {#if isSearching}
    <p class="text-gray-600">Searching...</p>
  {:else if searchResults.length === 0}
    <p class="text-gray-600">No posts found matching your search.</p>
  {:else}
    <ul class="space-y-8">
      {#each searchResults as post}
        <li class="border-b pb-6">
          <a
            href={`/blog/${post.slug}`}
            class="text-blue-500 hover:underline transition-colors duration-300"
          >
            <h2 class="text-2xl font-semibold">{post.title}</h2>
          </a>
          <p class="text-gray-600 mt-2">{post.excerpt}</p>
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

  <div class="mt-8">
    <a href="/" class="text-blue-500 hover:underline">&larr; Back to home</a>
  </div>
</div>
