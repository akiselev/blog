<script lang="ts">
	// import { BROWSER } from 'svelte/environment'; // Use SvelteKit's environment helper
	import { browser } from '$app/environment';

	let prefersDark = $state(false);
	let currentTheme = $state('system');

	function applyTheme(theme: string) {
		// if (!BROWSER) return;
		if (!browser) return; // Use SvelteKit's browser check
		const root = document.documentElement;
		root.classList.remove('light', 'dark');
		root.classList.add(theme);
		root.style.colorScheme = theme;
		localStorage.setItem('theme', theme);
		currentTheme = theme;
	}

	$effect(() => {
		// if (!BROWSER) return;
		if (!browser) return; // Use SvelteKit's browser check
		let storedTheme = localStorage.getItem('theme');
		const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
		prefersDark = mediaQuery.matches;

		if (storedTheme === 'light' || storedTheme === 'dark') {
			applyTheme(storedTheme);
		} else {
			// system or invalid/no theme
			applyTheme(prefersDark ? 'dark' : 'light');
			currentTheme = 'system'; // Keep track that we are following system preference
		}

		const handler = (e: MediaQueryListEvent) => {
			prefersDark = e.matches;
			if (currentTheme === 'system') {
				applyTheme(prefersDark ? 'dark' : 'light');
			}
		};

		mediaQuery.addEventListener('change', handler);
		return () => mediaQuery.removeEventListener('change', handler);
	});

	function toggleTheme() {
		applyTheme(currentTheme === 'dark' || (currentTheme === 'system' && prefersDark) ? 'light' : 'dark');
	}
</script>

<div class="pointer-events-auto">
	<button
		type="button"
		aria-label="Switch theme"
		class="group rounded-full bg-white/90 px-3 py-2 shadow-lg ring-1 shadow-zinc-800/5 ring-zinc-900/5 backdrop-blur-sm transition dark:bg-zinc-800/90 dark:ring-white/10 dark:hover:ring-white/20"
		onclick={toggleTheme}
	>
		<svg
			viewBox="0 0 24 24"
			stroke-width="1.5"
			stroke-linecap="round"
			stroke-linejoin="round"
			aria-hidden="true"
			class="h-6 w-6 fill-zinc-100 stroke-zinc-500 transition group-hover:fill-zinc-200 group-hover:stroke-zinc-700 dark:hidden [@media(prefers-color-scheme:dark)]:fill-teal-50 [@media(prefers-color-scheme:dark)]:stroke-teal-500 [@media(prefers-color-scheme:dark)]:group-hover:fill-teal-50 [@media(prefers-color-scheme:dark)]:group-hover:stroke-teal-600"
		>
			<path
				d="M8 12.25A4.25 4.25 0 0 1 12.25 8v0a4.25 4.25 0 0 1 4.25 4.25v0a4.25 4.25 0 0 1-4.25 4.25v0A4.25 4.25 0 0 1 8 12.25v0Z"
			></path>
			<path
				d="M12.25 3v1.5M21.5 12.25H20M18.791 18.791l-1.06-1.06M18.791 5.709l-1.06 1.06M12.25 20v1.5M4.5 12.25H3M6.77 6.77 5.709 5.709M6.77 17.73l-1.061 1.061"
				fill="none"
			></path>
		</svg>
		<svg
			viewBox="0 0 24 24"
			aria-hidden="true"
			class="hidden h-6 w-6 fill-zinc-700 stroke-zinc-500 transition dark:block [@media_not_(prefers-color-scheme:dark)]:fill-teal-400/10 [@media_not_(prefers-color-scheme:dark)]:stroke-teal-500 [@media(prefers-color-scheme:dark)]:group-hover:stroke-zinc-400"
		>
			<path
				d="M17.25 16.22a6.937 6.937 0 0 1-9.47-9.47 7.451 7.451 0 1 0 9.47 9.47ZM12.75 7C17 7 17 2.75 17 2.75S17 7 21.25 7C17 7 17 11.25 17 11.25S17 7 12.75 7Z"
				stroke-width="1.5"
				stroke-linecap="round"
				stroke-linejoin="round"
			></path>
		</svg>
	</button>
</div> 