/**
 * 处理路由
 */

 const exec = require('./worker');

module.exports = (router) => {
    router.get('/', async (ctx, next) => {
        await ctx.render('index');
    });

    router.post('/exec', async (ctx, next) => {
        const {users, links} = ctx.request.body;
        exec(links.map(item=> item.url), users);
        ctx.body = {msg: '任务完成'};
    })
}