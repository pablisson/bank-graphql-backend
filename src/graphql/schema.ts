import { makeExecutableSchema } from '@graphql-tools/schema'
import { GraphQLSchema, GraphQLObjectType, GraphQLString } from 'graphql'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const QueryType = new GraphQLObjectType({
  name: 'Query',
  fields: {
    healthCheck: {
      type: GraphQLString,
      resolve: () => 'OK',
    },
  },
})
export const schema: GraphQLSchema = makeExecutableSchema({
  typeDefs: [],
  resolvers: [],
  resolverValidationOptions: {
    requireResolversForResolveType: 'ignore',
  },
}) as GraphQLSchema

// const typeDefs = `
//   type Query {
//     hello: String!
//   }
// `

// const resolvers = {
//   Query: {
//     hello: () => 'Olá do GraphQL Tools',
//   },
// }

// export const schema = makeExecutableSchema({ typeDefs, resolvers })
