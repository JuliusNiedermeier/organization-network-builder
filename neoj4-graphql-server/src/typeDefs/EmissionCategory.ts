import { gql } from "apollo-server";

export const EmissionCategoryTypeDefs = gql`
  type EmissionCategory @exclude {
    ID: ID! @id
    name: String!
    parent: EmissionCategory
      @relationship(type: "HAS_SUB_SECTOR", direction: IN)

    children: [EmissionCategory!]!
      @relationship(type: "HAS_SUB_SECTOR", direction: OUT)
  }
`;
