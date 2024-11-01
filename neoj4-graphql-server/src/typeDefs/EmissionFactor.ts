import { gql } from "apollo-server";

export const EmissionFactorTypeDefs = gql`
  type EmissionFactor @exclude {
    ID: ID! @id
    name: String!
    method: EmissionFactorMethod!
    releaseDate: DateTime!
    CO2eCombined: Float!
    CO2: Float!
    CH4: Float!
    N2O: Float!
    category: EmissionCategory!
      @relationship(type: "IN_EMISSION_CATEGORY", direction: OUT)

    unitDenominator: Unit!
      @relationship(type: "HAS_UNIT_DENOMINATOR", direction: OUT)

    unitNumerator: Unit!
      @relationship(type: "HAS_UNIT_NUMERATOR", direction: OUT)

    measurements: [Measurement!]!
      @relationship(type: "USES_FACTOR", direction: IN)
  }

  enum EmissionFactorMethod {
    MARKET_BASED
    LOCATION_BASED
  }
`;
