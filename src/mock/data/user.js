import Mock from 'mockjs';
// @haoboyu 用户登录用户名,密码


///业务管理
const LoginUsers = []
LoginUsers.push(Mock.mock({
    'firstName|3': 'fei',//重复fei这个字符串 3 次，打印出来就是'feifeifei'。
    'lastName|2-5': 'jiang',//重复jiang这个字符串 2-5 次。
    'big|+1': 0, //属性值自动加 1，初始值为 0
    'age|20-30': 25,//生成一个大于等于 20、小于等于 30 的整数，属性值 25 只是用来确定类型
    'weight|100-120.2-5': 110.24,//生成一个浮点数,整数部分大于等于 100、小于等于 120，小数部分保留 2 到 5 位。
    'likeMovie|1': Boolean,//随机生成一个布尔值，值为 true 的概率是 1/2，值为 false 的概率同样是 1/2。


    'regexp1': /^[a-z][A-Z][0-9]$/,//生成的符合正则表达式的字符串

}))
//3.1.2.	响应内容定义
const logindata = []
logindata.push(Mock.mock({
    'head': {
        "requestId": "1235646",
        "result": 1001,
        "message": "成功",
        "signature": "dsfgaha1351"
    },
    'body': {
        "transSerialNumber": "1321313184",
        "phoneNumber": "15076608255",
        "accountName": "libo",
        "platformAccountId": "ID",
        "certificateNumber": "131111111111111111",
        "cardPhoneNumber": "15116921184",
        "pointCardId": "1589348",
        "password": "123456",
        "callbackUrl": "http://www.baidu.com",
        "doNothingUrl": "http://www.baidu.com"

    }
}))
//3.2.	暂不注册
const Unregistered = []
Unregistered.push(Mock.mock({
    'head': {
        "requestId": "1235646",
        "result": 1000,
        "message": "成功",
        "signature": "dsfgaha1351"
    },
    'body': {
        "transSerialNumber": "1321313184",
        "callbackUrl": "http://www.baidu.com",
        "doNothingUrl": "http://www.baidu.com"

    }
}))

//3.3.	验证积分账户信息
const Verification = []
Verification.push(Mock.mock({
    'head': {
        "requestId": "1235646",
        "result": 0,
        "message": "密码错误",
        "signature": "dsfgaha1351"
    },
    'body': {
        "transSerialNumber": "1321313184",
        "pointCardId": "112233445566",
        "accountName": "libo",
        "certificateNumber": "131111111111111111",
        "cardPhoneNumber": "15116921184",
        "password": "123456",
        "callbackUrl": "http://www.baidu.com",
        "doNothingUrl": "http://www.baidu.com"

    }
}))

//3.4.	更换手机号注册积分账户
const replaceP = []
replaceP.push(Mock.mock({
    'head': {
        "requestId": "1235646",
        "result": 1000,
        "message": "成功",
        "signature": "dsfgaha1351"
    },
    'body': {
        "transSerialNumber": "1321313184",
        "pointCardId": "112233445566",
        "accountName": "libo",
        "certificateNumber": "131111111111111111",
        "cardPhoneNumber": "11111111111",
        "password": "123456",
        "callbackUrl": "http://www.baidu.com",
        "doNothingUrl": "http://www.baidu.com"

    }
}))
// 获取图片验证
const imagesCode = []
imagesCode.push(Mock.mock({
    'head': {
        "requestId": "1235646",
        "result": 0,
        "message": "成功",
        "signature": "dsfgaha1351"
    },
    'body': {
        "verifyCodeImg": "1321313184",
        "verifyCodeImgId": "112233445566",


    }
}))

const smsInfo = []
smsInfo.push(Mock.mock({
    'head': {
        "requestId": "1235646",
        "result": 0,
        "message": "成功",
        "signature": "dsfgaha1351"
    }

}))



export { LoginUsers, logindata, Unregistered, Verification, replaceP, imagesCode, smsInfo };