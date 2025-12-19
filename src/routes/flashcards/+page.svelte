<script lang="ts">
	export let data;
</script>

<h2>All Elements</h2>

<ul style="list-style: none; display: flex; flex-wrap: wrap; gap: 1rem;">
	{#each data.flashcards as card}
		<li>
			<a href={`/flashcards/${card.id}`}>
				<div style="border: 1px solid #ccc; padding: 1rem; width: 120px; text-align: center; border-radius: 8px;">
					<p style="font-size: 1.5rem;"><strong>{card.symbol}</strong></p>
					<p>{card.name}</p>
				</div>
			</a>
		</li>
	{/each}
</ul>
