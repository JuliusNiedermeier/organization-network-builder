<script lang="ts">
	import Button from '$src/components/stateless/Button.svelte';

	export let name: string;
	export let handleDelete: () => void;
</script>

<div class="header">
	<h1>{name}</h1>
	<Button
		trailingIcon={{ prefix: 'fas', name: 'trash-can' }}
		label="Delete"
		onClick={handleDelete}
	/>
</div>

<style>
	.header {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
</style>
