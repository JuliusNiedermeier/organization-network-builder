import { client } from '$src/services/apolloClient';
import { gql } from '@apollo/client/core';

export interface CompanyNetworkNode {
	__typename: string;
	id: string;
	holdings: string[];
	subsidiaries: string[];
}

export const getCompanyNetwork = async (id: string) => {
	const query = gql`
		query ($id: ID!) {
			companyNetwork(id: $id) {
				id
				holdings
				subsidiaries
			}
		}
	`;

	try {
		const response = await client.query({
			query,
			variables: { id },
			fetchPolicy: 'network-only'
		});
		if (response.data) {
			return response.data.companyNetwork as CompanyNetworkNode[];
		} else {
			return null;
		}
	} catch (error) {
		console.error(error);
		return null;
	}
};
