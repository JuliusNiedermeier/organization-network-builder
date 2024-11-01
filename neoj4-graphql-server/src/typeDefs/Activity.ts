import { gql } from "apollo-server";

export const ActivityTypeDefs = gql`
  type Activity @exclude {
    ID: ID! @id
    description: String
    location: Location! @relationship(type: "CONDUCTED_ACTIVITY", direction: IN)

    category: AccountingCategory!
      @relationship(type: "IN_CATEGORY", direction: OUT)

    measurements: [Measurement!]!
      @relationship(type: "WAS_MEASURED", direction: OUT)
  }
`;
