// const axios = require('axios');
const $ = require('cheerio');
const fs = require('fs');
const cookie = require('cookie');
const _ = require('lodash');
const axios = require('axios-https-proxy-fix');  //修复了无法使用代理的问题

function writeFile(fileName, string) {
    fs.writeFile(`/tmp/${fileName}`, string, function (err) {
        if (err) {
            return console.log(err);
        }
        log(fileName + " The file was saved!");
    });
}

function fix2number(n) {
    return [0, n].join('').slice(-2);
}
function getTime(format) {
    const curdate = new Date();
    if (format == undefined) return curdate;
    format = format.replace(/Y/i, curdate.getFullYear());
    format = format.replace(/m/i, fix2number(curdate.getMonth() + 1));
    format = format.replace(/d/i, fix2number(curdate.getDate()));
    format = format.replace(/H/i, fix2number(curdate.getHours()));
    format = format.replace(/i/i, fix2number(curdate.getMinutes()));
    format = format.replace(/s/i, fix2number(curdate.getSeconds()));
    format = format.replace(/ms/i, curdate.getMilliseconds());
    return format;
}

function log(message) {
    if (typeof message === 'object') {
        message = JSON.stringify(message);
    }
    console.log(`[${getTime('Y-m-d H:i:s')}]:${message}`);
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
    return new Promise((resolve, reject) => {
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

module.exports = async function exec(shotUrls = [], users =[]) {
    const task = (allResult, user) => {
        return new Promise((resolve, reject) => {
            log(`执行任务：${JSON.stringify(user)}`);
            rate(shotUrls, user).then(res => {
                allResult.push(res);
                log(`任务完成：${JSON.stringify(user)}`);
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


const shotUrls = [
    'https://dribbble.com/shots/4407163-Dribbble-Sticker-Pack',
    'https://dribbble.com/shots/4403863-Timeline-Illustrations',
    'https://dribbble.com/shots/4407322-About-Page-for-an-iPad-3D-Sketching-Platform-Website',
    'https://dribbble.com/shots/4407877-Makeup-Academy-Homepage-Animation'
];

/**
 * 获取一个测试账号
 */
const testUsers = [
    { name: '1757914094@qq.com', password: 'abc123' },
    { name: '242546279@qq.com', password: 'abc123' },
    { name: '1593574860@qq.com', password: 'abc123' },
    { name: '1490659434@qq.com', password: 'abc123' }
];

// exec(shotUrls,testUsers);