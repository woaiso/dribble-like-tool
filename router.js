/**
 * 处理路由
 */

const worker = require('./worker');
const logs = require('./log');
const user = require('./user');

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
        const { lastkey } = ctx.request.body;
        const values = await logs.getLogs(lastkey);
        ctx.body = {
            code: 0,
            data: values
        }
    });
    // 获取所有用户
    router.post('/get_users', async (ctx, next) => {
        const users = await user.getAllUsers();
        ctx.body = {
            code: 0,
            data: users
        }
    })
}