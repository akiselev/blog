<script context="module">
  const posts = import.meta.glob("../posts/*.md", { eager: true });
  export function getPostBySlug(slug) {
    const key = Object.keys(posts).find(
      (path) => path.split("/").pop().slice(0, -3) === slug
    );
    return posts[key];
  }
</script>

<script>
  export let data;
  const post = getPostBySlug(data.slug);
  const Content = post.default;

  function formatDate(dateString) {
    return new Date(dateString).toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  }
</script>

<svelte:head>
  <title>{data.title}</title>
</svelte:head>

<div class="mx-auto max-w-7xl px-6 lg:px-8">
  <div class="mx-auto max-w-2xl lg:max-w-4xl">
    <article>
      <header class="flex flex-col">
        <h1
          class="mt-6 text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl"
        >
          {data.title}
        </h1>
        <time
          datetime={data.date}
          class="order-first flex items-center text-base text-zinc-400 dark:text-zinc-500"
        >
          <span class="h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500"
          ></span>
          <span class="ml-3">{formatDate(data.date)}</span>
        </time>
        {#if data.tags || data.categories}
          <div class="mt-4 flex flex-wrap gap-2">
            {#if data.categories}
              {#each data.categories as category}
                <a
                  href={`/blog/category/${category}`}
                  class="inline-flex items-center rounded-full bg-zinc-100 px-3 py-1 text-sm font-medium text-zinc-900 hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-100 dark:hover:bg-zinc-700"
                >
                  {category}
                </a>
              {/each}
            {/if}
            {#if data.tags}
              {#each data.tags as tag}
                <a
                  href={`/blog/tag/${tag}`}
                  class="inline-flex items-center rounded-full bg-zinc-100 px-3 py-1 text-sm font-medium text-zinc-900 hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-100 dark:hover:bg-zinc-700"
                >
                  #{tag}
                </a>
              {/each}
            {/if}
          </div>
        {/if}
      </header>

      <div
        class="mt-8 prose prose-zinc max-w-none dark:prose-invert prose-headings:scroll-mt-20 prose-headings:font-display prose-headings:font-bold prose-headings:tracking-tight prose-a:text-teal-500 hover:prose-a:text-teal-600 dark:prose-a:text-teal-400 dark:hover:prose-a:text-teal-300 prose-pre:rounded-xl prose-pre:bg-zinc-900 prose-pre:shadow-lg dark:prose-pre:bg-zinc-800/60 dark:prose-pre:shadow-none dark:prose-pre:ring-1 dark:prose-pre:ring-zinc-300/10"
      >
        <svelte:component this={Content} />
      </div>

      <div class="mt-16">
        <a
          href="/blog/page/1"
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
          Back to all posts
        </a>
      </div>
    </article>
  </div>
</div>

<style>
  :global(.prose pre) {
    background-color: theme("colors.zinc.900") !important;
    color: theme("colors.zinc.50") !important;
  }

  :global(.dark .prose pre) {
    background-color: theme("colors.zinc.800/60") !important;
  }

  :global(.prose pre code) {
    color: inherit;
    font-size: theme("fontSize.sm");
    font-family: theme("fontFamily.mono");
    line-height: theme("lineHeight.relaxed");
  }

  :global(.prose img) {
    border-radius: theme("borderRadius.xl");
  }
</style>
