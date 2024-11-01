<script lang="ts">
	import { auth } from '$src/features/authentication/context/auth';
	import CompanyList from '$src/features/account/components/CompanyList.svelte';
	import CreateCompany from '../components/CreateCompany.svelte';
	import { queryStore, gql, getContextClient, mutationStore } from '@urql/svelte';

	const companies = queryStore({
		client: getContextClient(),
		query: gql`
			query ($userID: ID) {
				companies(where: { users_SINGLE: { id: $userID } }) {
					id
					name
				}
			}
		`,
		variables: { userID: $auth?.uid }
	});

	const createCompany = (name: string) => {
		return mutationStore({
			client: getContextClient(),
			query: gql`
				mutation ($companyName: String!, $userID: ID!) {
					createCompanies(
						input: { name: $companyName, users: { connect: { where: { node: { id: $userID } } } } }
					) {
						companies {
							id
							name
							users {
								id
								name
							}
						}
					}
				}
			`,
			variables: { userID: $auth?.uid, companyName: name }
		});
	};

	let addCompany = false;

	const handleSubmit = async (name: string) => {
		await createCompany(name);
		addCompany = false;
		return true;
	};
</script>

{#if !addCompany}
	<CompanyList
		companies={$companies.data?.companies || []}
		handleAddCompany={() => (addCompany = true)}
	/>
{/if}
{#if addCompany}
	<CreateCompany onCancel={() => (addCompany = false)} onSubmit={(name) => handleSubmit(name)} />
{/if}
