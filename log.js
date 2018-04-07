/**
 * 用于访问日志
 */

const db = require('./db');

/**
 * 获取最近100条日志
 */
async function getLogs() {
    const keys = await db.keys('dribbble_tool:log:*');
    const values = await Promise.all(keys.map(key => db.get(key)));
    return Promise.resolve(values);
}

module.exports = { getLogs };