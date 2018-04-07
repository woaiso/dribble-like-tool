// const axios = require('axios');
const $ = require('cheerio');
const fs = require('fs');
const cookie = require('cookie');
const _ = require('lodash');
const axios = require('axios-https-proxy-fix');  //修复了无法使用代理的问题
const db = require('./db');
const moment = require('moment');


// 全局唯一定时器
let timer = null;
// 定时器执行时间间隔
const delay = 10 * 60 * 1000; // 10分钟执行一次

const nexJobRange = 1 * 60 * 60 * 1000 // 获取接下来多少时间内的任务，暂定获取接下来一分钟内的任务

const sleepTime = 1000; // 执行完一次请求的休眠时间


/**
 * 写文件
 * @param {string} fileName 文本文件名称
 * @param {string} string 文本内容 
 */
function writeFile(fileName, string) {
    fs.writeFile(`/tmp/${fileName}`, string, function (err) {
        if (err) {
            return console.log(err);
        }
        log(fileName + " The file was saved!");
    });
}

function getTime(format) {
    if (format) {
        return moment().format(format);
    } else {
        return moment().format('YYYY-MM-DD HH:mm:ss');
    }
}

function log(message) {
    if (typeof message === 'object') {
        message = JSON.stringify(message);
    }
    const key = `dribbble_tool:log:${getTime('YmdHisms')}:${Math.ceil(Math.random() * 1000)}`;
    const value = `[${getTime('YYYY-MM-DD HH:mm:ss')}] ${message}`;
    db.zadd(`dribbble_tool:log:${getTime('YYYYMMDD')}`,getTime('mmssSSS') + ''+ Math.ceil(Math.random() * 1000 + 1000) ,value)
    console.log(value);
}
/**
 * 获取一个代理服务器
 * @returns {host:string, port: number} | null
 */
async function getProxy() {
    return null;
}

let cookies = {
    _dribbble_session: null,
    user_session_token: null
};

/**
 * 发送一个网络请求
 * @param {object} options 网络请求的配置
 */
async function request(options) {
    return new Promise(async (resolve, reject) => {
        await sleep(sleepTime);
        const defaultOptions = {
            method: 'GET',
            maxRedirects: 0,
            validateStatus: function (status) {
                return (status >= 200 && status < 300) || status === 302; // default
            },
            headers: {
                referer: options.url,
                'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/65.0.3325.162 Safari/537.36',
            },
            // proxy: {
            //     host: '127.0.0.1',
            //     port: '1087'
            // }
        }
        const requestOptions = _.merge(defaultOptions, options);
        if (cookies._dribbble_session) {
            if (cookies.user_session_token) {
                requestOptions.headers['cookie'] = `_dribbble_session=${cookies._dribbble_session}; user_session_token=${cookies.user_session_token}`;
            } else {
                requestOptions.headers['cookie'] = `_dribbble_session=${cookies._dribbble_session}`;
            }
        }
        axios.request(requestOptions).then(res => {
            // 将cookie 保存下来便于下次使用
            if (res.headers) {
                const resCookies = res.headers['set-cookie'];
                if (resCookies.length > 0) {
                    // 和当前本地的cookie 做合并操作
                    resCookies.forEach(item => {
                        const ck = cookie.parse(item);
                        // 判断是否已经存在对应key
                        if (ck._dribbble_session) {
                            cookies._dribbble_session = ck._dribbble_session;
                        } else if (ck.user_session_token) {
                            cookies.user_session_token = ck.user_session_token;
                        }
                    })
                }
            }
            if (res.status === 302) {
                request({ url: res.headers.location }).then(resolve, reject);
            } else {
                resolve(res)
            }
        }, err => reject(err))
    });
}



/**
 * 获取一个临时登录token
 * Dribbble 登录需要一个token
 */
async function getAuthToken() {
    const url = 'https://dribbble.com/session/new';
    return new Promise((resolve, reject) => {
        request({ url }).then(res => {
            const html = res.data;
            const token = $(html).find('[name="authenticity_token"]').val();
            if (token) {
                resolve(token)
            } else {
                reject('未获取到 authenticity_token');
            }
        });
    });
}


