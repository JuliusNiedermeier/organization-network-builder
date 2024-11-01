<script lang="ts">
	import { useMutation, useQuery, useQueryClient } from '@sveltestack/svelte-query';
	import { goto } from '$app/navigation';
	import { getCompanyDetails } from '$src/features/company/requests/getCompanyDetails';
	import { updateCompanyDetails } from '$src/features/company/requests/updateCompanyDescription';
	import { deleteCompany } from '$src/features/company/requests/deleteCompany';
	import CompanyDashboardHeader from './stateless/CompanyDashboardHeader.svelte';
	import CompanyDashboardMeta from './stateless/CompanyDashboardMeta.svelte';
	import CompanyDashboardStatistics from './stateless/CompanyDashboardStatistics.svelte';

	const queryClient = useQueryClient();

	export let companyId: string;

	$: companyId && queryClient.invalidateQueries('company-details');

	const companyDetailsQuery = useQuery('company-details', () => getCompanyDetails(companyId));

	const updateDescriptionMutation = useMutation((description: string) =>
		updateCompanyDetails(companyId, description)
	);

	const deleteCompanyMutation = useMutation((id: string) => deleteCompany(id));
</script>

<CompanyDashboardHeader
	name={$companyDetailsQuery.data?.name || ''}
	handleDelete={() => $deleteCompanyMutation.mutate(companyId, { onSuccess: () => goto('/me') })}
/>

<CompanyDashboardMeta
	users={$companyDetailsQuery.data?.users.map((user) => ({
		photoURL: user.photo,
		name: user.name,
		id: user.id
	})) || []}
	description={$companyDetailsQuery.data?.description || ''}
	onDescriptionUpdate={(description) => $updateDescriptionMutation.mutate(description)}
/>

<CompanyDashboardStatistics />
