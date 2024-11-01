import { gql } from "apollo-server";

export const LocationTypeDefs = gql`
  type Location {
    ID: ID! @id
    name: String!
    company: Company! @relationship(type: "OPERATES_LOCATION", direction: IN)
    activities: [Activity!]!
      @relationship(type: "CONDUCTED_ACTIVITY", direction: OUT)
  }
`;
