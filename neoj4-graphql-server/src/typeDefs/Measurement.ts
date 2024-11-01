import { gql } from "apollo-server";

export const MeasurementTypeDefs = gql`
  type Measurement @exclude {
    ID: ID! @id
    amount: Float!
    start: DateTime!
    end: DateTime!
    activity: Activity! @relationship(type: "WAS_MEASURED", direction: IN)

    unit: Unit! @relationship(type: "HAS_UNIT", direction: OUT)

    factors: [EmissionFactor!]!
      @relationship(type: "USES_FACTOR", direction: OUT)
  }
`;
