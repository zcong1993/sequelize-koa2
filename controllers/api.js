const models = require('../models')

exports.echo = async ctx => {
  console.log(ctx.request.body)
  ctx.response.body = ctx.request.body
}

exports.index = async ctx => {
  ctx.body = 'Post something to "/echo"'
}

exports.post = async ctx => {
  const posts = await models.Post.findAll({
    include: [models.User]
  })
  ctx.body = posts
}
