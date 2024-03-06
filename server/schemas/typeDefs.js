<<<<<<< HEAD
const typeDefs = `
  type User {
=======
const { gql } = require('apollo-server-express');

const typeDefs = gql`
type Mutation {
  login(email: String!, password: String!): Auth
  addUser(username: String!, email: String!, password: String!): Auth
  saveBook(bookData: BookInput!): User
  removeBook(bookId: ID!): User
}

type User {
>>>>>>> 8a0f0e7804531df01768dc8e4d0965b30d28f23c
    _id: ID!
    username: String!
    email: String
    bookCount: Int
    savedBooks: [Book]
  }

<<<<<<< HEAD
  type Book {
=======
type Book {
>>>>>>> 8a0f0e7804531df01768dc8e4d0965b30d28f23c
    bookId: ID!
    authors: [String]
    description: String
    image: String
    link: String
    title: String!
<<<<<<< HEAD
  }

=======
  }

input BookInput {
    authors: [String]
    description: String!
    bookId: String!
    image: String
    link: String
    title: String!
  }

type Query {
    me: User
  }

>>>>>>> 8a0f0e7804531df01768dc8e4d0965b30d28f23c
  type Auth {
    token: ID!
    user: User
  }

<<<<<<< HEAD
  input BookInput {
    authors: [String]
    description: String!
    bookId: String!
    image: String
    link: String
    title: String!
  }

  type Query {
    me: User
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveBook(bookData: BookInput!): User
    removeBook(bookId: ID!): User
  }
=======

>>>>>>> 8a0f0e7804531df01768dc8e4d0965b30d28f23c
`;

module.exports = typeDefs;