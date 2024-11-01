<script lang="ts">
	import Duration from '$src/components/stateless/Duration.svelte';
	import AvatarCollection from '$src/components/stateless/AvatarCollection.svelte';

	export let users: { photoURL: string; name: string; id: string }[];
	export let description: string;
	export let onDescriptionUpdate: (description: string) => void;
</script>

<div class="meta">
	<Duration from="27. Januar 1968" to="Today" />
	<AvatarCollection
		avatars={users.map((user) => ({
			src: user.photoURL,
			name: user.name
		})) || []}
	/>
</div>

<input
	class="description"
	bind:value={description}
	on:blur={() => onDescriptionUpdate(description)}
	placeholder="Describe this company in a few words..."
/>

<style>
	.meta {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
</style>
