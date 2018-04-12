const user = require('./../user');
const worker = require('../worker');

const allUsers = [
    {
      "name": "shideng0040838z@163.com",
      "password": "123456",
      "userName": "Elizabeth00",
      "nickName": "史齐燕",
      "score": "1"
    },
    {
      "name": "taohan8423378s@163.com",
      "password": "123456",
      "userName": "taohan84",
      "nickName": "taohan84",
      "score": "2"
    },
    {
      "name": "shao7906qiandou@163.com",
      "password": "123456",
      "userName": "qiandou7",
      "nickName": "qiandou",
      "score": "3"
    },
    {
      "name": "shuntou0959lancon@163.com",
      "password": "123456",
      "userName": "Helen0",
      "nickName": "shuntou",
      "score": "4"
    },
    {
      "name": "shuoshen4964@163.com",
      "password": "123456",
      "userName": "shuoshen4",
      "nickName": "shuoshen",
      "score": "5"
    },
    {
      "name": "shexing257985ji@163.com",
      "password": "123456",
      "userName": "shexing2579",
      "nickName": "shexing",
      "score": "6"
    },
    {
      "name": "timy6520061@163.com",
      "password": "123456",
      "userName": "timy652",
      "nickName": "Fred",
      "score": "7"
    },
    {
      "name": "shuyong1658281s@163.com",
      "password": "123456",
      "userName": "Gary1212",
      "nickName": "舒咏",
      "score": "8"
    },
    {
      "name": "tong5811310bi@163.com",
      "password": "123456",
      "userName": "William16",
      "nickName": "吴磊",
      "score": "9"
    },
    {
      "name": "tqzketm06851@163.com",
      "password": "123456",
      "userName": "zhangqiong36",
      "nickName": "zhangqiong",
      "score": "10"
    },
    {
      "name": "tanhe887338gagun@163.com",
      "password": "123456",
      "userName": "tanhe887",
      "nickName": "tanhe",
      "score": "11"
    },
    {
      "name": "tt95966708qian@163.com",
      "password": "123456",
      "userName": "Michael45",
      "nickName": "Michaeltang",
      "score": "12"
    },
    {
      "name": "tao23034zhizhunl@163.com",
      "password": "123456",
      "userName": "zhizhunl",
      "nickName": "zhizhunl",
      "score": "13"
    },
    {
      "name": "shao7799311y@163.com",
      "password": "123456",
      "userName": "Karl51",
      "nickName": "Karl",
      "score": "14"
    },
    {
      "name": "siqiao1444431tuo9@163.com",
      "password": "123456",
      "userName": "chen09",
      "nickName": "zhouchen",
      "score": "15"
    },
    {
      "name": "tb3194510lunhua@163.com",
      "password": "123456",
      "userName": "lunhua31",
      "nickName": "lunhua",
      "score": "16"
    },
    {
      "name": "t66497429fensh@163.com",
      "password": "123456",
      "userName": "fensh66",
      "nickName": "fensh",
      "score": "17"
    },
    {
      "name": "tuishi05286644lu5@163.com",
      "password": "123456",
      "userName": "tuishi05",
      "nickName": "kexiaoli",
      "score": "18"
    },
    {
      "name": "tkyjnqkl371@163.com",
      "password": "123456",
      "userName": "Bob371",
      "nickName": "guixinfeng",
      "score": "19"
    },
    {
      "name": "tangmi37325caipo1@163.com",
      "password": "123456",
      "userName": "tangmi3",
      "nickName": "shenshanshan",
      "score": "20"
    },
    {
      "name": "si69824kongyua@163.com",
      "password": "123456",
      "userName": "kongyua69",
      "nickName": "kongyua",
      "score": "21"
    },
    {
      "name": "songbeng099010@163.com",
      "password": "123456",
      "userName": "songbeng0",
      "nickName": "songbeng0",
      "score": "22"
    },
    {
      "name": "tm97535221zhuo@163.com",
      "password": "123456",
      "userName": "21zhuo",
      "nickName": "wanshuqi",
      "score": "23"
    },
    {
      "name": "shangdong6335@163.com",
      "password": "123456",
      "userName": "aishishi14",
      "nickName": "aishishi",
      "score": "24"
    },
    {
      "name": "shaokong8914446ke@163.com",
      "password": "123456",
      "userName": "shaokong891",
      "nickName": "shaokong",
      "score": "25"
    },
    {
      "name": "tangmou3405216@163.com",
      "password": "123456",
      "userName": "tangmou34",
      "nickName": "tangmou",
      "score": "26"
    },
    {
      "name": "tu194003douxie@163.com     ",
      "password": "123456",
      "userName": "03douxie",
      "nickName": "luocui",
      "score": "27"
    },
    {
      "name": "shijiong08611yiz1@163.com",
      "password": "123456",
      "userName": "shijiong0",
      "nickName": "shijiong0",
      "score": "28"
    },
    {
      "name": "shangxian898705@163.com",
      "password": "123456",
      "userName": "heqi8987",
      "nickName": "heqi",
      "score": "29"
    },
    {
      "name": "th97078144hef@163.com",
      "password": "123456",
      "userName": "guowei970",
      "nickName": "郭伟",
      "score": "30"
    },
    {
      "name": "tante9910922zhiq6@163.com",
      "password": "123456",
      "userName": "tante99",
      "nickName": "tante99",
      "score": "31"
    },
    {
      "name": "t26802717bianao1@163.com",
      "password": "123456",
      "userName": "jiahui1616",
      "nickName": "户佳慧",
      "score": "32"
    },
    {
      "name": "shihuan97220pi@163.com",
      "password": "123456",
      "userName": "shihuan972",
      "nickName": "shihuan",
      "score": "33"
    },
    {
      "name": "shang132620chua@163.com",
      "password": "123456",
      "userName": "tingting32620",
      "nickName": "陈婷婷",
      "score": "34"
    },
    {
      "name": "taodi31669haobenx@163.com",
      "password": "123456",
      "userName": "taodi316",
      "nickName": "taodi",
      "score": "35"
    },
    {
      "name": "tancao8643318@163.com ",
      "password": "123456",
      "userName": "tancao8",
      "nickName": "邓宇婷",
      "score": "36"
    },
    {
      "name": "shi0022702kao@163.com",
      "password": "123456",
      "userName": "Rudykao00",
      "nickName": "Rudy",
      "score": "37"
    },
    {
      "name": "tao22296122bashi7@163.com",
      "password": "123456",
      "userName": "bashi7",
      "nickName": "胡洁",
      "score": "38"
    },
    {
      "name": "shi5745081shixi@163.com",
      "password": "123456",
      "userName": "shixi81",
      "nickName": "Amanda",
      "score": "39"
    },
    {
      "name": "t86234421yach@163.com",
      "password": "123456",
      "userName": "longyiyach21",
      "nickName": "龙毅",
      "score": "40"
    },
    {
      "name": "tisrydy467695@163.com",
      "password": "123456",
      "userName": "tisrydy4",
      "nickName": "何向宇",
      "score": "41"
    },
    {
      "name": "sofslbew10946@163.com",
      "password": "123456",
      "userName": "Shirley10946",
      "nickName": "黄慧芬",
      "score": "42"
    },
    {
      "name": "shuobeng7118124pu@163.com",
      "password": "123456",
      "userName": "Jack711",
      "nickName": "shuobeng",
      "score": "43"
    },
    {
      "name": "suhui63936297ha@163.com",
      "password": "123456",
      "userName": "suhui63",
      "nickName": "Brooke",
      "score": "44"
    },
    {
      "name": "shansi8180chuicu1@163.com",
      "password": "123456",
      "userName": "Tracy81",
      "nickName": "陈佳敏",
      "score": "45"
    },
    {
      "name": "smepr3601569@163.com",
      "password": "123456",
      "userName": "smepr360",
      "nickName": "邓瑜婧",
      "score": "46"
    },
    {
      "name": "shi51217hezadi@163.com",
      "password": "123456",
      "userName": "luoyang512",
      "nickName": "罗洋",
      "score": "47"
    },
    {
      "name": "tang1103798zhi@163.com",
      "password": "123456",
      "userName": "tang1103",
      "nickName": "肖虹",
      "score": "48"
    },
    {
      "name": "soujie97400tanj@163.com",
      "password": "123456",
      "userName": "Paul97400",
      "nickName": "Paul",
      "score": "49"
    },
    {
      "name": "tqyctxo365779@163.com",
      "password": "123456",
      "userName": "yuyao365",
      "nickName": "刘玉瑶",
      "score": "50"
    },
    {
      "name": "huankeliao068oky@163.com",
      "password": "123456",
      "userName": "huankeliao0",
      "nickName": "huankeliao",
      "score": "51"
    },
    {
      "name": "linlin656wck@163.com",
      "password": "123456",
      "userName": "linlin6",
      "nickName": "linlin",
      "score": "52"
    },
    {
      "name": "goucong7045wdm@163.com",
      "password": "123456",
      "userName": "7045wdm",
      "nickName": "张夢南",
      "score": "53"
    },
    {
      "name": "ganshiqun01124hjx@163.com",
      "password": "123456",
      "userName": "ganshiqun0",
      "nickName": "ganshiqun",
      "score": "54"
    },
    {
      "name": "caihang260bln@163.com",
      "password": "123456",
      "userName": "caihang260",
      "nickName": "张雪芹",
      "score": "55"
    },
    {
      "name": "zhongshilai915sgi@163.com",
      "password": "123456",
      "userName": "zhongshilai915",
      "nickName": "Jessica",
      "score": "56"
    },
    {
      "name": "wopa2440cuy@163.com",
      "password": "123456",
      "userName": "zhushiqi24",
      "nickName": "Scott",
      "score": "57"
    },
    {
      "name": "jiehun86310gyg@163.com",
      "password": "123456",
      "userName": "huk3",
      "nickName": "Andy",
      "score": "58"
    },
    {
      "name": "pingduancang714uoi@163.com",
      "password": "123456",
      "userName": "pingduancang7",
      "nickName": "Stephen",
      "score": "59"
    },
    {
      "name": "zhancheng28119ldh@163.com",
      "password": "123456",
      "userName": "zhancheng2",
      "nickName": "Lewis",
      "score": "60"
    },
    {
      "name": "huibai74096kuo@163.com",
      "password": "123456",
      "userName": "huibai740",
      "nickName": "Kale",
      "score": "61"
    },
    {
      "name": "zipanba88751qgm@163.com",
      "password": "123456",
      "userName": "zipanba88",
      "nickName": "Walker",
      "score": "62"
    },
    {
      "name": "jidui17659equ@163.com",
      "password": "123456",
      "userName": "jidui176",
      "nickName": "Triston",
      "score": "63"
    },
    {
      "name": "chengjiao304dtj@163.com",
      "password": "123456",
      "userName": "chengjiao30",
      "nickName": "Roy",
      "score": "64"
    },
    {
      "name": "huijing29731skk@163.com",
      "password": "123456",
      "userName": "huijing29",
      "nickName": "陈莹",
      "score": "65"
    },
    {
      "name": "shiji616okc@163.com",
      "password": "123456",
      "userName": "shiji616",
      "nickName": "罗洁",
      "score": "66"
    },
    {
      "name": "meiqiaolin49082mgy@163.com",
      "password": "123456",
      "userName": "meiqiaolin4908",
      "nickName": "Malcolm",
      "score": "67"
    },
    {
      "name": "youqiaopu777oyw@163.com",
      "password": "123456",
      "userName": "youqiaopu777",
      "nickName": "谭娜",
      "score": "68"
    },
    {
      "name": "qiaoken9754kog@163.com",
      "password": "123456",
      "userName": "qiaoken975",
      "nickName": "Emmett",
      "score": "69"
    },
    {
      "name": "jiashizhui314meo@163.com",
      "password": "123456",
      "userName": "jiashizhui314",
      "nickName": "张知玲",
      "score": "70"
    },
    {
      "name": "jijiaci3663pqg@163.com",
      "password": "123456",
      "userName": "jijiaci3663",
      "nickName": "Abram",
      "score": "71"
    },
    {
      "name": "beiyuansi5398qgy@163.com",
      "password": "123456",
      "userName": "beiyuansi5398",
      "nickName": "曹彤辉",
      "score": "72"
    },
    {
      "name": "guidimei9736yyw@163.com",
      "password": "123456",
      "userName": "guidimei9736",
      "nickName": "Julien",
      "score": "73"
    },
    {
      "name": "zhibi94236usy@163.com  ",
      "password": "123456",
      "userName": "zhibi94236",
      "nickName": "London",
      "score": "74"
    },
    {
      "name": "yizhi093jbv@163.com",
      "password": "123456",
      "userName": "yizhi093",
      "nickName": "杨清月",
      "score": "75"
    },
    {
      "name": "yanhan1384ikg@163.com",
      "password": "123456",
      "userName": "yanhan1384",
      "nickName": "Tomas",
      "score": "76"
    },
    {
      "name": "natui67102sww@163.com",
      "password": "123456",
      "userName": "natui67102",
      "nickName": "熊芹芹",
      "score": "77"
    },
    {
      "name": "liepaping940awm@163.com",
      "password": "123456",
      "userName": "liepaping940",
      "nickName": "Terrell",
      "score": "78"
    },
    {
      "name": "touluxie71822vfl@163.com",
      "password": "123456",
      "userName": "touluxie71822",
      "nickName": "Matteo",
      "score": "79"
    },
    {
      "name": "yezhenao88032yoy@163.com",
      "password": "123456",
      "userName": "yezhenao88032",
      "nickName": "Tristin",
      "score": "80"
    },
    {
      "name": "gangshi02402pbh@163.com",
      "password": "123456",
      "userName": "gangshi02402",
      "nickName": "Jairo",
      "score": "81"
    },
    {
      "name": "ziyan9727aqw@163.com",
      "password": "123456",
      "userName": "ziyan9727",
      "nickName": "陶佳瑶",
      "score": "82"
    },
    {
      "name": "buche664xpz@163.com",
      "password": "123456",
      "userName": "buche664",
      "nickName": "Reginald",
      "score": "83"
    },
    {
      "name": "yueyuhan22065aqm@163.com",
      "password": "123456",
      "userName": "yueyuhan22065",
      "nickName": "\t曹梦丹",
      "score": "84"
    },
    {
      "name": "jiagouzai81931ooo@163.com",
      "password": "123456",
      "userName": "jiagouzai81931",
      "nickName": "Brent",
      "score": "85"
    },
    {
      "name": "reyongba983uci@163.com ",
      "password": "123456",
      "userName": "reyongba983",
      "nickName": "陈梦君",
      "score": "86"
    },
    {
      "name": "kzgej_578@163.com",
      "password": "123456",
      "userName": "kzgej_578",
      "nickName": "Ahmad",
      "score": "87"
    },
    {
      "name": "buhuiyu6798vnr@163.com",
      "password": "123456",
      "userName": "buhuiyu6798",
      "nickName": "Yandel",
      "score": "88"
    },
    {
      "name": "mudong269nnx@163.com ",
      "password": "123456",
      "userName": "mudong269",
      "nickName": "龚爔",
      "score": "89"
    },
    {
      "name": "yaranjiu34666oqo@163.com ",
      "password": "123456",
      "userName": "yaranjiu34666",
      "nickName": "Rene",
      "score": "90"
    },
    {
      "name": "xianlai6860omw@163.com ",
      "password": "123456",
      "userName": "xianlai6860",
      "nickName": "Willie",
      "score": "91"
    },
    {
      "name": "zhixian151oaw@163.com",
      "password": "123456",
      "userName": "zhixian151",
      "nickName": "Boston",
      "score": "92"
    },
    {
      "name": "renruotang719eka@163.com",
      "password": "123456",
      "userName": "renruotang719",
      "nickName": "Billy ",
      "score": "93"
    },
    {
      "name": "daonei55167ygu@163.com",
      "password": "123456",
      "userName": "daonei55167",
      "nickName": "马俊",
      "score": "94"
    },
    {
      "name": "jiugu3792cyw@163.com",
      "password": "123456",
      "userName": "jiugu3792",
      "nickName": "华雅仪",
      "score": "95"
    },
    {
      "name": "sutu4033898zhiro@163.com",
      "password": "122121qm",
      "userName": "Coralq",
      "nickName": "Coralq",
      "score": "96"
    },
    {
      "name": "teng5034038zhaoji@163.com",
      "password": "122121qm",
      "userName": "Chenyf23",
      "nickName": "Chenyf",
      "score": "97"
    },
    {
      "name": "sm7867278yanyit@163.com",
      "password": "122121qm",
      "userName": "Tsuiiu",
      "nickName": "Tsuiiu",
      "score": "98"
    },
    {
      "name": "shi0636337xian@163.com",
      "password": "122121qm",
      "userName": "Suenyu",
      "nickName": "Suenyu",
      "score": "99"
    },
    {
      "name": "tuihe385259mu@163.com",
      "password": "122121qm",
      "userName": "账号密码错误",
      "nickName": "账号密码错误",
      "score": "100"
    },
    {
      "name": "tltg754@163.com",
      "password": "122121qm",
      "userName": "Tangrt",
      "nickName": "Tangrt",
      "score": "101"
    },
    {
      "name": "shao46830502beig@163.com",
      "password": "122121qm",
      "userName": "shaw78",
      "nickName": "shaw78",
      "score": "102"
    },
    {
      "name": "stjpxq0575082@163.com",
      "password": "122121qm",
      "userName": "stjpxq0",
      "nickName": "stjpxq0",
      "score": "103"
    },
    {
      "name": "t91369830nankang@163.com",
      "password": "122121qm",
      "userName": "0nankang",
      "nickName": "0nankang",
      "score": "104"
    },
    {
      "name": "shi033114pingxi@163.com",
      "password": "122121qm",
      "userName": "Ethanzx",
      "nickName": "Ethanzx",
      "score": "105"
    },
    {
      "name": "tao8908325citan@163.com",
      "password": "122121qm",
      "userName": "Joshuacd",
      "nickName": "Joshuacd",
      "score": "106"
    },
    {
      "name": "shifei73352552z@163.com",
      "password": "122121qm",
      "userName": "Josephew",
      "nickName": "Josephew",
      "score": "107"
    },
    {
      "name": "t44479313zhao@163.com",
      "password": "122121qm",
      "userName": "Davidqw",
      "nickName": "Davidqw",
      "score": "108"
    },
    {
      "name": "shunmeng59646@163.com",
      "password": "122121qm",
      "userName": "Noahcx",
      "nickName": "Noahcx",
      "score": "109"
    },
    {
      "name": "shi0263413xinc@163.com",
      "password": "122121qm",
      "userName": "shi026",
      "nickName": "shi026",
      "score": "110"
    },
    {
      "name": "sp19123081fan@163.com",
      "password": "122121qm",
      "userName": "sp191",
      "nickName": "sp191",
      "score": "111"
    },
    {
      "name": "tan104563woj@163.com",
      "password": "122121qm",
      "userName": "tan1045",
      "nickName": "tan1045",
      "score": "112"
    },
    {
      "name": "tp97045329huanche@163.com",
      "password": "122121qm",
      "userName": "tp9704",
      "nickName": "tp9704",
      "score": "113"
    },
    {
      "name": "shi30682tuicha@163.com",
      "password": "122121qm",
      "userName": "682tui",
      "nickName": "682tui",
      "score": "114"
    },
    {
      "name": "sy20227568nafen4@163.com",
      "password": "122121qm",
      "userName": "sy20227",
      "nickName": "sy20227",
      "score": "115"
    },
    {
      "name": "tan3492913shik@163.com",
      "password": "122121qm",
      "userName": "tan349",
      "nickName": "tan349",
      "score": "116"
    },
    {
      "name": "sojhzau724@163.com",
      "password": "122121qm",
      "userName": "sojhzau72",
      "nickName": "sojhzau72",
      "score": "117"
    },
    {
      "name": "sr8667807kaozhao@163.com",
      "password": "122121qm",
      "userName": "sr8667",
      "nickName": "sr8667",
      "score": "118"
    },
    {
      "name": "tengfang4231603t0@163.com",
      "password": "122121qm",
      "userName": "gfang4231",
      "nickName": "gfang4231",
      "score": "119"
    },
    {
      "name": "tange79343xiw@163.com",
      "password": "122121qm",
      "userName": "tange79",
      "nickName": "tange79",
      "score": "120"
    },
    {
      "name": "shi078360langzhan@163.com",
      "password": "122121qm",
      "userName": "shi078",
      "nickName": "shi078",
      "score": "121"
    },
    {
      "name": "si180949naobij@163.com",
      "password": "122121qm",
      "userName": "si18094",
      "nickName": "si18094",
      "score": "122"
    },
    {
      "name": "song88142517sil@163.com",
      "password": "122121qm",
      "userName": "hxpctb",
      "nickName": "hxpctb",
      "score": "123"
    },
    {
      "name": "siduan50728to@163.com",
      "password": "122121qm",
      "userName": "siduan5",
      "nickName": "siduan5",
      "score": "124"
    },
    {
      "name": "shiqiang65136268@163.com",
      "password": "122121qm",
      "userName": "shiqiang6",
      "nickName": "shiqiang6",
      "score": "125"
    },
    {
      "name": "shi30427jiaoxun@163.com",
      "password": "122121qm",
      "userName": "shi30",
      "nickName": "shi30",
      "score": "126"
    },
    {
      "name": "shitan7852844@163.com",
      "password": "122121qm",
      "userName": "shitan7",
      "nickName": "shitan7",
      "score": "127"
    },
    {
      "name": "tangxian9123782s3@163.com ",
      "password": "122121qm",
      "userName": "xian9",
      "nickName": "xian9",
      "score": "128"
    },
    {
      "name": "tui5000songxia@163.com",
      "password": "122121qm",
      "userName": "tui5000",
      "nickName": "tui5000",
      "score": "129"
    },
    {
      "name": "sv39596127jiexi@163.com",
      "password": "122121qm",
      "score": "130"
    },
    {
      "name": "teng0805dongyag@163.com",
      "password": "122121qm",
      "userName": "teng08",
      "nickName": "teng08",
      "score": "131"
    },
    {
      "name": "tang5560xuanlab@163.com",
      "password": "122121qm",
      "userName": "tang556",
      "nickName": "tang556",
      "score": "132"
    },
    {
      "name": "tan64180419dou@163.com",
      "password": "122121qm",
      "userName": "tan64",
      "nickName": "tan64",
      "score": "133"
    },
    {
      "name": "tu42031611shai@163.com",
      "password": "122121qm",
      "userName": "tu420",
      "nickName": "tu420",
      "score": "134"
    },
    {
      "name": "touxing29980@163.com",
      "password": "122121qm",
      "userName": "xing29980",
      "nickName": "xing29980",
      "score": "135"
    },
    {
      "name": "supb452738@163.com",
      "password": "122121qm",
      "userName": "supb4",
      "nickName": "supb4",
      "score": "136"
    },
    {
      "name": "tong1393363jius@163.com",
      "password": "122121qm",
      "userName": "tong139",
      "nickName": "tong139",
      "score": "137"
    },
    {
      "name": "shi0916467wabidu8@163.com",
      "password": "122121qm",
      "userName": "shi09",
      "nickName": "shi09",
      "score": "138"
    },
    {
      "name": "t6054668gang@163.com",
      "password": "122121qm",
      "userName": "t60546",
      "nickName": "t60546",
      "score": "139"
    },
    {
      "name": "si489884jidi8651@163.com",
      "password": "122121qm",
      "userName": "884ji",
      "nickName": "884ji",
      "score": "140"
    },
    {
      "name": "shuo4952546ye@163.com",
      "password": "122121qm",
      "userName": "shuo495",
      "nickName": "shuo495",
      "score": "141"
    },
    {
      "name": "tongpu8110wei@163.com",
      "password": "122121qm",
      "userName": "gpu811",
      "nickName": "gpu811",
      "score": "142"
    },
    {
      "name": "shi2475656yueqia@163.com",
      "password": "122121qm",
      "userName": "shi247",
      "nickName": "shi247",
      "score": "143"
    },
    {
      "name": "shi63742924ch@163.com",
      "password": "122121qm",
      "userName": "2924ch",
      "nickName": "2924ch",
      "score": "144"
    },
    {
      "name": "shanyong84528035@163.com",
      "password": "122121qm",
      "userName": "nyong84",
      "nickName": "nyong84",
      "score": "145"
    },
    {
      "name": "tanbu44163900@163.com",
      "password": "122121qm",
      "userName": "Alejandro1",
      "nickName": "Alejandro",
      "score": "146"
    },
    {
      "name": "t51209758fangsu3@163.com",
      "password": "122121qm",
      "userName": "Rileyq",
      "nickName": "Rileyq",
      "score": "147"
    },
    {
      "name": "swzxla155@163.com",
      "password": "122121qm",
      "userName": "swzxla1",
      "nickName": "swzxla1",
      "score": "148"
    },
    {
      "name": "t99019556jixion@163.com",
      "password": "122121qm",
      "userName": "556ji",
      "nickName": "556ji",
      "score": "149"
    },
    {
      "name": "tn3916888jiao@163.com",
      "password": "122121qm",
      "userName": "888jiao",
      "nickName": "888jiao",
      "score": "150"
    },
    {
      "name": "shaoqiao77893@163.com",
      "password": "122121qm",
      "userName": "iao778",
      "nickName": "iao778",
      "score": "151"
    },
    {
      "name": "sp08501473yueshao@163.com",
      "password": "122121qm",
      "userName": "473yue",
      "nickName": "473yue",
      "score": "152"
    },
    {
      "name": "tan4098903lar@163.com",
      "password": "122121qm",
      "userName": "98903la",
      "nickName": "98903la",
      "score": "153"
    },
    {
      "name": "songci03507ga@163.com",
      "password": "122121qm",
      "userName": "ngci03",
      "nickName": "ngci03",
      "score": "154"
    },
    {
      "name": "shaxian6204xiaji1@163.com",
      "password": "122121qm",
      "userName": "shaxian6",
      "nickName": "shaxian6",
      "score": "155"
    },
    {
      "name": "song6945045yongg@163.com",
      "password": "122121qm",
      "userName": "ong694",
      "nickName": "Song Jia",
      "score": "156"
    },
    {
      "name": "spnr7073@163.com",
      "password": "122121qm",
      "userName": "spnr7073",
      "nickName": "spnr7073",
      "score": "157"
    },
    {
      "name": "tmmsyo978@163.com",
      "password": "122121qm",
      "userName": "tmmsyo978",
      "nickName": "Tommy Yang",
      "score": "158"
    },
    {
      "name": "t4970128lueshi4@163.com",
      "password": "122121qm",
      "userName": "128lue",
      "nickName": "128lue",
      "score": "159"
    },
    {
      "name": "soutou16814j@163.com",
      "password": "122121qm",
      "userName": "soutou1",
      "nickName": "soutou1",
      "score": "160"
    },
    {
      "name": "srog287@163.com",
      "password": "122121qm",
      "userName": "srog287",
      "nickName": "srog287",
      "score": "161"
    },
    {
      "name": "tcrazhjz869@163.com",
      "password": "122121qm",
      "userName": "tcrazhj",
      "nickName": "tcrazhj",
      "score": "162"
    },
    {
      "name": "tkadcbv5095@163.com",
      "password": "122121qm",
      "userName": "v5095",
      "nickName": "v5095",
      "score": "163"
    },
    {
      "name": "shangou3233928s@163.com",
      "password": "122121qm",
      "userName": "ngou323",
      "nickName": "Jason.Y",
      "score": "164"
    },
    {
      "name": "shi34855425yan@163.com",
      "password": "122121qm",
      "userName": "55425y",
      "nickName": "55425y",
      "score": "165"
    },
    {
      "name": "tang9860jiong@163.com",
      "password": "122121qm",
      "userName": "g986",
      "nickName": "g986",
      "score": "166"
    },
    {
      "name": "sizhi4201677tube4@163.com",
      "password": "122121qm",
      "userName": "izhi420",
      "nickName": "izhi420",
      "score": "167"
    },
    {
      "name": "tongpa07448nuoj@163.com",
      "password": "122121qm",
      "userName": "gpa07",
      "nickName": "gpa07",
      "score": "168"
    },
    {
      "name": "tangsi8173quej@163.com",
      "password": "122121qm",
      "userName": "ngsi817",
      "nickName": "ngsi817",
      "score": "169"
    },
    {
      "name": "ss97626414ji@163.com",
      "password": "122121qm",
      "userName": "ss97",
      "nickName": "ss97",
      "score": "170"
    },
    {
      "name": "shi5312361ketaol@163.com",
      "password": "122121qm",
      "userName": "361ke",
      "nickName": "Vivian",
      "score": "171"
    },
    {
      "name": "siqin5544675@163.com",
      "password": "122121qm",
      "userName": "in55",
      "nickName": "Jackson",
      "score": "172"
    },
    {
      "name": "sj8160367chunye02@163.com",
      "password": "122121qm",
      "userName": "sj8160",
      "nickName": "Gavin",
      "score": "173"
    },
    {
      "name": "tangkuang7376@163.com",
      "password": "122121qm",
      "userName": "uang7",
      "nickName": "Dylan",
      "score": "174"
    },
    {
      "name": "si1615477canshi@163.com",
      "password": "122121qm",
      "userName": "si161",
      "nickName": "Emily",
      "score": "175"
    },
    {
      "name": "t85660174dug@163.com",
      "password": "122121qm",
      "userName": "t856",
      "nickName": "Lillian",
      "score": "176"
    },
    {
      "name": "tao878800baduiba@163.com",
      "password": "122121qm",
      "userName": "ao878",
      "nickName": "ao878",
      "score": "177"
    },
    {
      "name": "tongchen05064@163.com",
      "password": "122121qm",
      "userName": "hen0",
      "nickName": "hen0",
      "score": "178"
    },
    {
      "name": "tq4855531huais@163.com",
      "password": "122121qm",
      "userName": "tq48",
      "nickName": "tq48",
      "score": "179"
    },
    {
      "name": "shan5203879yid@163.com",
      "password": "122121qm",
      "userName": "an5203",
      "nickName": "an5203",
      "score": "180"
    },
    {
      "name": "t57288831xuanmen@163.com",
      "password": "122121qm",
      "userName": "t5728",
      "nickName": "t5728",
      "score": "181"
    },
    {
      "name": "taoqiang68074037c@163.com",
      "password": "122121qm",
      "userName": "ang68",
      "nickName": "ang68",
      "score": "182"
    },
    {
      "name": "taecx3813096@163.com",
      "password": "122121qm",
      "userName": "taecx3",
      "nickName": "taecx3",
      "score": "183"
    },
    {
      "name": "timf0744@163.com",
      "password": "122121qm",
      "userName": "timf0",
      "nickName": "timf0",
      "score": "184"
    },
    {
      "name": "shaokang37176qia@163.com",
      "password": "122121qm",
      "userName": "kang3",
      "nickName": "Shirley",
      "score": "185"
    },
    {
      "name": "tan155713tuishi2@163.com",
      "password": "122121qm",
      "userName": "账号密码错误",
      "nickName": "账号密码错误",
      "score": "186"
    },
    {
      "name": "tanyi0231950zhui@163.com",
      "password": "122121qm",
      "userName": "yi023",
      "nickName": "yi023",
      "score": "187"
    },
    {
      "name": "tanyan5622shalush@163.com",
      "password": "122121qm",
      "userName": "yan56",
      "nickName": "yan56",
      "score": "188"
    },
    {
      "name": "song844235jingtu8@163.com",
      "password": "122121qm",
      "userName": "song84",
      "nickName": "song84",
      "score": "189"
    },
    {
      "name": "slym84991@163.com",
      "password": "122121qm",
      "userName": "JacobMak",
      "nickName": "Mak",
      "score": "190"
    },
    {
      "name": "soudu8403156@163.comn",
      "password": "122121qm",
      "userName": "账号密码错误",
      "nickName": "账号密码错误",
      "score": "191"
    },
    {
      "name": "ts46037493tangca@163.com",
      "password": "122121qm",
      "userName": "EthanWong",
      "nickName": "Ethan",
      "score": "192"
    },
    {
      "name": "suhao85481haosi@163.com",
      "password": "122121qm",
      "userName": "suhao8",
      "nickName": "suhao",
      "score": "193"
    },
    {
      "name": "songjiao5934@163.com",
      "password": "122121qm",
      "userName": "ongjiao",
      "nickName": "ongjiao",
      "score": "194"
    },
    {
      "name": "shou9467sousi6@163.com",
      "password": "122121qm",
      "userName": "hou946",
      "nickName": "hou946",
      "score": "195"
    },
    {
      "name": "tansi44066ga@163.com",
      "password": "122121qm",
      "userName": "tansi4",
      "nickName": "tansi4",
      "score": "196"
    },
    {
      "name": "t15520189yuezhon@163.com",
      "password": "122121qm",
      "userName": "89yuezho",
      "nickName": "yuezho",
      "score": "197"
    },
    {
      "name": "tmrxn953@163.com",
      "password": "122121qm",
      "userName": "TimothyShun",
      "nickName": "TimothyShun",
      "score": "198"
    },
    {
      "name": "shilue1110590@163.com",
      "password": "122121qm",
      "userName": "shilue1",
      "nickName": "shilue1",
      "score": "199"
    },
    {
      "name": "sibi6401816lao@163.com",
      "password": "122121qm",
      "userName": "1816lao",
      "nickName": "1816lao",
      "score": "200"
    },
    {
      "name": "shi81825lunyi7789@163.com",
      "password": "122121qm",
      "userName": "账号密码错误",
      "nickName": "账号密码错误",
      "score": "201"
    }
  ];

async function test(){
    // await user.add({name: 'test@xx.com', password: '1234567'});
    // await user.add([{name: 'test1111@xx.com', password: '1111111'}, {name: 'test1222@xx.com', password: '2222'}]);
    // const users = await user.getAllUsers();
    // console.log(users);
    // user.autoFillUserInfo();
    // user.countTifUser();
    // user.resetUserScore();
    // user.deluser();
    // const dbUsers = await user.getAllUsers();
    // // console.log(dbUsers.filter(item=>item.userName === '账号密码错误').map(item=> JSON.stringify(item)))
    // worker.writeFile('tmp.json', JSON.stringify(dbUsers, null, 2));
    user.add(allUsers);
}

test();