/**
 * 登录
 * @param {User} user 登录用户信息
 * {name: string, password: string, token: string} 
 */
async function login(user) {
    const url = 'https://dribbble.com/session';
    return new Promise((resolve, reject) => {
        request({
            url,
            method: 'POST',
            data: {
                utf8: '✓',
                authenticity_token: user.token,
                login: user.name,
                password: user.password
            }
        }).then(res => {
            const html = res.data;
            const profileName = $(html).find('.profile-name').text();
            resolve({ profileName });
        }, reject)
    });
}

/**
 * 获取防跨站脚本攻击token
 * @param {string} shotUrl 获取防跨站脚本攻击功能
 */
async function getcsrfToken(shotUrl) {
    return new Promise((resolve, reject) => {
        request({
            url: shotUrl
        }).then(res => {
            const html = res.data;
            // writeFile(`csrf-token-${new Date().getTime()}.html`, html);
            const csrfToken = $.load(html)('meta[name=csrf-token]').attr('content');
            if (csrfToken) { resolve(csrfToken) } else {
                reject('未获取到csrfToken');
            }
        }, reject);
    })
}

/**
 * 点赞
 * @param {string} profileName 当前登录用户的ID
 * @param {string} screenshotId 作品ID
 * @param {string} referer 当前作品的URL
 */
async function like(profileName, screenshotId, referer, csrfToken) {
    const url = `https://dribbble.com/${profileName}/likes?screenshot_id=${screenshotId}`;
    return new Promise((resolve, reject) => {
        request({
            url,
            method: 'POST',
            headers: {
                'accept': '*/*',
                'accept-encoding': 'gzip, deflate, br',
                'accept-language': 'zh-CN,zh;q=0.9,en;q=0.8,zh-TW;q=0.7',
                'cache-control': 'no-cache',
                'content-length': 0,
                'referer': referer,
                'x-requested-with': 'XMLHttpRequest',
                'origin': 'https://dribbble.com',
                'x-csrf-token': csrfToken
            }
        }).then(res => {
            const html = res.data;
            // writeFile(`like-${new Date().getTime()}.html`, html);
            const num = $(html).find('.stats-num').children().remove().end().text().trim();
            resolve(num);
        }, reject);
    });
}

function getShotId(url) {
    return /dribbble\.com\/shots\/([\s\S]+)\??/.exec(url)[1];
}

/**
 * 登录并获取用户信息
 * @param {User} passport 登录通行证 {name:string, password:string} 
 */
async function getUserInfo(passport) {
    return new Promise(async (resolve, reject) => {
        const token = await getAuthToken();
        log('token：' + token);
        passport = { ...passport, token };
        log('passport：' + JSON.stringify(passport));
        const userInfo = await login(passport);
        log('profileName：' + userInfo.profileName);
        if (userInfo) {
            resolve(userInfo);
        } else {
            reject(new Error('未获取到正确的用户信息'));
        }
    });
}

/**
 * 点赞
 * @param {string} shotUrls 作品链接
 * @param {User} user 登录的用户信息 
 */
async function rate(shotUrls = [], user) {
    if (shotUrls && user) {
        const userInfo = await getUserInfo(user);
        return Promise.all(shotUrls.map(async url => {
            const csrfToken = await getcsrfToken(url);
            log('x-csrf-token：' + csrfToken);
            const likeNum = await like(userInfo.profileName, getShotId(url), url, csrfToken);
            log('点赞后❤️：' + likeNum);
        }))
    } else {
        return Promise.reject('请传入正确的URL和用户');
    }
}

/**
 * 添加定时任务
 * @param {Array<Link>} links 链接组信息 
 * @param {Array<User>} users 用户组信息
 */
