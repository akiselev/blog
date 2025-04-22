<script lang="ts">
	import { browser } from '$app/environment';
	import { page } from '$app/stores';
	import Container from './Container.svelte';
	import Avatar from './Avatar.svelte';
	import NavLink from './NavLink.svelte';
	import ThemeToggle from './ThemeToggle.svelte';
	import MobileNav from './MobileNav.svelte';

	// Remove hardcoded current page
	// const currentPage = 'articles';

	const navItems = [
		{ href: '/about', label: 'About' },
		// { href: '/articles', label: 'Articles' }, // Remove if articles page is moved to root
		{ href: '/blog', label: 'Blog' }, // Assuming blog is at /blog now
		{ href: '/projects', label: 'Projects' },
		{ href: '/speaking', label: 'Speaking' },
		{ href: '/uses', label: 'Uses' },
	];

	let headerRef: HTMLElement | undefined = $state();
	let avatarRef: HTMLElement | undefined = $state();
	let isHomePage = $derived($page.url.pathname === '/'); // Determine if home page dynamically

	let headerHeight = $state(0);
	let headerMb = $state(0);
	let headerPosition = $state('sticky');
	let headerInnerPosition: string | undefined = $state(undefined);
	let headerTop = $state(0);
	let avatarTop = $state(0);
	let contentOffset = $state(0);

	$effect(() => {
		if (!browser) return;

		let downDelay = avatarRef?.offsetTop ?? 0;
		let upDelay = 64; // Example value, adjust as needed

		function setProperty(property: string, value: string) {
			document.documentElement.style.setProperty(property, value);
		}

		function updateHeaderStyles() {
			if (!headerRef) return;
			let height = headerRef.getBoundingClientRect().height;
			let scrollY = window.scrollY;
			headerHeight = height;

			if (isHomePage) {
				// Logic specific to home page header animation (simplified)
				setProperty('--header-position', 'sticky');
				setProperty('--content-offset', `${headerHeight}px`);
			} else {
				// Logic for non-home pages
				if (scrollY <= 0) {
					headerPosition = 'sticky';
					headerInnerPosition = undefined;
					headerTop = 0;
				} else {
					headerPosition = 'relative'; // Or adjust based on scroll direction
					headerInnerPosition = 'relative';
					headerTop = 0; // Adjust as needed
				}
			}
		}

		function updateAvatarStyles() {
			if (!avatarRef) return;
			if (!isHomePage) {
				setProperty('--avatar-border-opacity', scrollY > 0 ? '1' : '0');
				return;
			}
			// Home page specific avatar logic (simplified)
			let scrollY = window.scrollY;
			let avatarScale = Math.max(0, 1 - scrollY / 200); // Example scaling
			setProperty('--avatar-image-transform', `translate3d(0rem, 0, 0) scale(${avatarScale})`);
			// ... other avatar properties ...
		}

		updateHeaderStyles();
		updateAvatarStyles();
		window.addEventListener('scroll', updateAvatarStyles, { passive: true });
		window.addEventListener('resize', updateHeaderStyles, { passive: true });

		return () => {
			window.removeEventListener('scroll', updateAvatarStyles);
			window.removeEventListener('resize', updateHeaderStyles);
		};
	});
</script>

<header
	bind:this={headerRef}
	class="pointer-events-none relative z-50 flex flex-none flex-col {isHomePage ? 'is-home' : ''}"
	style="height:{headerHeight}px; margin-bottom:{headerMb}px;"
>
	{#if !isHomePage}
		<div
			bind:this={avatarRef}
			class="order-last mt-[calc(theme(spacing.16)-theme(spacing.3))]"
		></div>
	{/if}
	<div
		class="top-0 z-10 h-16 pt-6"
		style="position:{headerPosition}; top:{headerTop}px;"
	>
		<Container class="top-{headerTop} w-full" style="position:{headerInnerPosition};">
			<div class="relative flex gap-4">
				<div class="flex flex-1">
					{#if isHomePage}
						<div
							class="h-10 w-10 rounded-full bg-white/90 p-0.5 shadow-lg ring-1 shadow-zinc-800/5 ring-zinc-900/5 backdrop-blur-sm dark:bg-zinc-800/90 dark:ring-white/10"
							style="transform: var(--avatar-border-transform); opacity: var(--avatar-border-opacity);"
						>
							<Avatar class="block h-full w-full" style="transform: var(--avatar-image-transform);" />
						</div>
					{:else}
						<div
							bind:this={avatarRef} class="h-10 w-10 rounded-full bg-white/90 p-0.5 shadow-lg ring-1 shadow-zinc-800/5 ring-zinc-900/5 backdrop-blur-sm dark:bg-zinc-800/90 dark:ring-white/10"
						>
							<Avatar />
						</div>
					{/if}
				</div>
				<div class="flex flex-1 justify-end md:justify-center">
					<MobileNav {navItems} />
					<nav class="pointer-events-auto hidden md:block">
						<ul
							class="flex rounded-full bg-white/90 px-3 text-sm font-medium text-zinc-800 shadow-lg ring-1 shadow-zinc-800/5 ring-zinc-900/5 backdrop-blur-sm dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10"
						>
							{#each navItems as item}
								<NavLink href={item.href} label={item.label} active={$page.url.pathname === item.href} />
							{/each}
						</ul>
					</nav>
				</div>
				<div class="flex justify-end md:flex-1">
					<ThemeToggle />
				</div>
			</div>
		</Container>
	</div>
</header> 