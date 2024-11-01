import { gql } from "apollo-server";

export const CompanyTypeDefs = gql`
  type Company {
    ID: ID! @id
    name: String!
    description: String
    holdings: [Company!]!
      @relationship(
        type: "OWNS_COMPANY"
        properties: "OwnsCompany"
        direction: IN
      )

    subsidiaries: [Company!]!
      @relationship(
        type: "OWNS_COMPANY"
        properties: "OwnsCompany"
        direction: OUT
      )

    locations: [Location!]!
      @relationship(type: "OPERATES_LOCATION", direction: OUT)

    users: [User!]! @relationship(type: "HAS_ACCESS", direction: IN)
  }

  interface OwnsCompany @relationshipProperties {
    stake: Float!
  }
`;
