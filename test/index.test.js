const supertest = require('supertest')
const assert = require('power-assert')

const app = require('../app')
const models = require('../models')
const request = supertest(app.listen())

before(function() {
  return models.sequelize.sync()
})

describe('Http test', () => {
  it('/ should work well', async () => {
    const res = await request
      .get('/')
      .expect(200)

    assert(res, '/ should have response')
  })

 it('/post should work well', async () => {
  const res = await request
    .get('/post')
    .expect(200)

  const posts = res.body
  assert(posts.length > 0, 'should have posts')
  posts.forEach(post => {
    assert(post.UserId === post.User.id, `post ${post.id}'s User's id should equal to its UserId`)
  })
 })
})
