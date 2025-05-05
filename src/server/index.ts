import Koa from 'koa'
import { yoga } from '../loaders/yoga'
import { loadDatabase } from '../loaders/database'

const startServer = async () => {
  await loadDatabase()

  const app = new Koa()

  app.use(async (ctx) => {
    if (ctx.path === '/api') {
      await yoga(ctx.req, ctx.res)
      ctx.respond = false
    }
  })

  const PORT = process.env.PORT || 4000
  const APP_URL = process.env.PORT_UL || `http://localhost:${PORT}/api`
  app.listen(PORT, () => {
    console.log(`🚀 Servidor rodando em ${APP_URL}`)
  })
}

startServer()
