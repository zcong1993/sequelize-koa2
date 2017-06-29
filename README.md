# sequelize

[![CircleCI](https://img.shields.io/circleci/project/github/zcong1993/sequelize-koa2.svg?style=flat-square)](https://circleci.com/gh/zcong1993/sequelize-koa2)
[![Build Status](https://travis-ci.org/zcong1993/sequelize-koa2.svg?branch=master)](https://travis-ci.org/zcong1993/sequelize-koa2)

> koa2 sequelize demo with associate migration, faker data seeders and mocha test in circleci

## Try

```bash
# checkout demo
$ git clone https://github.com/zcong1993/sequelize-koa2.git
# install deps
$ yarn #or npm install
# global install sequelize-cli
$ npm install -g sequelize-cli
# config env
$ cp .env.example .env # add your config into this file
``` 
*Note:* All the follwing tasks should work with `envs`, use [enr](https://github.com/gost-c/enr) can make this easy.

### migration

```bash
$ enr sequelize db:migrate
# undo
$ enr sequelize db:migrate:undo:all
```

### seed

```bash
$ enr sequelize db:seed:all
# undo
$ enr sequelize db:seed:undo:all
```
*Note:* `reseed` would cause error, cause remove doc from table then add doc ,it's id will not start from 1, but mock post's `UserId` is a randomInt in [1...20]. So no user can match it's `UserId`. You can fix it this way:

```bash
# remigrate first
$ enr sequelize db:migrate:undo:all
$ enr sequelize db:migrate
# reseed
$ enr sequelize db:seed:all
```

### test

```bash
$ enr npm run test
```

## License

MIT &copy; zcong1993
