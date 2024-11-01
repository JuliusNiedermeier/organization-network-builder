import { client } from '$src/services/apolloClient';
import { gql } from '@apollo/client/core';

export const deleteCompany = async (id: string) => {
	const mutation = gql`
		mutation ($id: ID!) {
			deleteCompanies(where: { id: $id }) {
				nodesDeleted
			}
		}
	`;

	try {
		const response = await client.mutate({
			mutation,
			variables: { id }
		});
		if (response.data.nodesDeleted > 0) {
			return true;
		} else {
			return null;
		}
	} catch (error) {
		console.error(error);
		return null;
	}
};
