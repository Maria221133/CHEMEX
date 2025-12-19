import type { PageLoad } from './$types';

export const load: PageLoad = async ({ fetch }) => {
	const res = await fetch('/flashcards.json');
	const flashcards = await res.json();
	return { flashcards };
};
