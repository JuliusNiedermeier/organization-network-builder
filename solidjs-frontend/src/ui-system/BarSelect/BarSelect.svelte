<script lang="ts">
	import type { Icon } from '@fortawesome/fontawesome-svg-core';

	import Button from '$src/components/stateless/Button.svelte';
	import type { IconProps } from '$src/components/stateless/Icon.svelte';

	type ItemId = string | number;
	type Item = {
		id: ItemId | number;
		label: string;
		icon?: IconProps;
		onClick?: () => Promise<void>;
	};

	export let items: Item[];
	export let selected: ItemId;

	function onClick(item: Item) {
		if (!item.onClick) {
			selected = item.id;
			return;
		}

		item.onClick().then(() => {
			selected = item.id;
		});
	}
</script>

<div class="container">
	{#each items as item}
		<Button
			label={item.label}
			variant={item.id == selected ? 'contained' : 'text'}
			leadingIcon={item.icon}
			onClick={() => onClick(item)}
		/>
	{/each}
</div>

<style>
	.container {
		border-radius: 0.5rem;
		background-color: rgba(0, 0, 255, 0.1);
		padding: 0.25rem;
		display: flex;
		flex-direction: row;
		gap: 0.25rem;
	}
</style>
