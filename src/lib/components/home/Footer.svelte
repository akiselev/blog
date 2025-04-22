<script lang="ts">
	import Container from './Container.svelte';

	let {
		copyrightYear = new Date().getFullYear(),
		copyrightName = 'Spencer Sharp',
		links = [
			{ href: '/about', label: 'About' },
			{ href: '/projects', label: 'Projects' },
			{ href: '/speaking', label: 'Speaking' },
			{ href: '/uses', label: 'Uses' },
		],
	} = $props<{
		copyrightYear?: number;
		copyrightName?: string;
		links?: { href: string; label: string }[];
	}>();
</script>

<footer class="mt-32 flex-none">
	<Container>
		<div class="border-t border-zinc-100 pt-10 pb-16 dark:border-zinc-700/40">
			<div class="relative px-4 sm:px-8 lg:px-12">
				<div class="mx-auto max-w-2xl lg:max-w-5xl">
					<div class="flex flex-col items-center justify-between gap-6 sm:flex-row">
						<div
							class="flex flex-wrap justify-center gap-x-6 gap-y-1 text-sm font-medium text-zinc-800 dark:text-zinc-200"
						>
							{#each links as link}
								<a class="transition hover:text-teal-500 dark:hover:text-teal-400" href={link.href}>
									{link.label}
								</a>
							{/each}
						</div>
						<p class="text-sm text-zinc-400 dark:text-zinc-500">
							&copy; {copyrightYear} {copyrightName}. All rights reserved.
						</p>
					</div>
				</div>
			</div>
		</div>
	</Container>
</footer> 