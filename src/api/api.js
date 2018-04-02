// 通信接口
import rest from '../common/service/restmould.js'
import routers from './route.js'
import axios from 'axios'
import common from "@/common/utill/common.js"

import Inject from "@/common/model/Inject"

let commonJs = Inject.getClass(common)

// let base = routers.apiPoat;
let base = "";
// 


// var cookieData =unescape(commonJs.getCookie("cookieInitData")) ;
// var cookied = JSON.parse(cookieData)
// cookied.body=JSON.parse(cookied.body)
// cookied.head=JSON.parse(cookied.head)

// console.log("cookied.head.accessPlatformId",cookied.head.accessPlatformId)

// let accessPlatformId_ = cookied.head.accessPlatformId
// let accessPlatformId_ = "11000000"

//el:
export const queryKnowledgeList = params => { return rest.post(`${base}/login`, createSendParams(params, "CC_CRM_PRECREATEKBCONTENT")).then(res => res.data); };



function createSendParams(body, businessId) {
  return { params: { body: body, head: { businessId: businessId, accessPlatformId:accessPlatformId_ } } };
}