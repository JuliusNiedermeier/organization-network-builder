<script lang="ts">
	import { createLocation } from '$src/features/location/requests/createLocation';
	import { page } from '$app/stores';
	import { useMutation, useQuery, useQueryClient } from '@sveltestack/svelte-query';
	import AddLocation from '../AddLocation.svelte';
	import LocationList from '$src/features/company/components/stateless/LocationList.svelte';
	import CompanyDetails from '../CompanyDetails.svelte';
	import { getCompanyLocations } from '../../requests/getCompanyLocations';
	import { goto } from '$app/navigation';
	import { useLocations } from '$src/features/company/services/locations';
	import { client } from '$src/services/apolloClient';

	const queryClient = useQueryClient();

	export let companyId: string;

	$: companyId && queryClient.invalidateQueries('company-locations');

	// const companyLocationsQuery = useQuery('company-locations', () => getCompanyLocations(companyId));

	$: locations = useLocations(client, companyId);

	const addLocation = useMutation(
		(locationName: string) => createLocation(companyId, locationName),
		{
			onSuccess: (data) => queryClient.invalidateQueries('company-locations')
		}
	);

	// const onAddLocation = (locationName: string) =>
	// 	new Promise((resolve) => $addLocation.mutate(locationName, { onSuccess: resolve }));

	const onAddLocation = (name: string) => locations.addLocation({ name });
</script>

<CompanyDetails {companyId} />
<LocationList
	locations={$locations?.data || []}
	onSelect={(id) => goto(`/${$page.params.company}/${id}`)}
/>
<div class="add-location">
	<AddLocation onAdd={onAddLocation} />
</div>

<style>
	.add-location {
		position: sticky;
		bottom: 0rem;
	}
</style>
