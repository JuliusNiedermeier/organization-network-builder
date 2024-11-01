<script>
	import Layout from '$src/components/stateless/Layout.svelte';
	import CompanyController from '$src/features/account/controllers/CompanyController.svelte';
	import Navigation from '$src/features/account/controllers/Navigation.svelte';
	import ProfileController from '$src/features/account/controllers/ProfileController.svelte';
</script>

<Layout>
	<Navigation slot="navigation" />
	<div class="sidebar" slot="sidebar"><CompanyController /></div>
	<!-- <div slot="main"><ProfileController /></div> -->
</Layout>

<style>
	div {
		padding: 2rem;
	}

	.sidebar {
		height: 100%;
	}
</style>
