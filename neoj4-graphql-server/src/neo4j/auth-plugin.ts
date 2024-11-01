import { Neo4jGraphQLAuthPlugin } from "@neo4j/graphql";
import { AuthenticationError } from "apollo-server";
import { Auth } from "firebase-admin/auth";

export class Neo4jGraphQLFirebaseAuthenticationPlugin
  implements Neo4jGraphQLAuthPlugin
{
  auth: Auth;

  // No idea why this must be added!
  tryToResolveKeys(req: unknown): void {}

  constructor(auth: Auth) {
    this.auth = auth;
  }

  async decode<T>(token: string | any): Promise<T | undefined> {
    if (typeof token == "string" && token.startsWith("id_")) {
      return { uid: token.split("id_")[1] } as unknown as T;
    }

    try {
      return (await this.auth.verifyIdToken(token)) as unknown as T;
    } catch (error) {
      throw new AuthenticationError("Could not verify id token");
    }
  }
}
