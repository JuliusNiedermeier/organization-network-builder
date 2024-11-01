<script lang="ts">
	import Button from '$src/components/stateless/Button.svelte';

	export let name: string;
	export let email: string;
	export let handleLogout: () => void;
	export let handleNameUpdate: (name: string) => void;
</script>

<div class="profile">
	<h3>{email}</h3>
	<input
		type="text"
		bind:value={name}
		on:blur={() => handleNameUpdate(name)}
		placeholder="Your name"
	/>
	<Button
		label="Logout"
		variant="text"
		leadingIcon={{ prefix: 'fas', name: 'power-off' }}
		onClick={handleLogout}
	/>
</div>

<style>
	.profile {
		display: flex;
		flex-direction: column;
		gap: 2rem;
		place-items: center;
	}
</style>
