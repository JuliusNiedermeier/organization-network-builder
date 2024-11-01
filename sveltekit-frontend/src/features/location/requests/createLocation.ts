import { client } from '$src/services/apolloClient';
import { gql } from '@apollo/client/core';

export interface Response {
	__typename: string;
	id: string;
	name: string;
}

export const createLocation = async (companyId: string, name: string) => {
	const mutation = gql`
		mutation ($name: String!, $companyId: ID!) {
			createLocations(
				input: { name: $name, company: { connect: { where: { node: { id: $companyId } } } } }
			) {
				locations {
					id
					name
				}
			}
		}
	`;

	try {
		const response = await client.mutate({
			mutation,
			variables: { name, companyId }
		});
		if (response.data) {
			return response.data.createLocations.locations[0] as Response;
		} else {
			return null;
		}
	} catch (error) {
		console.error(error);
		return null;
	}
};
