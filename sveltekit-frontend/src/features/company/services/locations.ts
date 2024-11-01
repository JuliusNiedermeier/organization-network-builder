import { client } from '$src/services/apolloClient';
import {
	ApolloClient,
	gql,
	type ApolloQueryResult,
	type NormalizedCacheObject
} from '@apollo/client/core';
import { writable, type StartStopNotifier, type Writable } from 'svelte/store';

const GET_LOCATIONS = gql`
	query ($companyID: ID!) {
		locations(where: { company: { id: $companyID } }) {
			id
			name
		}
	}
`;

const CREATE_LOCATION = gql`
	mutation ($companyID: ID!, $locationName: String!) {
		createLocations(
			input: { name: $locationName, company: { connect: { where: { node: { id: $companyID } } } } }
		) {
			locations {
				id
				name
			}
		}
	}
`;

export interface Location extends LocationInput {
	id: string;
}

export interface LocationInput {
	name: string;
}

export interface LocationResponse {
	locations: Location[];
}

export interface LocationUpdateResponse {
	createLocations: LocationResponse;
}

let companyID;

type Initializer<Result> = (
	client: ApolloClient<NormalizedCacheObject>,
	companyID: string
) => StartStopNotifier<ApolloQueryResult<Result> | null>;

const init: Initializer<Location[]> = (client, companyID) => {
	return (set) => {
		client
			.query<LocationResponse>({ query: GET_LOCATIONS, variables: { companyID } })
			.then((value) => {
				set({ ...value, data: value.data.locations });
			});
	};
};

const getLocations = (client: ApolloClient<NormalizedCacheObject>, companyID: string) => {
	client.query({ query: GET_LOCATIONS, variables: { companyID } });
};

const addLocation = (
	client: ApolloClient<NormalizedCacheObject>,
	store: Writable<ApolloQueryResult<Location[]> | null>,
	companyID: string
) => {
	return (input: LocationInput) =>
		client.mutate<LocationUpdateResponse>({
			mutation: CREATE_LOCATION,
			variables: { companyID, locationName: input.name },

			update: (cache, { data }) => {
				const newLocation = data?.createLocations.locations[0];
				const existingLocations = cache.readQuery<LocationResponse>({
					query: GET_LOCATIONS,
					variables: { companyID }
				});

				const newLocations = [newLocation];

				if (existingLocations?.locations) {
					newLocations.push(...(existingLocations?.locations || []));
				}

				cache.writeQuery({
					query: GET_LOCATIONS,
					variables: { companyID },
					data: { locations: newLocations }
				});

				init(client, companyID);

				// store.update((value) => ({ ...value, data: newLocations }));
			}
		});
};

// const removeCompany = () => {};

export const useLocations = (client: ApolloClient<NormalizedCacheObject>, companyID: string) => {
	const genericStore = writable(null, init(client, companyID));

	return {
		subscribe: genericStore.subscribe,
		addLocation: addLocation(client, genericStore, companyID),
		refresh: (ignoreCache: boolean) => {}
		// removeCompany
	};
};
