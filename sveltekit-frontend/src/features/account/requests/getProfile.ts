import { client } from '$src/services/apolloClient';
import { gql } from '@apollo/client/core';

export interface Profile {
	name: string;
	photo: string;
	email: string;
}

const GET_PROFILE = gql`
	query ($id: ID) {
		users(where: { id: $id }) {
			name
			photo
			email
		}
	}
`;

export const getProfile = async (id: string): Promise<Profile | null> => {
	const response = await client.query({
		query: GET_PROFILE,
		variables: { id },
		fetchPolicy: 'network-only'
	});

	if (response.data.users?.length) {
		return response.data.users[0];
	} else {
		return null;
	}
};
