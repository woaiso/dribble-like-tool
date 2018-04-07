const worker = require('./worker');

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
worker.exec(shotUrls,testUsers);