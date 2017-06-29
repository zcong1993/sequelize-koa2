const Koa = require('koa')
const onerror = require('koa-onerror')
const cors = require('kcors')
const logger = require('koa-logger')
const bodyParser = require('koa-bodyparser')
const routes = require('./router')

const app = new Koa()
app.use(cors())
onerror(app)
if (process.env.NODE_ENV !== 'test') {
  app.use(logger())
}
app.use(bodyParser())
app.use(routes())

module.exports = app
