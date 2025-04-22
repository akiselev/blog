<script lang="ts">
	import Header from '$lib/components/home/Header.svelte';
	import Footer from '$lib/components/home/Footer.svelte';
	import Container from '$lib/components/home/Container.svelte';
	import ArticleCard from '$lib/components/home/ArticleCard.svelte';

	// Type for the data loaded from +page.server.js
	type LoadData = import('./$types').PageData;

	// Get loaded data from props
	let { data }: { data: LoadData } = $props();

	// Destructure data for easier access in the template
	const { posts, title, description, metaTitle } = data;

	// Define Article type based on loaded data structure (adjust if necessary based on actual metadata)
	type Article = {
		href: string;
		title: string;
		date: string;
		description?: string; // Make optional if not always present
		// Add other expected metadata fields
	};
</script>

<svelte:head>
	<title>{metaTitle}</title>
	<meta name="description" content={description} />
	<!-- Add other meta tags like canonical, Open Graph etc. -->
</svelte:head>

<div class="flex w-full flex-col">
	<!-- Background decoration -->
	<div class="fixed inset-0 flex justify-center sm:px-8">
		<div class="flex w-full max-w-7xl lg:px-8">
			<div class="w-full bg-white ring-1 ring-zinc-100 dark:bg-zinc-900 dark:ring-zinc-300/20"></div>
		</div>
	</div>

	<div class="relative">
		<Header />

		<main class="flex-auto">
			<Container class="mt-16 sm:mt-32">
				<header class="max-w-2xl">
					<h1 class="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
						{title}
					</h1>
					<p class="mt-6 text-base text-zinc-600 dark:text-zinc-400">
						{description}
					</p>
				</header>
				<div class="mt-16 sm:mt-20">
					<div class="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
						<div class="flex max-w-3xl flex-col space-y-16">
							{#each posts as article (article.href)} 
								<ArticleCard article={article} />
							{/each}
						</div>
					</div>
				</div>
			</Container>
		</main>

		<Footer />
	</div>
</div>
