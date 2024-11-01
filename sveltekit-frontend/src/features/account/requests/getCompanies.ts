import { client } from '$src/services/apolloClient';
import { gql } from '@apollo/client/core';

export interface Company {
	id: string;
	name: string;
}

export const getCompanies = async (id: string): Promise<Company[] | null> => {
	const query = gql`
		query ($id: ID) {
			companies(where: { users_SINGLE: { id: $id } }) {
				id
				name
			}
		}
	`;

	try {
		const response = await client.query({
			query,
			variables: { id },
			fetchPolicy: 'network-only'
		});

		if (response.data.companies?.length) {
			return response.data.companies;
		} else {
			return null;
		}
	} catch (error) {
		console.error(error);
		return null;
	}
};
