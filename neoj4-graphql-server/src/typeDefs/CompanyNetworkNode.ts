import { gql } from "apollo-server";

export const CompanyNetworkNodeTypeDefs = gql`
  type CompanyNetworkNode @exclude {
    ID: ID!
    holdings: [String!]!
    subsidiaries: [String!]!
  }
`;
