import { client } from '$src/services/apolloClient';
import { gql } from '@apollo/client/core';

export interface CompanyPreviewResponse {
	__typename: string;
	id: string;
	name: string;
	locationsAggregate: { count: number };
	usersAggregate: { count: number };
	subsidiariesConnection: { edges: { stake: number }[] };
}

export const getCompanyPreviews = async (IDs: string[]) => {
	const query = gql`
		query ($IDs: [ID!]!) {
			companies(where: { id_IN: $IDs }) {
				id
				name
				locationsAggregate {
					count
				}
				usersAggregate {
					count
				}
				subsidiariesConnection {
					edges {
						stake
					}
				}
			}
		}
	`;

	try {
		const response = await client.query({
			query,
			variables: { IDs },
			fetchPolicy: 'network-only'
		});
		if (response.data) {
			return response.data.companies as CompanyPreviewResponse[];
		} else {
			return null;
		}
	} catch (error) {
		console.error(error);
		return null;
	}
};
