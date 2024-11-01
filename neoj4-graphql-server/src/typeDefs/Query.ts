import { gql } from "apollo-server";

export const QueryTypeDefs = gql`
  type Query {
    companyNetwork(ID: ID!): [CompanyNetworkNode!]!
  }
`;
