

const axios = require('axios-https-proxy-fix');  //修复了无法使用代理的问题

// 数据key 的描述信息
const dataDesc = [
    { name: 'ref_date', label: '日期' },
    { name: 'visit_total', label: '累计用户数' },
    { name: 'share_pv', label: '转发次数' },
    { name: 'share_uv', label: '转发人数' },
    { name: 'session_cnt', label: '打开次数' },
    { name: 'visit_pv', label: '访问次数' },
    { name: 'visit_uv', label: '访问人数' },
    { name: 'visit_uv_new', label: '新用户数' },
    { name: 'stay_time_uv', label: '人均停留时长 (浮点型，单位：秒)' },
    { name: 'stay_time_session', label: '次均停留时长 (浮点型，单位：秒)' },
    { name: 'visit_depth', label: '平均访问深度 (浮点型)' }
]

const dates = [
    '20180313',
    '20180314',
    '20180315',
    '20180316',
    '20180317',
    '20180318',
    '20180319',
    '20180320',
    '20180321',
    '20180322',
    '20180323',
    '20180324',
    '20180325',
    '20180326',
    '20180327',
    '20180328',
    '20180329',
    '20180330',
    '20180331',
    '20180401',
    '20180402',
];

const token = '8_eZdhtHP1P9OJ7OVlufydIfLazp18SysehMCRRaZ6qLZeYicUxZ5BkqAA2a_NosoxJuKaGtzzu4FdgsNkjZ5qm1KcxTEHyTWWveijdxuqp3lyw7rz-mDEdDxaXCD5a5BTtA3dQHD0gBG9VeCRODMgAHAFUD';


/**
 * 概况趋势数据
 * @param {string} date 日期 like 20180314
 */
async function fetchSummaryTrend(date) {
    const url = `https://api.weixin.qq.com/datacube/getweanalysisappiddailysummarytrend?access_token=${token}`;
    return new Promise((resolve, reject) => {
        axios.request({
            method: 'POST',
            url: url,
            data: {
                begin_date: date,
                end_date: date
            }
        }).then(res => {
            const data = res.data;
            if (data.list) {
                resolve(data.list[0]);
            } else {
                reject(data);
            }
        });
    });
}

/**
 * 访问趋势数据
 * @param {string} date 日期 like 20180314
 */
async function fetchVisitTrend(date) {
    const url = `https://api.weixin.qq.com/datacube/getweanalysisappiddailyvisittrend?access_token=${token}`;
    return new Promise((resolve, reject) => {
        axios.request({
            method: 'POST',
            url: url,
            data: {
                begin_date: date,
                end_date: date
            }
        }).then(res => {
            const data = res.data;
            if (data.list) {
                resolve(data.list[0]);
            } else {
                reject(data);
            }
        });
    });
}

async function fetchData(date) {
    const summary = await fetchSummaryTrend(date);
    const visit = await fetchVisitTrend(date);
    const data = { ...summary, ...visit };
    return data;
}


async function test() {
    const data = await Promise.all(dates.map(date => fetchData(date)));
    if(data && data.length > 0) {
        var str = dataDesc.map(item=> item.label).join('\t') + '\n';
        str += data.map(item=> dataDesc.map(desc=>item[desc.name]).join('\t')).join('\n');
        console.log(str);
    }
}
test();

