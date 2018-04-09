const db = require('./db');

const user_key = 'dribbble_user';

module.exports = {
    async getAllUsers() {
        const userCount = await db.zcard(user_key);
        const users = await db.zrange(user_key, 0, userCount, false);
        return users.map(user=>JSON.parse(user));
    },
    /**
     * 添加用户
     * @param {Array<User> | User} user 要添加的用户 
     */
    async add(user) {
        if(Array.isArray(user)) {
            const userCount = await db.zcard(user_key);
            return Promise.all(user.map((item, index)=> db.zadd(user_key,userCount + 1 + index , JSON.stringify(item))));
        } else if(user instanceof Object) {
            const userCount = await db.zcard(user_key);
            return await db.zadd(user_key, userCount + 1, JSON.stringify(user));
        } else {
            return new Error('请传入正确的用户信息');
        }
    },
}
