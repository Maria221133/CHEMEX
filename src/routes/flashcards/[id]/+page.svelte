<script lang="ts">
	export let data;
	import Flashcard from '$lib/Flashcard.svelte';
</script>

<h2>Flashcard #{data.card.id}</h2>

<Flashcard
	symbol={data.card.symbol}
	name={data.card.name}
	atomicNumber={data.card.atomicNumber}
	atomicMass={data.card.atomicMass}
/>

<a href="/flashcards">
	<button>Back</button>
</a>
