<script lang="ts">
	import Icon from '$src/components/stateless/Icon.svelte';
	import Spinner from '$src/components/stateless/Spinner.svelte';

	export let onAdd: (locationName: string) => Promise<any>;

	let locationName: string;
	let adding = false;

	const detectSubmit = (e: KeyboardEvent) => {
		if (e.code != 'Enter') return;
		handleSubmit();
	};

	const handleSubmit = () => {
		if (!locationName) return;
		adding = true;
		onAdd(locationName).then(() => {
			locationName = '';
			adding = false;
		});
	};
</script>

<div class="add-location">
	<input
		type="text"
		class="input"
		bind:value={locationName}
		on:keypress={detectSubmit}
		placeholder="Add a location..."
	/>
	<div class="icon">
		{#if !adding}
			<span>Enter</span>
			<Icon prefix="fas" name="keyboard" />
		{/if}

		{#if adding}
			<Spinner />
		{/if}
	</div>
</div>

<style>
	.add-location {
		display: flex;
		align-items: center;
		gap: 0.5rem;
	}

	.input {
		flex: 1;
	}

	.icon {
		position: absolute;
		right: 2rem;
		color: blue;
		display: none;
	}

	.add-location:focus-within .icon {
		display: flex;
		align-items: center;
		gap: 1rem;
	}
</style>
