import { makeExecutableSchema } from '@graphql-tools/schema'
import { mergeTypeDefs, mergeResolvers } from '@graphql-tools/merge'
import { baseTypeDefs } from './base/typeDefs'
import { baseResolver } from './base/resolver'

const typeDefs = mergeTypeDefs([baseTypeDefs])
const resolvers = mergeResolvers([baseResolver])

export const schema = makeExecutableSchema({ typeDefs, resolvers })
