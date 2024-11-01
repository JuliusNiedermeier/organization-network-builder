import { createClient } from '@urql/svelte';

export const client = createClient({
	url: 'http://localhost:4000'
});
