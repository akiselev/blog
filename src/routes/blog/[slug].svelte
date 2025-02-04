<script context="module">
    export async function load({ params, url }) {
        const preview = url.searchParams.get("preview") === "true";
        const postImport = await import(`./posts/${params.slug}.md`);
        if (!preview && postImport.metadata.published === false) {
            return { status: 404, error: new Error("Not found") };
        }
        return {
            post: postImport.default,
            metadata: postImport.metadata,
            preview,
        };
    }
</script>

<script>
    export let data;
</script>

<svelte:head>
    <title>{data.metadata.title}</title>
</svelte:head>

<article class="container mx-auto p-4">
    <header>
        <h1 class="text-4xl font-bold">{data.metadata.title}</h1>
        <p class="text-sm text-gray-500">{data.metadata.date}</p>
        {#if data.metadata.tags}
            <div class="mt-2">
                {#each data.metadata.tags as tag}
                    <a
                        href={`/blog/tag/${tag}`}
                        class="mr-2 text-blue-500 hover:underline">#{tag}</a
                    >
                {/each}
            </div>
        {/if}
        {#if data.metadata.categories}
            <div class="mt-2">
                {#each data.metadata.categories as category}
                    <a
                        href={`/blog/category/${category}`}
                        class="mr-2 text-blue-500 hover:underline">{category}</a
                    >
                {/each}
            </div>
        {/if}
    </header>

    <section class="mt-4">
        <svelte:component this={data.post} />
    </section>
</article>
