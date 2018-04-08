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
            { url: 'https://dribbble.com/shots/4423381-Jiedian-logo', loop: '6' },
        ],
        users: [
            { name: '', password: '' }
        ],
        multiplePassport: 'shideng0040838z@163.com\t123456\ntaohan8423378s@163.com\t123456\nshao7906qiandou@163.com\t123456\nshuntou0959lancon@163.com\t123456\nshuoshen4964@163.com\t123456\nshexing257985ji@163.com\t123456\ntimy6520061@163.com\t123456\nshuyong1658281s@163.com\t123456\ntong5811310bi@163.com\t123456\ntqzketm06851@163.com\t123456\ntanhe887338gagun@163.com\t123456\ntt95966708qian@163.com\t123456\ntao23034zhizhunl@163.com\t123456\nshao7799311y@163.com\t123456\nsiqiao1444431tuo9@163.com\t123456\ntb3194510lunhua@163.com\t123456\nt66497429fensh@163.com\t123456\ntuishi05286644lu5@163.com\t123456\ntkyjnqkl371@163.com\t123456\ntangmi37325caipo1@163.com\t123456\nsi69824kongyua@163.com\t123456\nsongbeng099010@163.com\t123456\ntm97535221zhuo@163.com\t123456\nshangdong6335@163.com\t123456\nshaokong8914446ke@163.com\t123456\ntangmou3405216@163.com\t123456\ntu194003douxie@163.com     \t123456\nshijiong08611yiz1@163.com\t123456\nshangxian898705@163.com\t123456\nth97078144hef@163.com\t123456\ntante9910922zhiq6@163.com\t123456\nt26802717bianao1@163.com\t123456\nshihuan97220pi@163.com\t123456\nshang132620chua@163.com\t123456\ntaodi31669haobenx@163.com\t123456\ntancao8643318@163.com \t123456\nshi0022702kao@163.com\t123456\ntao22296122bashi7@163.com\t123456\nshi5745081shixi@163.com\t123456\nt86234421yach@163.com\t123456\ntisrydy467695@163.com\t123456\nsofslbew10946@163.com\t123456\nshuobeng7118124pu@163.com\t123456\nsuhui63936297ha@163.com\t123456\nshansi8180chuicu1@163.com\t123456\nsmepr3601569@163.com\t123456\nshi51217hezadi@163.com\t123456\ntang1103798zhi@163.com\t123456\nsoujie97400tanj@163.com\t123456\ntqyctxo365779@163.com\t123456\nhuankeliao068oky@163.com\t123456\nlinlin656wck@163.com\t123456\ngoucong7045wdm@163.com\t123456\nganshiqun01124hjx@163.com\t123456\ncaihang260bln@163.com\t123456\nzhongshilai915sgi@163.com\t123456\nwopa2440cuy@163.com\t123456\njiehun86310gyg@163.com\t123456\npingduancang714uoi@163.com\t123456\nzhancheng28119ldh@163.com\t123456\nhuibai74096kuo@163.com\t123456\nzipanba88751qgm@163.com\t123456\njidui17659equ@163.com\t123456\nchengjiao304dtj@163.com\t123456\nhuijing29731skk@163.com\t123456\nshiji616okc@163.com\t123456\nmeiqiaolin49082mgy@163.com\t123456\nyouqiaopu777oyw@163.com\t123456\nqiaoken9754kog@163.com\t123456\njiashizhui314meo@163.com\t123456\njijiaci3663pqg@163.com\t123456\nbeiyuansi5398qgy@163.com\t123456\nguidimei9736yyw@163.com\t123456\nzhibi94236usy@163.com  \t123456\nyizhi093jbv@163.com\t123456\nyanhan1384ikg@163.com\t123456\nnatui67102sww@163.com\t123456\nliepaping940awm@163.com\t123456\ntouluxie71822vfl@163.com\t123456\nyezhenao88032yoy@163.com\t123456\ngangshi02402pbh@163.com\t123456\nziyan9727aqw@163.com\t123456\nbuche664xpz@163.com\t123456\nyueyuhan22065aqm@163.com\t123456\njiagouzai81931ooo@163.com\t123456\nreyongba983uci@163.com \t123456\nkzgej_578@163.com\t123456\nbuhuiyu6798vnr@163.com\t123456\nmudong269nnx@163.com \t123456\nyaranjiu34666oqo@163.com \t123456\nxianlai6860omw@163.com \t123456\nzhixian151oaw@163.com\t123456\nrenruotang719eka@163.com\t123456\ndaonei55167ygu@163.com\t123456\njiugu3792cyw@163.com\t123456\nsutu4033898zhiro@163.com\t122121qm\nteng5034038zhaoji@163.com\t122121qm\nsm7867278yanyit@163.com\t122121qm\nshi0636337xian@163.com\t122121qm\ntuihe385259mu@163.com\t122121qm\ntltg754@163.com\t122121qm\nshao46830502beig@163.com\t122121qm\nstjpxq0575082@163.com\t122121qm\nt91369830nankang@163.com\t122121qm\nshi033114pingxi@163.com\t122121qm\ntao8908325citan@163.com\t122121qm\nshifei73352552z@163.com\t122121qm\nt44479313zhao@163.com\t122121qm\nshunmeng59646@163.com\t122121qm\nshi0263413xinc@163.com\t122121qm\nsp19123081fan@163.com\t122121qm\ntan104563woj@163.com\t122121qm\ntp97045329huanche@163.com\t122121qm\nshi30682tuicha@163.com\t122121qm\nsy20227568nafen4@163.com\t122121qm\ntan3492913shik@163.com\t122121qm\nsojhzau724@163.com\t122121qm\nsr8667807kaozhao@163.com\t122121qm\ntengfang4231603t0@163.com\t122121qm\ntange79343xiw@163.com\t122121qm\nshi078360langzhan@163.com\t122121qm\nsi180949naobij@163.com\t122121qm\nsong88142517sil@163.com\t122121qm\nsiduan50728to@163.com\t122121qm\nshiqiang65136268@163.com\t122121qm\nshi30427jiaoxun@163.com\t122121qm\nshitan7852844@163.com\t122121qm\ntangxian9123782s3@163.com \t122121qm\ntui5000songxia@163.com\t122121qm\nsv39596127jiexi@163.com\t122121qm\nteng0805dongyag@163.com\t122121qm\ntang5560xuanlab@163.com\t122121qm\ntan64180419dou@163.com\t122121qm\ntu42031611shai@163.com\t122121qm\ntouxing29980@163.com\t122121qm\nsupb452738@163.com\t122121qm\ntong1393363jius@163.com\t122121qm\nshi0916467wabidu8@163.com\t122121qm\nt6054668gang@163.com\t122121qm\nsi489884jidi8651@163.com\t122121qm\nshuo4952546ye@163.com\t122121qm\ntongpu8110wei@163.com\t122121qm\nshi2475656yueqia@163.com\t122121qm\nshi63742924ch@163.com\t122121qm\nshanyong84528035@163.com\t122121qm\ntanbu44163900@163.com\t122121qm\nt51209758fangsu3@163.com\t122121qm\nswzxla155@163.com\t122121qm\nt99019556jixion@163.com\t122121qm\ntn3916888jiao@163.com\t122121qm\nshaoqiao77893@163.com\t122121qm\nsp08501473yueshao@163.com\t122121qm\ntan4098903lar@163.com\t122121qm\nsongci03507ga@163.com\t122121qm\nshaxian6204xiaji1@163.com\t122121qm\nsong6945045yongg@163.com\t122121qm\nspnr7073@163.com\t122121qm\ntmmsyo978@163.com\t122121qm\nt4970128lueshi4@163.com\t122121qm\nsoutou16814j@163.com\t122121qm\nsrog287@163.com\t122121qm\ntcrazhjz869@163.com\t122121qm\ntkadcbv5095@163.com\t122121qm\nshangou3233928s@163.com\t122121qm\nshi34855425yan@163.com\t122121qm\ntang9860jiong@163.com\t122121qm\nsizhi4201677tube4@163.com\t122121qm\ntongpa07448nuoj@163.com\t122121qm\ntangsi8173quej@163.com\t122121qm\nss97626414ji@163.com\t122121qm\nshi5312361ketaol@163.com\t122121qm\nsiqin5544675@163.com\t122121qm\nsj8160367chunye02@163.com\t122121qm\ntangkuang7376@163.com\t122121qm\nsi1615477canshi@163.com\t122121qm\nt85660174dug@163.com\t122121qm\ntao878800baduiba@163.com\t122121qm\ntongchen05064@163.com\t122121qm\ntq4855531huais@163.com\t122121qm\nshan5203879yid@163.com\t122121qm\nt57288831xuanmen@163.com\t122121qm\ntaoqiang68074037c@163.com\t122121qm\ntaecx3813096@163.com\t122121qm\ntimf0744@163.com\t122121qm\nshaokang37176qia@163.com\t122121qm\ntan155713tuishi2@163.com\t122121qm\ntanyi0231950zhui@163.com\t122121qm\ntanyan5622shalush@163.com\t122121qm\nsong844235jingtu8@163.com\t122121qm\nslym84991@163.com\t122121qm\nsoudu8403156@163.comn\t122121qm\nts46037493tangca@163.com\t122121qm\nsuhao85481haosi@163.com\t122121qm\nsongjiao5934@163.com\t122121qm\nshou9467sousi6@163.com\t122121qm\ntansi44066ga@163.com\t122121qm\nt15520189yuezhon@163.com\t122121qm\ntmrxn953@163.com\t122121qm\nshilue1110590@163.com\t122121qm\nsibi6401816lao@163.com\t122121qm\nshi81825lunyi7789@163.com\t122121qm',
        logs: []
    },
    created: function(){
        this.timer = setInterval(()=>{
            this.getLogs();
        }, 5000); //5秒执行一次
        this.getLogs();
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
                alert('开始执行任务, 请勿刷新页面');
                console.log(data);
            })
        },
        getLogs: function () {
            const lastkey = this.logs.length > 0 ? this.logs.length : '';
            axios.post('/logs', {
                lastkey: lastkey
            }).then(res => {
                const { data } = res
                if(+data.code === 0) {
                    this.logs = this.logs.concat(data.data);
                    console.log(this.logs);
                    setTimeout(()=>{
                        const logContent = document.getElementById('log-content');
                        logContent.scrollTo({top: 10000});
                    }, 100);
                } else {
                    console.log('日志获取失败');
                }
            })
        }
    }
})