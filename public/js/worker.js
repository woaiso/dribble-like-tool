/**
 * 发送请求开始执行结果
 */

const app = new Vue({
    el: '#app',
    data: {
        title: '👍👍👍66刷赞小助手👍👍👍',
        maxLinkCount: 20, // 允许的最大链接数量
        maxUserCount: 20, // 允许的最大用户数量
        links: [
            { url: 'https://dribbble.com/shots/4407163-Dribbble-Sticker-Pack', loop: '12' },
        ],
        users: [
            { name: '', password: '' }
        ],
        multiplePassport: '1757914094@qq.com\tabc123\n242546279@qq.com\tabc123\n1593574860@qq.com\tabc123\n1490659434@qq.com\tabc123'
    },
    methods: {
        addLink: function () {
            if (this.links.length >= this.maxLinkCount) {
                return alert('当前最大支持' + this.maxLinkCount + '条链接');
            }
            this.links.push({ url: '', loop: 12 })
        },
        addUser: function () {
            if (this.users.length >= this.maxUserCount) {
                return alert('当前最大支持' + this.maxUserCount + '组账号密码');
            }
            this.users.push({ name: '', password: '' })
        },
        deleteLink: function (index) {
            this.links.splice(index, 1);
        },
        deleteUser: function (index) {
            this.users.splice(index, 1);
        },
        submit: function () {
            const links = this.links.filter(item => item.url.trim() !== '' && /^https?:\/\/dribbble\.com\/shots/.test(item.url.trim()));
            if (links.length <= 0) {
                return alert('请检查输入的URL格式是否正确\n例：https://dribbble.com/shots/4407163-Dribbble-Sticker-Pack');
            }
            const str = this.multiplePassport.trim();
            if (str) {
                const users = str.split('\n').map(item => {
                    const t = item.split('\t');
                    return {
                        name: t[0],
                        password: t[1]
                    }
                });
                if (users.length > 0) {
                    this.exec(users, links);
                } else {
                    alert('请输入正确格式的账号密码');
                }
            } else {
                alert('请输入正确格式的账号密码');
            }
        },
        exec: function (users, links) {
            axios.post('/exec', {
                users: users,
                links: links
            }).then(res => {
                const data = res.data;
                console.log(data);
            })
        }
    }
})