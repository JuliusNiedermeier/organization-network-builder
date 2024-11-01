import { client } from '$src/services/apolloClient';
import { watchQuery } from '$src/utils/watchQuery';
import { gql } from '@apollo/client/core';

export interface Company {
	id: string;
	name: string;
}

export interface CompanyResponse {
	companies: Company[];
}

export interface QueryVariables {
	userID: string;
}

export const GET_COMPANIES = gql`
	query ($userID: ID) {
		companies(where: { users_SINGLE: { id: $userID } }) {
			id
			name
		}
	}
`;

export const useCompanies = (userID: string) =>
	watchQuery<CompanyResponse, QueryVariables>(client, {
		query: GET_COMPANIES,
		variables: { userID }
	});
