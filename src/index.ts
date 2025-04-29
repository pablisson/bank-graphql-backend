import Koa from 'koa'
import { createYoga } from 'graphql-yoga'
import { schema } from './graphql/schema'
import { connectDatabase } from './config/database'

const startProject = async () => {
  const app = new Koa()

  connectDatabase()

  const yoga = createYoga<Koa.Context>({
    schema,
    graphqlEndpoint: '/graphql',
  })
  app.use(async (ctx) => {
    if (ctx.path === '/graphql') {
      await yoga(ctx.req, ctx.res)
      ctx.respond = false
    }
  })

  app.listen(4000, () => {
    console.log('Servidor rodando em http://localhost:4000/graphql')
  })
}

startProject()
