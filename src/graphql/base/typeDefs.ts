import gql from 'graphql-tag'

export const baseTypeDefs = gql`
  type Query {
    hello: String!
  }
`
