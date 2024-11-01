<script lang="ts">
	import {
		faAdd,
		faUser,
		faHouse,
		faCog,
		faUnlockKeyhole,
		faPowerOff,
		faCheck,
		faDeleteLeft,
		faKeyboard,
		faEllipsisVertical,
		faXmark,
		faTrashCan
	} from '@fortawesome/free-solid-svg-icons';
	import { library } from '@fortawesome/fontawesome-svg-core';

	import { auth } from '$src/services/firebase';
	import { onAuthStateChanged } from 'firebase/auth';
	import { onMount } from 'svelte';
	import { goto, beforeNavigate } from '$app/navigation';
	import Spinner from '$src/components/stateless/Spinner.svelte';
	import { getAccountExistence } from '$src/features/account/requests/getAccountExistence';
	import { auth as authContext } from '$src/features/authentication/context/auth';
	import { page } from '$app/stores';

	import { setContextClient } from '@urql/svelte';
	import { client } from '$src/services/urqlClient';

	setContextClient(client);

	library.add(
		faAdd,
		faUser,
		faHouse,
		faCog,
		faUnlockKeyhole,
		faPowerOff,
		faCheck,
		faDeleteLeft,
		faKeyboard,
		faEllipsisVertical,
		faXmark,
		faTrashCan
	);

	beforeNavigate((navigation) => {
		if (!auth.currentUser && navigation.to?.pathname != '/login') navigation.cancel();
		if (auth.currentUser && navigation.to?.pathname == '/login') navigation.cancel();
	});

	onMount(() => {
		onAuthStateChanged(auth, async (user) => {
			if (!user) {
				await goto('/login');
				return (loading = false);
			}

			authContext.set(user);

			const accountExists = await getAccountExistence(user.uid);

			if (!accountExists) {
				await goto('/setup/account');
				return (loading = false);
			}

			if ($page.routeId == 'login' || $page.routeId == 'setup/account') {
				await goto('/me');
				return (loading = false);
			}

			loading = false;
		});
	});

	let loading = true;
</script>

{#if loading}
	<div class="spinner">
		<Spinner />
	</div>
{/if}

{#if !loading}
	<slot />
{/if}

<style>
	:global(:root) {
		font-family: sans-serif;
	}

	:global(body) {
		margin: 0;
		height: 100vh;
		overflow: hidden;
	}

	:global(*) {
		box-sizing: border-box;
		margin: 0;
		padding: 0;
	}

	:global(a) {
		text-decoration: inherit;
		color: inherit;
	}

	:global(input) {
		border: 1px solid rgb(219, 219, 219);
		border-radius: 0.5rem;
		outline: none;
		padding: 1rem;
		font-size: 1rem;
	}

	:global(input:hover) {
		border-color: blue;
	}

	:global(input:focus) {
		border-color: blue;
		box-shadow: 0 0 0 3px rgba(0, 0, 255, 0.2);
	}

	:global(.clickable:active) {
		transition: box-shadow 250ms ease;
	}

	:global(.clickable:active) {
		box-shadow: 0 0 0 3px rgba(0, 0, 255, 0.2);
	}

	:global(::-webkit-scrollbar) {
		width: 5px;
		height: 5px;
	}

	:global(::-webkit-scrollbar-thumb) {
		background-color: #dbdbdb;
	}

	.spinner {
		width: 100vw;
		height: 100vh;
		display: grid;
		place-items: center;
	}
</style>
