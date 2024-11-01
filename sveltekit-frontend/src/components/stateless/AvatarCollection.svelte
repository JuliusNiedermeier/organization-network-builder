<script lang="ts">
	import Avatar from '$src/components/stateless/Avatar.svelte';

	export let avatars: { src: string; name: string }[];
</script>

<div class="avatar-collection">
	{#each avatars as avatar}
		<div class="avatar"><Avatar src={avatar.src} name={avatar.name} /></div>
	{/each}
</div>

<style>
	.avatar-collection {
		display: flex;
		flex-direction: row-reverse;
	}

	.avatar {
		margin-left: -1rem;
	}
</style>
