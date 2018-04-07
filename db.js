/**
 * 用于创建数据连接
 */
const redis = require('redis');
const { promisify } = require('util');
const client = redis.createClient();
const getAsync = promisify(client.get).bind(client);



async function zadd(key, score, value) {
  return new Promise((resolve, reject) => {
    client.zadd(key, score, value, (err, reply) => {
      if (err) {
        reject(err);
      } else {
        resolve(reply);
      }
    });
  });
}


/**
 * 获取一组key
 * @param {Pattern} pattern 表达式 
 */
async function keys(pattern) {
  return new Promise((resolve, reject) => {
    client.keys(pattern, (err, reply) => {
      if (!err) {
        resolve(reply);
      } else {
        reject(err);
      }
    })
  });
}

async function del(key) {
  return new Promise((resolve, reject) => {
    client.del(key, (err, reply) => {
      if (err) {
        reject()
      } else {
        resolve(reply);
      }
    })
  })
}

/**
 * 获取一个key数据
 * @param {string} key key 
 */
async function get(key) {
  const value = await getAsync(key);
  if (value) {
    if (/^\{\"/.test(value)) {
      return JSON.parse(value);
    } else {
      return value;
    }
  } else {
    return null;
  }
}

/**
 * 设置一对键值
 * @param {string} key 键 
 * @param {string} value 值
 */
async function set(key, value) {
  if (typeof value === 'object') {
    value = JSON.stringify(value);
  }
  client.set(key, value)
}

client.on("error", function (err) {
  console.log("Error " + err);
});

module.exports = { set, get, keys, del, zadd };

async function test() {
  set('dribbble:worker_1', {
    user: { name: 'test', password: '123456' },
    urls: [
      'https://www.example.com/shot/1',
      'https://www.example.com/shot/1'
    ]
  });
  const value = await get('dribbble:worker_1');
  console.log(JSON.stringify(value, null, 2));
  client.quit();
}

// test();