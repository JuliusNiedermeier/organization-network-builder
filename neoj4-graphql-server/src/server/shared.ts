import { AuthContext } from "../auth/authenicateUser";
import { Driver } from "neo4j-driver";

export interface IContext {
  auth: AuthContext;
  driver: Driver;
}
