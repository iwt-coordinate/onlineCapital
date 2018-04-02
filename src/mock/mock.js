import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

import { LoginUsers, logindata, Unregistered, Verification, replaceP, imagesCode, smsInfo } from './data/user.js';




let _accesscode = LoginUsers


export default {



    /**
     * mock bootstrap
     */
    bootstrap() {
        let mock = new MockAdapter(axios);

        mock.onGet('/success').reply(200, {
            msg: 'success'
        });
        // 模拟错误请求
        mock.onGet('/error').reply(500, {
            msg: 'failure'
        });

        mock.onPost('/login').reply(config => {

            let { username, password } = config.data;
            return new Promise((resolve, reject) => {
                let data = null;
                setTimeout(() => {
                    let hasUser = LoginUsers.some(u => {
                        if (u.username === username && u.password === password) {
                            data = JSON.parse(JSON.stringify(u));
                            data.password = undefined;
                            return true;
                        }
                    });
                    if (hasUser) {
                        resolve([200, { code: 200, msg: '请求成功', data }]);
                    } else {
                        resolve([200, { code: 500, msg: '账号或密码错误' }]);
                    }
                }, 1000);
            });
        });
        //注册积分账户申请
        mock.onPost('/registercardapply').reply(config => {

            let { transSerialNumber, phoneNumber } = config.data;
            return new Promise((resolve, reject) => {
                let data = null;
                setTimeout(() => {
                    let hasUser = logindata.some(u => {
                        if (u.transSerialNumber === transSerialNumber && u.phoneNumber === phoneNumber) {
                            data = JSON.parse(JSON.stringify(u));
                            data.phoneNumber = undefined;
                            return true;
                        }
                    });
                    if (hasUser) {
                        resolve([200, { code: 0, msg: '请求成功', data }]);
                    } else {
                        resolve([200, { code: 1, msg: '请求错误' }]);
                    }
                }, 1000);
            });
        });
        //暂不注册
        mock.onPost('/registercardcancel').reply(config => {

            let { transSerialNumber } = config.data;
            return new Promise((resolve, reject) => {
                let data = null;
                setTimeout(() => {
                    let hasUser = Unregistered.some(u => {
                        if (u.transSerialNumber === transSerialNumber) {
                            data = JSON.parse(JSON.stringify(u));
                            return true;
                        }
                    });
                    if (hasUser) {
                        resolve([200, { code: 0, msg: '请求成功', data }]);
                    } else {
                        resolve([200, { code: 1, msg: '请求错误' }]);
                    }
                }, 1000);
            });
        });

        //3.3.	验证积分账户信息
        mock.onPost('/verifycard').reply(config => {

            let { transSerialNumber, password } = config.data;
            return new Promise((resolve, reject) => {
                let data = null;
                setTimeout(() => {
                    let hasUser = Verification.some(u => {
                        if (u.transSerialNumber === transSerialNumber) {
                            data = JSON.parse(JSON.stringify(u));
                            return true;
                        }
                    });
                    if (hasUser) {
                        resolve([200, { code: 0, msg: '请求成功', data }]);
                    } else {
                        resolve([200, { code: 1, msg: '请求错误' }]);
                    }
                }, 1000);
            });
        });

        //3.4.	更换手机号注册积分账户
        mock.onPost('/modifyphoneregistercard').reply(config => {

            let { transSerialNumber } = config.data;
            return new Promise((resolve, reject) => {
                let data = null;
                setTimeout(() => {
                    let hasUser = replaceP.some(u => {
                        if (u.transSerialNumber === transSerialNumber) {
                            data = JSON.parse(JSON.stringify(u));
                            return true;
                        }
                    });
                    if (hasUser) {
                        resolve([200, { code: 0, msg: '请求成功', data }]);
                    } else {
                        resolve([200, { code: 1, msg: '请求错误' }]);
                    }
                }, 1000);
            });
        });

        //3.6.	图片验证
        mock.onPost('/verifycodeimg').reply(config => {


            return new Promise((resolve, reject) => {
                let data = null;
                setTimeout(() => {
                    let hasUser = imagesCode.some(u => {

                        return true;

                    });
                    if (hasUser) {
                        resolve([200, { code: 0, msg: '请求成功', data }]);
                    } else {
                        resolve([200, { code: 1, msg: '请求错误' }]);
                    }
                }, 1000);
            });
        });
        //3.5. 短信验证
        mock.onPost('/getverifycode').reply(config => {


            return new Promise((resolve, reject) => {
                let data = null;
                setTimeout(() => {
                    let hasUser = smsInfo.some(u => {

                        return true;

                    });
                    if (hasUser) {
                        resolve([200, { code: 0, msg: '请求成功', data }]);
                    } else {
                        resolve([200, { code: 1, msg: '请求错误' }]);
                    }
                }, 1000);
            });
        });



    }
}