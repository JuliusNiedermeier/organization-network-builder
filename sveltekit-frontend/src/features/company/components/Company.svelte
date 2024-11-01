<script lang="ts">
	import Layout from '$src/components/stateless/Layout.svelte';
	import CompanyMap from './company-map/CompanyMap.svelte';
	import CompanyDashboard from './stateful/CompanyDashboard.svelte';
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';
	import BarSelect from '$src/components/stateless/BarSelect.svelte';
	import Avatar from '$src/components/stateless/Avatar.svelte';

	$: selectedCompany = $page.url.searchParams.get('s') || $page.params.company;
</script>

<Layout>
	<div slot="navigation" style="display: flex; justify-content: space-between; gap: 1rem;">
		<BarSelect
			items={[
				{ label: 'Module 1', id: '0' },
				{ label: 'Module 2', id: '1' },
				{ label: 'Module 3', id: '2' }
			]}
			selected={'0'}
		/>
		<a href="/me">
			<Avatar src="/avatar.svg" name="Anonymous" />
		</a>
	</div>
	<div slot="sidebar" class="dashboard"><CompanyDashboard companyId={selectedCompany} /></div>

	<CompanyMap slot="main" onSelect={(id) => goto(`?s=${id}`)} selected={selectedCompany} />
</Layout>

<style>
	.dashboard {
		padding: 1rem;
		display: grid;
		gap: 2rem;
	}
</style>
