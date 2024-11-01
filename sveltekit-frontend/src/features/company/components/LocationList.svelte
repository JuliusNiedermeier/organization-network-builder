<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import List from '$src/components/stateless/List.svelte';
	import ListItem from '$src/components/stateless/ListItem.svelte';
	import type { Location } from '../requests/getCompanyLocations';

	export let locations: Location[];
</script>

<List>
	{#each locations as location}
		<ListItem>
			<div
				class="location-list-item"
				on:click={() => goto(`/${$page.params.company}/${location.id}}`)}
			>
				<div>
					<h3>{location.name}</h3>
					<small>25 employees • 950 activities</small>
				</div>
				<h4>27t CO²</h4>
			</div>
		</ListItem>
	{/each}
</List>

<style>
	.location-list-item {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 1rem;
	}

	.location-list-item:hover {
		background-color: rgb(247, 247, 247);
	}
</style>
