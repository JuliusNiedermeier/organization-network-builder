<script lang="ts">
	import { auth } from '$src/services/firebase';
	import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
	import Button from '$src/components/stateless/Button.svelte';

	function loginWithGoogle() {
		const provider = new GoogleAuthProvider();
		signInWithPopup(auth, provider);
	}
</script>

<div class="container">
	<Button
		label="Login with Google"
		onClick={loginWithGoogle}
		variant="text"
		leadingIcon={{ prefix: 'fas', name: 'unlock-keyhole' }}
	/>
</div>

<style>
	.container {
		height: 100vh;
		width: 100vw;
		display: grid;
		place-content: center;
	}
</style>
