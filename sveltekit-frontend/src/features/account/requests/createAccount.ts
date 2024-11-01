import { client } from '$src/services/apolloClient';
import { gql } from '@apollo/client/core';
import type { Profile } from '../requests/getProfile';

export const createAccount = async (id: string, profile: Profile) => {
	try {
		const response = await client.mutate({
			mutation: gql`
				mutation ($id: ID!, $name: String!, $photo: String!, $email: String!) {
					createUsers(input: { id: $id, name: $name, photo: $photo, email: $email }) {
						users {
							id
						}
					}
				}
			`,
			variables: {
				id,
				name: profile.name,
				photo: profile.photo,
				email: profile.email
			}
		});

		if (response.data) return true;
		return false;
	} catch (error: any) {
		console.error(error);
		return false;
	}
};
