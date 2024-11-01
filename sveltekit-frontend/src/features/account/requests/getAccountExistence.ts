import { client } from '$src/services/apolloClient';
import { gql } from '@apollo/client/core';

export const getAccountExistence = async (id: string) => {
	try {
		const response = await client.query({
			query: gql`
				query ($id: ID) {
					users(where: { id: $id }) {
						id
					}
				}
			`,
			variables: { id }
		});

		if (!response.data?.users.length) return false;
		return true;
	} catch (error) {
		console.error(error);
		return false;
	}
};
