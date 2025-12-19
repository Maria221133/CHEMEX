<script lang="ts">

	const { symbol, name, atomicNumber, atomicMass } = $props<{
		symbol: string;
		name: string;
		atomicNumber: number;
		atomicMass: string;
	}>();

	let flipped = $state(false);
	function flipCard() {
		flipped = !flipped;
	}
</script>

<style>
	.card {
		border: 2px solid var(--card-color, black);
		padding: 2rem;
		border-radius: 12px;
		cursor: pointer;
		width: 340px;
		transition: transform 0.3s;
	}
	.card:hover {
		transform: scale(1.02);
	}
</style>

<div class="card" on:click={flipCard}>
	{#if flipped}
		<p>Atomic Number: {atomicNumber}</p>
		<p>Atomic Mass: {atomicMass}</p>
		<p>Name: {name}</p>
	{:else}
		<p>{symbol}</p>
	{/if}
</div>
