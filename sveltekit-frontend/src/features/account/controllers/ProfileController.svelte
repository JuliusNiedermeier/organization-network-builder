<script lang="ts">
	import { auth } from '$src/features/authentication/context/auth';
	import { getProfile, type Profile as IProfile } from '$src/features/account/requests/getProfile';
	import { updateProfile } from '$src/features/account/requests/updateProfile';
	import { useQuery, useMutation } from '@sveltestack/svelte-query';
	import { signOut } from 'firebase/auth';
	import { auth as authInstance } from '$src/services/firebase';
	import Profile from '$src/features/account/components/Profile.svelte';

	const profileQuery = useQuery('profile', () => getProfile($auth?.uid || ''));

	const mutation = useMutation((profile: IProfile) => updateProfile($auth?.uid || '', profile));

	const onNameUpdate = (name: string) =>
		$mutation.mutate({
			name,
			email: $profileQuery.data?.email || '',
			photo: $profileQuery.data?.photo || ''
		});

	const onLogout = () => signOut(authInstance);
</script>

<Profile
	name={$profileQuery.data?.name || ''}
	email={$profileQuery.data?.email || ''}
	handleLogout={onLogout}
	handleNameUpdate={onNameUpdate}
/>
