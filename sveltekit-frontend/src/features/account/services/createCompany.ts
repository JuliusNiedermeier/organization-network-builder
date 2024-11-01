import { client } from '$src/services/apolloClient';
import { gql } from '@apollo/client/core';
import type { Company } from './useCompanies';
import { GET_COMPANIES } from './useCompanies';

export type CompanyInput = Omit<Company, 'id'>;

export interface CreateCompaniesResponse {
	createCompanies: Company[];
}

export interface QueryVariables {
	userID: string;
}

export const CREATE_COMPANY = gql`
	mutation ($companyName: String!, $userID: ID!) {
		createCompanies(
			input: { name: $companyName, users: { connect: { where: { node: { id: $userID } } } } }
		) {
			companies {
				id
				name
				users {
					id
					name
				}
			}
		}
	}
`;

export const createCompany = (companyName: string, userID: string) =>
	client.mutate<CreateCompaniesResponse>({
		mutation: CREATE_COMPANY,
		variables: { companyName, userID },
		update: (cache, result) => {
			const existingCompanies = cache.readQuery({ query: GET_COMPANIES });
			console.log('Existing companies:', existingCompanies);
			console.log('New Company:', result);
		}
	});
