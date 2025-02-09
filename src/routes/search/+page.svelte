<script>
  import { onMount } from "svelte";
  import Fuse from "fuse.js";

  let searchQuery = "";
  let searchResults = [];
  let fuse;
  let posts = [];

  onMount(async () => {
    const response = await fetch("/api/search-index.json");
    posts = await response.json();

    fuse = new Fuse(posts, {
      keys: ["title", "content", "excerpt"],
      threshold: 0.3,
      includeMatches: true,
    });
  });

  function handleSearch() {
    if (!searchQuery.trim()) {
      searchResults = [];
      return;
    }
    searchResults = fuse.search(searchQuery);
  }

  function formatDate(dateString) {
    return new Date(dateString).toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  }

  $: {
    if (searchQuery) {
      handleSearch();
    } else {
      searchResults = [];
    }
  }
</script>

<div class="mx-auto max-w-7xl px-6 lg:px-8">
  <div class="mx-auto max-w-2xl lg:max-w-4xl">
    <h1
      class="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl"
    >
      Search Articles
    </h1>
    <p class="mt-6 text-base text-zinc-600 dark:text-zinc-400">
      Search through all articles by title, content, or excerpt.
    </p>

    <div class="mt-8 flex">
      <div class="relative flex-1">
        <div
          class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"
        >
          <svg
            class="h-5 w-5 text-zinc-400"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
              clip-rule="evenodd"
            />
          </svg>
        </div>
        <input
          type="text"
          bind:value={searchQuery}
          placeholder="Search articles..."
          class="block w-full rounded-lg border-0 bg-white py-3 pl-10 pr-4 text-zinc-900 ring-1 ring-inset ring-zinc-300 placeholder:text-zinc-400 focus:ring-2 focus:ring-inset focus:ring-teal-500 dark:bg-zinc-800/90 dark:text-zinc-50 dark:ring-zinc-700 dark:placeholder:text-zinc-500 dark:focus:ring-teal-400"
        />
      </div>
    </div>

    {#if searchResults.length > 0}
      <div class="mt-16 sm:mt-20">
        <div
          class="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40"
        >
          <div class="flex max-w-3xl flex-col space-y-16">
            {#each searchResults as result}
              <article class="md:grid md:grid-cols-4 md:items-baseline">
                <div
                  class="md:col-span-3 group relative flex flex-col items-start"
                >
                  <h2
                    class="text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100"
                  >
                    <div
                      class="absolute -inset-x-4 -inset-y-6 z-0 scale-95 bg-zinc-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 dark:bg-zinc-800/50 sm:-inset-x-6 sm:rounded-2xl"
                    ></div>
                    <a href={`/blog/${result.item.slug}`}>
                      <span
                        class="absolute -inset-x-4 -inset-y-6 z-20 sm:-inset-x-6 sm:rounded-2xl"
                      ></span>
                      <span class="relative z-10">{result.item.title}</span>
                    </a>
                  </h2>
                  <time
                    class="md:hidden relative z-10 order-first mb-3 flex items-center text-sm text-zinc-400 dark:text-zinc-500 pl-3.5"
                    datetime={result.item.date}
                  >
                    <span
                      class="absolute inset-y-0 left-0 flex items-center"
                      aria-hidden="true"
                    >
                      <span
                        class="h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500"
                      ></span>
                    </span>
                    {formatDate(result.item.date)}
                  </time>
                  <p
                    class="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400"
                  >
                    {result.item.excerpt}
                  </p>
                  <div
                    class="relative z-10 mt-4 flex items-center text-sm font-medium text-teal-500"
                  >
                    Read article
                    <svg
                      viewBox="0 0 16 16"
                      fill="none"
                      aria-hidden="true"
                      class="ml-1 h-4 w-4 stroke-current"
                    >
                      <path
                        d="M6.75 5.75 9.25 8l-2.5 2.25"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </svg>
                  </div>
                </div>
                <time
                  class="mt-1 hidden md:block relative z-10 order-first mb-3 flex items-center text-sm text-zinc-400 dark:text-zinc-500"
                  datetime={result.item.date}
                >
                  {formatDate(result.item.date)}
                </time>
              </article>
            {/each}
          </div>
        </div>
      </div>
    {:else if searchQuery}
      <div class="mt-16 text-center text-zinc-600 dark:text-zinc-400">
        No results found for "{searchQuery}"
      </div>
    {/if}
  </div>
</div>
