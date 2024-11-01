import { client } from '$src/services/apolloClient';
import { gql } from '@apollo/client/core';

export const updateCompanyDetails = async (id: string, description: string) => {
	const mutation = gql`
		mutation ($id: ID!, $description: String) {
			updateCompanies(where: { id: $id }, update: { description: $description }) {
				companies {
					description
				}
			}
		}
	`;

	try {
		const response = await client.mutate({
			mutation,
			variables: { id, description }
		});
		if (response.data) {
			return response.data.updateCompanies.companies[0].description as string;
		} else {
			return null;
		}
	} catch (error) {
		console.error(error);
		return null;
	}
};
