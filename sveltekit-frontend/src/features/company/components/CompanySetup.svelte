<script lang="ts">
	import { goto } from '$app/navigation';
	import Button from '$src/components/stateless/Button.svelte';
	import { onMount } from 'svelte';
	import { auth } from '$src/features/authentication/context/auth';
	import { createCompany } from '$src/features/company/requests/createCompany';

	let input: HTMLInputElement;
	onMount(() => input.focus());

	let name = '';

	const onSubmit = async () => {
		const companyId = await createCompany($auth?.uid || '', name);
		if (!companyId) return alert('Unable to create company');
		goto(`/${companyId}`);
	};
</script>

<div class="container">
	<Button label="Cancel" variant="text" onClick={() => goto('/me')} />
	<h1>What's the name of the company?</h1>
	<input bind:this={input} bind:value={name} type="text" placeholder="Acme Corp." />
	<Button
		label="Create"
		variant="contained"
		trailingIcon={{ prefix: 'fas', name: 'check' }}
		onClick={onSubmit}
	/>
</div>

<style>
	.container {
		display: grid;
		gap: 2rem;
	}
</style>