async function addJob(links = [], users = []) {
    // 计算出每个任务的执行时间，按照URL来进行拆分
    // 存储所有的任务
    const jobs = [];
    // 用户总数量
    const userCount = users.length;
    // 链接数量
    const linkCount = links.length;
    links.forEach(link => {
        const { loop, url } = link;
        const jobLoopMilSeconds = loop * 60 * 60 * 1000;
        // 执行第一个任务的时间
        const startTime = new Date().getTime() + 10000;
        // 得到每个用户应该间隔的时间
        const step = Math.ceil(jobLoopMilSeconds / userCount)
        users.forEach((user, index) => {
            const job = { user, url, time: startTime + index * step };
            // 添加任务
            const key = `dribbble_tool:job:${moment().add(index * step, 'ms').format('YYYYMMDDHHmmssSSS')}:${index}`;
            db.set(key, job);
            jobs.push(job);
        });
    });
    log(`添加用户数量：${userCount}`);
    log(`添加URL数量：${linkCount}`)
    log('任务添加完毕：第一个任务将在10秒后启动');
}

async function exec(shotUrls = [], users = []) {
    const task = (allResult, user) => {
        return new Promise((resolve, reject) => {
            log(`执行任务：${user.name}`);
            rate(shotUrls, user).then(res => {
                allResult.push(res);
                log(`任务完成：${user.name} - ${shotUrls}`);
                // 任务执行完成
                resolve(allResult);
            });
        });
    };
    const promise = users.reduce((promise, user) => {
        return promise.then((allResult = []) => task(allResult, user));
    }, Promise.resolve());
    return promise;
}

async function runTask() {
    const next = moment().add(nexJobRange, 'ms').format('YYYYMMDDHHmmssSSS');
    const current = moment().format('YYYYMMDDHHmmssSSS');
    const currentDateArray = current.split('');
    let sign = false;
    const dateRegex = next.split('').map((nextNumber, index) => {
        const currentNumber = currentDateArray[index];
        if (sign) {
            return '[0-9]';
        } else if (currentNumber === nextNumber) {
            return currentNumber.toString();
        } else if (nextNumber > currentNumber) {
            sign = true;
            return `[${[currentDateArray[index], nextNumber].sort((a, b) => a > b).join('-')}]`
        }
    });
    const regexStr = dateRegex.join('');
    const dbkeys = `dribbble_tool:job:${regexStr}*`;
    // 1. 从redis 获取出任务
    const keys = await db.keys(dbkeys);
    const values = await Promise.all(keys.map(async key => db.get(key)));
    // 开始执行任务
    const jobs = keys.map((key, index) => {
        const value = values[index];
        return {
            key,
            ...value
        }
    });
    if(keys.length > 0) {
        execJobs(jobs);
    } else {
        log(`接下来${Math.ceil(nexJobRange/1000)}秒没有任务可以执行,系统将在${Math.ceil(delay/1000)}秒后再次检测`);
    }
}

async function getOverJobCount(){
    const keys = await db.keys('dribbble_tool:job:*');
    return Promise.resolve(keys.length);
}

async function execJobs(jobs = []) {
    const task = async (allResult, job) => {
        return new Promise(async (resolve, reject) => {
            const user = job.user;
            const shotUrl = job.url;
            const result = await exec([shotUrl], [user]);
            console.log('任务完成...' + job.key);
            // 删除key
            db.del(job.key);
            if (result) {
                allResult.push(result);
                resolve(allResult);
            }
        });
    };
    const promise = jobs.reduce((promise, job) => {
        return promise.then((allResult = []) => task(allResult, job));
    }, Promise.resolve());
    return promise;
}

/**
 * 休眠
 * @param {number} time 休眠时间
 */
async function sleep(time = 0) {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(), time);
    })
}



/**
 * 执行任务
 */
async function run() {
    const overJobCount = await getOverJobCount();
    log('系统启动...');
    log(`当前剩余任务数量 ${overJobCount}`);
    timer = setInterval(function () {
        runTask();
    }, delay);
}

run();
runTask();

module.exports = { addJob, exec };