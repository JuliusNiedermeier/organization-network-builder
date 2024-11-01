import type {
	ApolloClient,
	ApolloQueryResult,
	NormalizedCacheObject,
	QueryOptions
} from '@apollo/client';
import { readable } from 'svelte/store';

export const watchQuery = <TData, TVariables>(
	client: ApolloClient<NormalizedCacheObject>,
	options: QueryOptions<TVariables>
) => {
	return readable<ApolloQueryResult<TData> | null>(null, (set) => {
		client.watchQuery<TData, TVariables>(options).subscribe(set);
	});
};
