/**
 * 提供Web浏览服务
 */

const Koa = require('koa');
const serve = require('koa-static');
const app = new Koa();
const render = require('koa-ejs');
const path = require('path');
const Router = require('koa-router');
const DefaultRouter = require('./router');
const koaBody = require('koa-body');


const router = new Router();
const port = 3001;

// x-response-time

app.use(async (ctx, next) => {
    const start = Date.now();
    await next();
    const ms = Date.now() - start;
    ctx.set('X-Response-Time', `${ms}ms`);
});

// logger

app.use(async (ctx, next) => {
    const start = Date.now();
    await next();
    const ms = Date.now() - start;
    console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);
});

render(app, {
    root: path.join(__dirname, 'views'),
    layout: 'template',
    viewExt: 'html',
    cache: false,
    debug: false
});

// response

DefaultRouter(router);
app.use(koaBody());

app.use(serve('./public',{
    gzip: true
}));

app
  .use(router.routes())
  .use(router.allowedMethods());


app.listen(port);