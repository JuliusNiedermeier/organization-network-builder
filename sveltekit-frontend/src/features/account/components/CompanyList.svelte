<script lang="ts">
	import type { Company } from '$src/features/account/requests/getCompanies';
	import Button from '$src/components/stateless/Button.svelte';
	import List from '$src/components/stateless/List.svelte';
	import ListItem from '$src/components/stateless/ListItem.svelte';

	export let companies: Company[];
	export let handleAddCompany: () => void;
</script>

<div class="container">
	<h3>My Companies</h3>
	<List>
		{#each companies as company}
			<a href={`/${company.id}`}>
				<ListItem><h3>{company.name}</h3></ListItem>
			</a>
		{/each}
	</List>

	<div class="add-button">
		<Button
			label="Create company"
			variant="contained"
			leadingIcon={{ prefix: 'fas', name: 'add' }}
			onClick={handleAddCompany}
		/>
	</div>
</div>

<style>
	.container {
		position: relative;
		height: 100%;
	}

	.add-button {
		position: absolute;
		bottom: 0;
		display: grid;
		gap: 0.5rem;
		width: 100%;
	}
</style>
