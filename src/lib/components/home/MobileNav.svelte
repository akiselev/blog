<script lang="ts">
	// import { BROWSER } from 'svelte/environment'; // Use SvelteKit's environment helper
	import { browser } from '$app/environment';

	type NavItem = { href: string; label: string };

	let { navItems }: { navItems: NavItem[] } = $props();

	let isOpen = $state(false);

	function toggle() {
		isOpen = !isOpen;
	}

	function close() {
		isOpen = false;
	}

	$effect(() => {
		// if (!BROWSER) return;
		if (!browser) return; // Use SvelteKit's browser check
		window.addEventListener('orientationchange', close);
		return () => window.removeEventListener('orientationchange', close);
	});
</script>

<div class="pointer-events-auto md:hidden">
	<button
		class="group flex items-center rounded-full bg-white/90 px-4 py-2 text-sm font-medium text-zinc-800 shadow-lg ring-1 shadow-zinc-800/5 ring-zinc-900/5 backdrop-blur-sm dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10 dark:hover:ring-white/20"
		type="button"
		aria-expanded={isOpen}
		onclick={toggle}
	>
		Menu
		<svg
			viewBox="0 0 8 6"
			aria-hidden="true"
			class="ml-3 h-auto w-2 stroke-zinc-500 group-hover:stroke-zinc-700 dark:group-hover:stroke-zinc-400"
		>
			<path d="M1.75 1.75 4 4.25l2.25-2.5" fill="none" stroke-width="1.5" stroke-linecap="round"
				stroke-linejoin="round"></path>
		</svg>
	</button>

	{#if isOpen}
		<div
			class="fixed inset-x-4 top-full mt-4 flex origin-top flex-col rounded-2xl bg-white p-4 text-lg tracking-tight text-zinc-900 shadow-xl ring-1 ring-zinc-900/5 dark:bg-zinc-900 dark:text-zinc-300 dark:ring-zinc-800"
		>
			<ul>
				{#each navItems as item}
					<li>
						<a class="block w-full p-2" href={item.href} onclick={close}>{item.label}</a>
					</li>
				{/each}
			</ul>
			<hr class="m-2 border-zinc-300/40 dark:border-white/10" />
			<ul>
				<li><a class="block w-full p-2" href="/login" onclick={close}>Sign in</a></li>
			</ul>
		</div>
	{/if}
</div> 