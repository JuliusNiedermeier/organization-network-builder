import { client } from '$src/services/apolloClient';
import { gql } from '@apollo/client/core';

export interface Response {
	__typename: string;
	name: string;
	description: string;
	users: User[];
}

export interface User {
	name: string;
	photo: string;
	id: string;
}

export const getCompanyDetails = async (id: string) => {
	const query = gql`
		query ($id: ID!) {
			companies(where: { id: $id }) {
				name
				description
				users {
					id
					name
					photo
				}
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
			return response.data.companies[0] as Response;
		} else {
			return null;
		}
	} catch (error) {
		console.error(error);
		return null;
	}
};
