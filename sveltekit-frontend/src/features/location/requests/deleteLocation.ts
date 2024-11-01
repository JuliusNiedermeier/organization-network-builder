import { client } from '$src/services/apolloClient';
import { gql } from '@apollo/client/core';

export const deleteLocation = async (id: string) => {
	const mutation = gql`
		mutation ($id: ID!) {
			deleteLocations(where: { id: $id }) {
				nodesDeleted
			}
		}
	`;

	try {
		const response = await client.mutate({
			mutation,
			variables: { id }
		});
		if (response.data) {
			return response.data.nodesDeleted as number;
		} else {
			return null;
		}
	} catch (error) {
		console.error(error);
		return null;
	}
};
