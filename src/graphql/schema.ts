import { makeExecutableSchema } from '@graphql-tools/schema'

const typeDefs = `
  type Query {
    hello: String!
  }
`

const resolvers = {
  Query: {
    hello: () => 'Olá do GraphQL Tools',
  },
}

export const schema = makeExecutableSchema({ typeDefs, resolvers })
