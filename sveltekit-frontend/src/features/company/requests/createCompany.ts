import { client } from '$src/services/apolloClient';
import { gql } from '@apollo/client/core';

export const createCompany = async (userId: string, name: string) => {
	const mutation = gql`
		mutation ($name: String!, $userId: ID!) {
			createCompanies(
				input: { name: $name, users: { connect: { where: { node: { id: $userId } } } } }
			) {
				companies {
					id
				}
			}
		}
	`;

	try {
		const response = await client.mutate({
			mutation,
			variables: { name, userId }
		});
		if (response.data) {
			return response.data.createCompanies.companies[0].id as string;
		} else {
			return null;
		}
	} catch (error) {
		console.error(error);
		return null;
	}
};
