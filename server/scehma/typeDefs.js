export const typeDefs = `#graphql
  type User {
    id: ID!
    name: String!
    username: String!
    age: Int!
    nationality: Nationality!
    friends: [User]
    favoriteMovies: [Movie]
  }

  type Movie {
    id: ID!
    name: String!
    yearOfPublication: Int!
    isInTheaters: Boolean!
  }
  
  type Query {
    users: [User!]!
    user(id: ID!): User!
    movies: [Movie!]!
    movie(name: String!): Movie!
  }

  input UpdateUser {
    id: ID!
    name: String
    username: String
    age: Int
    nationality: Nationality
  }

  input UserInput {
    name: String!
    username: String!
    age: Int!
    nationality: Nationality = BRAZIL
  }

  type Mutation {
    createUser(input: UserInput!): User!,
    updateUser(input: UpdateUser): User!,
    deleteUser(id: ID!): User
  }

  enum Nationality {
    CANADA
    BRAZIL
    GERMANY
    CHILE
    INDIA
  } 
`;
