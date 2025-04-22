<script lang="ts">
	type Snippet = import('svelte').Snippet;
	let { children, class: className = '' }: { children?: Snippet; class?: string } = $props();
</script>

<div class="sm:px-8 {className}">
	<div class="mx-auto w-full max-w-7xl lg:px-8">
		<div class="relative px-4 sm:px-8 lg:px-12">
			<div class="mx-auto max-w-2xl lg:max-w-5xl">{@render children?.()}</div>
		</div>
	</div>
</div> 