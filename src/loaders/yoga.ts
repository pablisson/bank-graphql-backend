import { createYoga } from 'graphql-yoga'
import { schema } from '../graphql/schema'
import Koa from 'koa'

export const yoga = createYoga<Koa.Context>({
  schema,
  graphqlEndpoint: '/api',
})
