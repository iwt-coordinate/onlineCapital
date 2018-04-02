// 内部拦截器

import axios from 'axios'
import { md5 } from './_md5.js'
import common from "@/common/utill/common.js";
import Inject from "@/common/model/Inject";
let commonJs = Inject.getClass(common);


function Rest() {
	this.init();
}
Rest.prototype.init = function () {
	var req = {};
	var head = {};
	var body = {};
	var deviceId = {};
	head.requestId = new Date().getTime().toString();
	head.signature = "null";
	req.head = head;
	req.body = body;
	this.param = req;
}
/**
 *  POST请求
 */
Rest.prototype.post = function (url, param, type = "json") {

	var that = this;

	that.url = url;
	var _param = param;

	//如果是默认查询处理参数 否则原参数发送
	if (type === "json") {
		// _param = that.sort(param.params);
		let _head = param.params.head;
		let _body = param.params.body;
		let objBody = {
			body: param.params.body,
			head: param.params.head
		}
		// console.log(_head,_body)
		_head.requestId = new Date().getTime().toString();
		var cookieData = unescape(commonJs.getCookie("cookieInitData"));
		var cookied = JSON.parse(cookieData);
		 cookied.body = JSON.parse(cookied.body);
		 cookied.head = JSON.parse(cookied.head);
		// console.log(this.cookied.head.channelType);
		// this.phshow = commonJs.phtype(this.cookied.head.channelType);

		if(cookied.head.channelType===3){
            _head.channelType = 3;
        }else if(cookied.head.channelType===4){
			_head.channelType = 4;
        }
		// _head.channelType = 3;

		if (JSON.stringify(param.params.body) === "{}") {
			objBody.body = "null"
			_body = "null"
		}
		objBody.head.signature = "null"
		let strMD5 = JSON.stringify(that.sort(objBody));
		console.log("strMD5",strMD5)
		// let strMD5 =JSON.stringify(objBody);
		let Front = "key1"
		let after = "key2"
		let strMd5Value = md5(Front + strMD5 + after)
		console.log(strMd5Value)
		_head.signature = strMd5Value
		var str_param = { body: _body, head: _head };
		_param = that.sort(str_param);
		// _param = JSON.stringify(_param)

		console.log(_param)

	}

	// 添加一个响应拦截器
	axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
	axios.interceptors.response.use(function (response) {
		//通用接口返回拦截处理
		var result, data = response.data, message = "", code = "0", body = "";
		if (data.head) {
			message = data.head.message;
			code = data.head.result;
		}
		if (data.body) {
			console.log(data.body)
			body = data.body;
		}
		switch (parseInt(code)) {
			case 0:
				return Promise.resolve({
					code: code,
					message: message,
					data: data,

				});
				break;

			default:
				return Promise.resolve({
					code: code,
					message: message,
					data: data,

				});
				break;
		}
	}, function (error) {
		return Promise.reject(error);
	});

	let send = {
		method: 'post',
		url: that.url,
		data: _param
	};

	//如果是formData格式修改默认头
	if (type === "formData") {
		send.headers = { 'Content-Type': 'multipart/form-data' };
	}
	return axios(send);
};

var detail = function (data) {
	if (data.body !== null) {
		return Promise.resolve({
			code: code,
			message: message,
			data: data,
			res: JSON.parse(data.body)
		});
	} else {
		return {};
	}

}
/**
 * 对象合并
 */
Rest.prototype.cfgExtend = function (req, param) {
	if (!param || typeof param != "object") return "";
	for (var key in param) {
		req[key] = param[key];
	}
	return req;
}
/**
 * 排序
 */
Rest.prototype.sort = function (_param) {
	var _head = _param.head,
		_body = _param.body,
		headArr = [],
		bodyArr = [],
		head = {},
		body = {},
		i,
		key;
	//先将对象转化为数组
	for (key in _head) {
		headArr.push(key);
	}
	headArr = headArr.sort(function (a, b) {
		if (/^\d/.test(a) ^ /^\D/.test(b)) return a > b ? 1 : (a == b ? 0 : -1);
		return a > b ? -1 : (a == b ? 0 : 1);

	});
	_param.head = head;
	//组装对象
	for (i = 0; i < headArr.length; i++) {
		var key = headArr[i];
		var value = _head[key];
		head[key] = value;
	}
	if (_body !== "null") {
		for (key in _body) {
			bodyArr.push(key);
		}
		bodyArr = bodyArr.sort(function (a, b) {
			if (/^\d/.test(a) ^ /^\D/.test(b)) return a > b ? 1 : (a == b ? 0 : -1);
			return a > b ? -1 : (a == b ? 0 : 1);
		});

		for (i = 0; i < bodyArr.length; i++) {
			var key = bodyArr[i];
			var value = _body[key];
			body[key] = value;
		}
		_param.body = body;
	} else {
		_param.body = "null"
	}

	/*
	 * 对键的数组排序
	 */




	return _param;
};
var rest = new Rest();

function trim(str) { //删除左右两端的空格
	if (!str) return "";
	return str.replace(/(^\s*)|(\s*$)/g, "");
}

//获取url后参数
function getQueryString(name) {
	var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
	var r = window.location.search.substr(1).match(reg);
	if (r != null) return unescape(r[2]);
	return null;
}

export default rest

