export const typeDefs = `#graphql
  type User {
    id: ID!
    name: String!
    username: String!
    age: Int!
    nationality: Nationality!
    friends: [User]
  }
  
  type Query {
    users: [User!]!
    user(id: ID!): User! 
  }

  enum Nationality {
    CANADA
    BRAZIL
    GERMANY
    CHILE
    INDIA
  } 
`;
