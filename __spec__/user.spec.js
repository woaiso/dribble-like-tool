const user = require('./../user');

async function test(){
    // await user.add({name: 'test@xx.com', password: '1234567'});
    // await user.add([{name: 'test1111@xx.com', password: '1111111'}, {name: 'test1222@xx.com', password: '2222'}]);
    // const users = await user.getAllUsers();
    // console.log(users);
    // user.autoFillUserInfo();
    // user.countTifUser();
    // user.resetUserScore();
    // user.deluser();
    const dbUsers = await user.getAllUsers();
    console.log(dbUsers.filter(item=>item.userName === '账号密码错误').map(item=> JSON.stringify(item)))

}

test();