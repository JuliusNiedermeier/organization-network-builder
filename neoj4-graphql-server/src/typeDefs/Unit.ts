import { gql } from "apollo-server";

export const UnitTypeDefs = gql`
  type Unit @exclude {
    ID: ID! @id
    name: String!
    alternativeUnits: [Unit!]!
      @relationship(type: "CONVERTABLE_TO", direction: OUT)
  }
`;
