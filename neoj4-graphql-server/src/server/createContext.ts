import { ExpressContext } from "apollo-server-express";
import { Driver } from "neo4j-driver";
import { authenticateUser } from "../auth/authenicateUser";
import { IContext } from "./shared";

export const createContext =
  (driver: Driver) =>
  async ({ req }: ExpressContext): Promise<IContext> => {
    const auth = await authenticateUser(req.headers.authorization || "");
    return { auth, driver };
  };
