<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<nav style="display: flex; gap: 1rem; padding: 1rem; border-bottom: 1px solid #ccc;">
	<a href="/">Home</a>
	<a href="/flashcards">Flashcards</a>
</nav>

{@render children()}

