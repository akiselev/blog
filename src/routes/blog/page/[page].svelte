<script context="module">
    export async function entries() {
        const modules = import.meta.glob("../../posts/*.md");
        const iterablePosts = Object.entries(modules);
        const postsArray = await Promise.all(
            iterablePosts.map(async ([, resolver]) => {
                const post = await resolver();
                return post.metadata;
            }),
        );
        const publishedPosts = postsArray.filter(
            (post) => post.published !== false,
        );
        const postsPerPage = 5;
        const totalPages = Math.ceil(publishedPosts.length / postsPerPage);
        const entriesArray = [];
        for (let i = 1; i <= totalPages; i++) {
            entriesArray.push({ page: String(i) });
        }
        return entriesArray;
    }

    export async function load({ params }) {
        const page = Number(params.page);
        const postsPerPage = 5;
        const modules = import.meta.glob("../../posts/*.md");
        const iterablePosts = Object.entries(modules);
        const postsArray = await Promise.all(
            iterablePosts.map(async ([path, resolver]) => {
                const post = await resolver();
                const slug = path.split("/").pop().slice(0, -3);
                return { ...post.metadata, slug };
            }),
        );
        let posts = postsArray.filter((post) => post.published !== false);
        posts.sort((a, b) => new Date(b.date) - new Date(a.date));
        const totalPages = Math.ceil(posts.length / postsPerPage);
        const start = (page - 1) * postsPerPage;
        const paginatedPosts = posts.slice(start, start + postsPerPage);
        return { posts: paginatedPosts, currentPage: page, totalPages };
    }

    export const prerender = true;
</script>

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
