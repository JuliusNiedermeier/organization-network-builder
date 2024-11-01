import { gql } from "apollo-server";

export const UserTypeDefs = gql`
  type User
    @auth(
      rules: [
        {
          operations: [CREATE, UPDATE, READ, DELETE]
          bind: { id: "$jwt.uid" }
          allow: { id: "$jwt.uid" }
        }
      ]
    ) {
    ID: ID! @id(autogenerate: false, unique: true)
    name: String!
    photo: String!
    email: String!
    companies: [Company!]! @relationship(type: "HAS_ACCESS", direction: OUT)
  }
`;
