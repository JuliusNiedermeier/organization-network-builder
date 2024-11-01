import { gql } from "apollo-server";

export const AccountingCategoryTypeDefs = gql`
  type AccountingCategory @exclude {
    ID: ID! @id
    name: String!
    parent: AccountingCategory
      @relationship(type: "HAS_SUB_CATEGORY", direction: IN)

    children: [AccountingCategory!]!
      @relationship(type: "HAS_SUB_CATEGORY", direction: OUT)

    activities: [Activity!]!
      @relationship(type: "HAS_ACCOUNTING_CATEGORY", direction: IN)
  }
`;
