import { client } from '$src/services/apolloClient';
import { gql } from '@apollo/client/core';

export type Location = { id: string; name: string };

export const getCompanyLocations = async (companyId: string) => {
	const query = gql`
		query ($id: ID!) {
			companies(where: { id: $id }) {
				locations {
					id
					name
				}
			}
		}
	`;

	try {
		const response = await client.query({
			query,
			variables: { id: companyId },
			fetchPolicy: 'network-only'
		});
		if (response.data) {
			return response.data.companies[0].locations as Location[];
		} else {
			return null;
		}
	} catch (error) {
		console.error(error);
		return null;
	}
};
