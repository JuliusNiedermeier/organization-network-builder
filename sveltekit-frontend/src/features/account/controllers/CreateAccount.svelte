<script lang="ts">
	import { createAccount } from '$src/features/account/requests/createAccount';
	import { auth as authStore } from '$src/features/authentication/context/auth';
	import Button from '$src/components/stateless/Button.svelte';
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';

	let name = '';
	let input: HTMLInputElement;

	onMount(() => (name = $authStore?.displayName || name));

	const onVerify = async () => {
		const success = await createAccount($authStore?.uid || '', {
			name,
			photo: $authStore?.photoURL || '',
			email: $authStore?.email || ''
		});

		if (success) goto('/me');
	};
</script>

<div class="container">
	<h3 class="message">Is this your correct name?</h3>
	<input class="input" bind:this={input} bind:value={name} placeholder="Your name..." />
	<div class="controlls">
		<Button
			label="No"
			variant="text"
			leadingIcon={{ prefix: 'fas', name: 'delete-left' }}
			onClick={() => {
				name = '';
				input.focus();
			}}
		/>
		<Button
			label="Yes"
			variant="contained"
			leadingIcon={{ prefix: 'fas', name: 'check' }}
			disabled={name.length < 1}
			onClick={onVerify}
		/>
	</div>
</div>

<style>
	.container {
		width: 100vw;
		height: 100vh;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 1rem;
	}

	.input {
		border: none;
		outline: none;
		font-size: 2rem;
		font-weight: bold;
		color: blue;
		width: fit-content;
		text-align: center;
	}

	.controlls {
		display: flex;
		gap: 1rem;
	}
</style>
