const Koa = require('koa');
const Router = require('@koa/router');

const api = new Koa();
const router = new Router({
  prefix: '/api/v2'
});

router.get('/', ctx => {
  ctx.status = 200;
  ctx.body = { data: 'OK' };
});

api.use(router.routes());
api.use(router.allowedMethods());

module.exports = api;
