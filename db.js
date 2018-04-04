/**
 * 用于创建数据连接
 */
const Firestore = require('@google-cloud/firestore');

const firestore = new Firestore({
  projectId: 'dribbble-6ab5d',
  keyFilename: '/path/to/keyfile.json',
});

const document = firestore.doc('posts/intro-to-firestore');
