import request from 'supertest'
import Koa from 'koa'
import { createYoga } from 'graphql-yoga'
import { schema } from '../../graphql/schema'

describe('Inicializando GraphQL API', () => {
  let app: Koa // = new Koa()

  beforeAll(() => {
    app = new Koa()
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
  })

  it('responde corretamente à query hello', async () => {
    const server = app.listen()

    const response = await request(server)
      .post('/graphql')
      .send({
        query: `
          query {
            hello
          }
        `,
      })
      .set('Content-Type', 'application/json')

    expect(response.status).toBe(200)
    expect(response.body).toEqual({
      data: {
        hello: 'Olá do GraphQL Tools',
      },
    })

    server.close()
  })
})
