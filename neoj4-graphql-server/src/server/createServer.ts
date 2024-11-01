import { ApolloServer } from "apollo-server";
import { Neo4jGraphQL } from "@neo4j/graphql";
import { driver } from "../neo4j";
import { typeDefs } from "../typeDefs";
import { resolvers } from "../resolvers";
import { Neo4jGraphQLFirebaseAuthenticationPlugin } from "../neo4j/auth-plugin";
import { auth } from "../auth/auth";

const authPlugin = new Neo4jGraphQLFirebaseAuthenticationPlugin(auth);

const schema = new Neo4jGraphQL({
  typeDefs,
  resolvers,
  driver,
  plugins: {
    auth: authPlugin,
  },
});

export const createServer = async () => {
  return new ApolloServer({
    schema: await schema.getSchema(),
    csrfPrevention: true,
    cache: "bounded",
    context: ({ req }) => ({ req, driver }),
  });
};
