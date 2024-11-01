<script lang="ts">
	import { goto } from '$app/navigation';
	import Button from '$src/components/stateless/Button.svelte';
	import { onMount } from 'svelte';
	import { auth } from '$src/features/authentication/context/auth';

	let name = '';

	let input: HTMLInputElement;
	onMount(() => input.focus());

	export let onCancel: () => any;
	export let onSubmit: (name: string) => Promise<any>;
</script>

<div class="container">
	<Button label="Cancel" variant="text" onClick={onCancel} />
	<h1>What's the name of the company?</h1>
	<input bind:this={input} bind:value={name} type="text" placeholder="Acme Corp." />
	<Button
		label="Create"
		variant="contained"
		trailingIcon={{ prefix: 'fas', name: 'check' }}
		onClick={() => onSubmit(name)}
	/>
</div>

<style>
	.container {
		display: grid;
		gap: 2rem;
	}
</style>
