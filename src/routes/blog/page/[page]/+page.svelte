<script>
  export let data;

  function formatDate(dateString) {
    return new Date(dateString).toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  }
</script>

<div class="mx-auto max-w-7xl px-6 lg:px-8">
  <div class="mx-auto max-w-2xl lg:max-w-4xl">
    <h1
      class="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl"
    >
      All Posts
    </h1>
    <p class="mt-6 text-base text-zinc-600 dark:text-zinc-400">
      Page {data.currentPage} of {data.totalPages}
    </p>

    <div class="mt-16 sm:mt-20">
      <div
        class="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40"
      >
        <div class="flex max-w-3xl flex-col space-y-16">
          {#each data.posts as post}
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
                  <a href={`/blog/${post.slug}`}>
                    <span
                      class="absolute -inset-x-4 -inset-y-6 z-20 sm:-inset-x-6 sm:rounded-2xl"
                    ></span>
                    <span class="relative z-10">{post.title}</span>
                  </a>
                </h2>
                <time
                  class="md:hidden relative z-10 order-first mb-3 flex items-center text-sm text-zinc-400 dark:text-zinc-500 pl-3.5"
                  datetime={post.date}
                >
                  <span
                    class="absolute inset-y-0 left-0 flex items-center"
                    aria-hidden="true"
                  >
                    <span
                      class="h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500"
                    ></span>
                  </span>
                  {formatDate(post.date)}
                </time>
                <p
                  class="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400"
                >
                  {#if post.type === "link"}
                    Link post – {post.excerpt}
                  {:else}
                    {post.excerpt}
                  {/if}
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
                datetime={post.date}
              >
                {formatDate(post.date)}
              </time>
            </article>
          {/each}
        </div>
      </div>
    </div>

    <div class="mt-16 flex items-center justify-between">
      {#if data.currentPage > 1}
        <a
          href={`/blog/page/${data.currentPage - 1}`}
          class="group flex items-center text-sm font-medium text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
        >
          <svg
            viewBox="0 0 16 16"
            fill="none"
            aria-hidden="true"
            class="mr-3 h-4 w-4 stroke-current"
          >
            <path
              d="M9.25 10.25L6.75 8l2.5-2.25"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </svg>
          Previous
        </a>
      {:else}
        <div></div>
      {/if}

      {#if data.currentPage < data.totalPages}
        <a
          href={`/blog/page/${data.currentPage + 1}`}
          class="group flex items-center text-sm font-medium text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
        >
          Next
          <svg
            viewBox="0 0 16 16"
            fill="none"
            aria-hidden="true"
            class="ml-3 h-4 w-4 stroke-current"
          >
            <path
              d="M6.75 5.75 9.25 8l-2.5 2.25"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </svg>
        </a>
      {:else}
        <div></div>
      {/if}
    </div>
  </div>
</div>
