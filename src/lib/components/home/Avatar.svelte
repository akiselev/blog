<script lang="ts">
	let {
		src = '/_next/static/media/avatar.51a13c67.jpg',
		alt = '',
		class: className = '',
	} = $props<{ src?: string; alt?: string; class?: string }>();
</script>

<a aria-label="Home" class="pointer-events-auto {className}" href="/">
	<img
		{src}
		{alt}
		fetchpriority="high"
		width="512"
		height="512"
		decoding="async"
		data-nimg="1"
		class="rounded-full bg-zinc-100 object-cover dark:bg-zinc-800 h-9 w-9"
		style="color: transparent;"
		sizes="2.25rem"
	/>
	<!-- TODO: Add srcset based on src prop if needed -->
</a> 