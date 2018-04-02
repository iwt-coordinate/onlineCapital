import classmain from "@/common/model/classmain"
import { md5 } from '@/common/service/_md5.js'

export default class utillCommon extends classmain {
    constructor(res) {
        super();
        this.init();
    }
    //初始化信息
    init() {

    }

    // 表单提交
    submitForm(url, args) {
        var form = document.createElement('form');
        form.method = 'post'
        form.action = url
        for (let arg in args) {
            //var input = $("<input type='hidden'>");
            //alert(args[arg] +"---"+arg)
            var input = document.createElement('input')
            input.type = 'hidden'
            input.name = arg
            input.value = args[arg]
            //alert(input.name)
            //input.val(args[arg]);
            form.appendChild(input);
        }
        document.getElementById('app').appendChild(form);
        form.submit();
    }
    //读取cookie
    getCookie(name) {
        var cookies = document.cookie.split(";");
        for(var i=0;i<cookies.length;i++) {
         var cookie = cookies[i];
         var cookieStr = cookie.split("=");
         if(cookieStr && cookieStr[0].trim()==name) {
          return  decodeURI(cookieStr[1]);
         }
        }
      }
      
     trim () {
       return this.replace(/^(\s*)|(\s*)$/g,"");
    };
    //弹出层
    uppop(content) {
        //弹出层遮罩层背景
        let blockLayer = document.createElement("div")
        blockLayer.id = "blockLayer"
        blockLayer.style.cssText = "width: 100%; height: 100%;background: rgba(0, 0, 0, 0.5); position: absolute; top: 0;left: 0;"
        blockLayer.style.zIndex = 1000

        // 弹出层
        let layer = document.createElement("div");
        layer.setAttribute("id", "mydiv");

        let oH1 = document.createElement("h1");
        let oP = document.createElement("p");
        let cookieData = unescape(this.getCookie("cookieInitData"));
        let cookied = JSON.parse(cookieData);
        cookied.body = JSON.parse(cookied.body);
        cookied.head = JSON.parse(cookied.head);
        // console.log(this.cookied.head.channelType);
        // this.phshow = commonJs.phtype(this.cookied.head.channelType);
        if(cookied.head.channelType===3){
            layer.style.cssText = "width: 400px;background: #fff;margin: 0 auto;border-radius: 8px ;position:fixed"
            layer.style.zIndex = 1002
            oH1.style.cssText = "text-align: center;height: 38px; line-height: 38px;font-size: 16px;color: #fff;background: #e71419;border-radius: 8px 8px 0 0; margin:0"
            oP.style.cssText = "padding: 30px 20px;text-align: center;line-height: 24px;font-size: 14px;color: #000;"
        }else{
            layer.style.cssText = "width: 80%;background: #fff;margin: 0 auto;border-radius: 8px ;position:fixed"
            layer.style.zIndex = 1002
            oH1.style.cssText = "text-align: center; line-height: 3.4rem;font-size: 1.25rem; color: #fff;background: #e71419;border-radius: 8px 8px 0 0; margin:0"
            oP.style.cssText = "padding: 30px 20px;text-align: center;line-height: 1.6rem;font-size:  1.2rem;color: #000;"
        }
        

        layer.appendChild(oH1);
        layer.appendChild(oP);
        oH1.innerText = "温馨提示"
        oP.innerText = content
        document.body.appendChild(blockLayer);
        document.body.appendChild(layer);
        let mydiv = document.getElementById(layer.id)
        var winWidth = window.innerWidth;
        var winHeight = window.innerHeight;
        var targetWidth = layer.offsetWidth;
        var targetHeight = layer.offsetHeight;
        layer.style.top = (winHeight - targetHeight) / 2 + "px";
        layer.style.left = (winWidth - targetWidth) / 2 + "px";
        setTimeout("document.body.removeChild(mydiv)", 3000)
        setTimeout("document.body.removeChild(blockLayer)", 3000)
    }
    //字符串截取替换方法
    replaceFn(str, start, end, symbol) {
        var start = ~~start, end = ~~end || str.length, symbol = symbol || '*',
            num = end - start, sb = '',
            reg = new RegExp('(.{' + start + '}).{' + num + '}(.*)');
        for (var i = 0; i < num; i++) {
            sb += symbol;
        }

        return str.replace(reg, '$1' + sb + '$2');
    }
    // 数组对象排序
    sortFN(_param) {
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
    /*利用当前时间生成yyyymmddhhmmss这样的字符串 start*/
    pad2(n) { return n < 10 ? '0' + n : n }

    generateTimeReqestNumber() {
        var date = new Date();
        return date.getFullYear().toString() + this.pad2(date.getMonth() + 1) + this.pad2(date.getDate()) + this.pad2(date.getHours()) + this.pad2(date.getMinutes()) + this.pad2(date.getSeconds());
    }

    /*利用当前时间生成yyyymmddhhmmss这样的字符串 end*/

    Callbackform(CallbackUrl, body, head) {
        let objInfo = {
            body: body,
            head: head
        }
        if (JSON.stringify(body) === "{}") {
            objInfo.body = "null"
        }
        var strMD5 = this.sortFN(objInfo)
        console.log(strMD5)
        let Front = "key1"
        let after = "key2"
        let strMd5Value = md5(Front + JSON.stringify(strMD5) + after)
        objInfo.head.signature = strMd5Value
        var newObjInfo = this.sortFN(objInfo)

        console.log(newObjInfo)
        console.log("_body:::::::::::", JSON.stringify(newObjInfo.body))
        console.log("_head:::::::::::", newObjInfo.head)
        this.submitForm(CallbackUrl, { "body": JSON.stringify(newObjInfo.body), "head": JSON.stringify(newObjInfo.head) })
    }
    //验证识别设备型号
    phtype(type){
        var val;
        if(type===3){
            val=true
          }else{
            val=false
          }
          return val
    }
}