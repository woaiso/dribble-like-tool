/**
 * 处理路由
 */

const worker = require('./worker');
const logs = require('./log');

module.exports = (router) => {
    router.get('/', async (ctx, next) => {
        await ctx.render('index');
    });

    router.post('/exec', async (ctx, next) => {
        const { users, links } = ctx.request.body;
        worker.addJob(links, users);
        ctx.body = { msg: '任务完成' };
    });

    router.post('/logs', async (ctx, next) => {
        const {lastkey} = ctx.request.body;
        const values = await logs.getLogs(lastkey);
        ctx.body = {
            code: 0,
            data: values
        }
    })
}