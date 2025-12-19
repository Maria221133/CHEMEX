import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params, fetch }) => {
	const res = await fetch('/flashcards.json');
	const flashcards = await res.json();

	const card = flashcards.find((c: { id: string }) => c.id === params.id);
	return { card };
};
