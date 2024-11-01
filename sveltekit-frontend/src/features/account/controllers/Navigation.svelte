<script>
	import Avatar from '$src/components/stateless/Avatar.svelte';
	import { auth } from '$src/features/authentication/context/auth';
</script>

<nav>
	<h3>🌱 Greenhouse</h3>
	<Avatar src={$auth?.photoURL || '/avatar.svg'} name={$auth?.displayName || 'Anonymous user'} />
</nav>

<style>
	nav {
		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: 2rem;
	}
</style>
