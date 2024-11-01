import { client } from '$src/services/apolloClient';
import { gql } from '@apollo/client/core';
import type { Profile } from './getProfile';

export const updateProfile = async (id: string, update: Profile): Promise<boolean> => {
	const mutation = gql`
		mutation ($id: ID, $name: String, $photo: String) {
			updateUsers(where: { id: $id }, update: { name: $name, photo: $photo }) {
				users {
					name
				}
			}
		}
	`;

	const response = await client.mutate({
		mutation,
		variables: { ...update, id }
	});

	if (response.data.users?.length) {
		return true;
	} else {
		return false;
	}
};
