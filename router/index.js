const compose = require('koa-compose')
const Router = require('koa-router')
const api = require('../controllers/api')

const router = new Router()

router.get('/', api.index)

router.post('/echo', api.echo)

router.get('/post', api.post)

module.exports = () => compose([
  router.routes(),
  router.allowedMethods()
])
