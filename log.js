/**
 * 用于访问日志
 */

const db = require('./db');
const moment = require('moment');

/**
 * 获取最近100条日志
 */
async function getLogs(lastkey) {
    let start = 0;
    let stop = 200;
    if(lastkey !== '' && lastkey !== null) {
        start = lastkey;
        stop = lastkey + 20;
    }
    const current = moment().format('YYYYMMDD');
    const key =`dribbble_tool:log:${current}`;
    const values = await db.zrange(key, start, stop);
    const logs = [];
    values.forEach((value, index) => {
        if(index%2 === 1) {
            logs[logs.length-1].score = value;
        } else {
            logs.push({message: value});
        }
    });
    return Promise.resolve(logs);
}

module.exports = { getLogs };

async function test(){
    const logs = await getLogs();
    console.log(logs);
}