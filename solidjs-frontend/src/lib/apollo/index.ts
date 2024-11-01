import {
  ApolloClient,
  InMemoryCache,
  HttpLink,
  ApolloLink,
} from "@apollo/client/core";
import { setContext } from "@apollo/client/link/context";
import { auth } from "$src/lib/firebase";

const authLink = setContext(async (operation, { headers }) => {
  const token = await auth.currentUser?.getIdToken();
  return { headers: { ...headers, authorization: token } };
});

const httpLink = new HttpLink({ uri: "http://localhost:4000" });

export const client = new ApolloClient({
  link: ApolloLink.from([authLink, httpLink]),
  cache: new InMemoryCache(),
  name: "Greenhouse Client",
  version: "0.0.1",
});
