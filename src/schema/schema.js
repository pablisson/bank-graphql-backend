import { gql } from 'apollo-server-koa'

const typeDefs = gql`
  type Account {
    id: ID!
    name: String!
    balance: Float!
  }

  type Query {
    accounts: [Account!]!
    account(id: ID!): Account
  }

  type Mutation {
    createAccount(name: String!, balance: Float!): Account!
    updateAccount(id: ID!, name: String, balance: Float): Account!
    deleteAccount(id: ID!): Account!
  }

  type Subscription {
    accountCreated: Account!
    accountUpdated: Account!
    accountDeleted: Account!
  }
`;

export default typeDefs