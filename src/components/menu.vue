<template>
    <div class="menu">
        <!-- <el-radio-group v-model="isCollapse" style="margin-bottom: 0px;">
            <el-radio-button :label="false">展开</el-radio-button>
            <el-radio-button :label="true">收起</el-radio-button>
        </el-radio-group> -->
        <el-menu default-active="1" class="el-menu-vertical-demo" :router="true" @open="handleOpen" @close="handleClose" :collapse="isCollapse" :default-openeds="openeds">
            <el-submenu  v-for="(item,index) in json" :index="item.order+''" class="title1">
                <template slot="title" >
                    <i class="el-icon-location colorw"></i>
                    <span slot="title" class="colorw">{{item.funcTitle}}</span>
                </template>
            
                    <el-submenu :index="item.order+'-'+items.order" :unique-opened="true" v-for="(items,indexs) in item.children" v-if="items.children.length>0">
                        <span slot="title" >{{items.funcTitle}}</span>
                        <el-menu-item  v-for="(itemchild,indexchild) in items.children" :index="itemchild.requestUrl">{{itemchild.funcTitle}}</el-menu-item>
                    </el-submenu>
                    <el-menu-item :index="items.requestUrl" v-for="(items,indexs) in item.children"  v-if="items.children.length<=0">{{items.funcTitle}}</el-menu-item>
           
                
            </el-submenu>
        </el-menu>
        <!-- <pre>{{json}}</pre> -->
    </div>
</template>
<script>
    export default {
        data(){
            return {
                isCollapse: false,
                openeds:["1","2","3","4","5","6"],
                json:[],
                menus1: [
                    {
                    "funcId": "43dafb5d39f3481f85dce80c0ee95e43",
                    "funcTitle": "角色管理",
                    "requestUrl": "/resources/role/list",
                    "funcType": 0,
                    "parentFuncId": "43dafb5d39f3481f85dce80c0ee95e41",
                    "order": 1
                    },
                    {
                    "funcId": "43dafb5d39f3481f85dce80c0ee95e4e",
                    "funcTitle": "系统用户操作日志",
                    "requestUrl": "/resources/log/user/list",
                    "funcType": 0,
                    "parentFuncId": "43dafb5d39f3481f85dce80c0ee95e42",
                    "order": 1
                    },
                    {
                    "funcId": "43dafb5d39f3481f85dce80c0ee95e4a",
                    "funcTitle": "账户信息查询",
                    "requestUrl": "/resources/account/viewInfo",
                    "funcType": 0,
                    "parentFuncId": "43dafb5d39f3481f85dce80c0ee95e49",
                    "order": 1
                    },
                    {
                    "funcId": "43dafb5d39f3481f85dce80c0ee95e40",
                    "funcTitle": "系统管理",
                    "requestUrl": null,
                    "funcType": 0,
                    "parentFuncId": null,
                    "order": 1
                    },
                     {
                    "funcId": "43dafb5d39f3481f85dce80c0ee95e41",
                    "funcTitle": "系统用户管理",
                    "requestUrl": null,
                    "funcType": 0,
                    "parentFuncId": "43dafb5d39f3481f85dce80c0ee95e40",
                    "order": 1
                    },
                    {
                    "funcId": "43dafb5d39f3481f85dce80c0ee95e57",
                    "funcTitle": "与积分换彩系统对账任务查询",
                    "requestUrl": "/resources/task/baaRecon/list",
                    "funcType": 0,
                    "parentFuncId": "43dafb5d39f3481f85dce80c0ee95e56",
                    "order": 1
                    },
                    {
                    "funcId": "43dafb5d39f3481f85dce80c0ee95e51",
                    "funcTitle": "预缴款充值记录查询",
                    "requestUrl": "/resources/prePay/charge/list",
                    "funcType": 0,
                    "parentFuncId": "43dafb5d39f3481f85dce80c0ee95e50",
                    "order": 1
                    },
                    {
                    "funcId": "43dafb5d39f3481f85dce80c0ee95e5a",
                    "funcTitle": "与积分换彩差异账记录查询",
                    "requestUrl": "/resources/account/baa/diff/list",
                    "funcType": 0,
                    "parentFuncId": "43dafb5d39f3481f85dce80c0ee95e59",
                    "order": 1
                    },
                    {
                    "funcId": "43dafb5d39f3481f85dce80c0ee95e5d",
                    "funcTitle": "中行预缴款划付记录查询",
                    "requestUrl": "/resources/prepay/boc/list",
                    "funcType": 0,
                    "parentFuncId": "43dafb5d39f3481f85dce80c0ee95e5c",
                    "order": 1
                    },
                   
                    {
                    "funcId": "43dafb5d39f3481f85dce80c0ee95e60",
                    "funcTitle": "渠道商基本信息查询",
                    "requestUrl": "/resources/dealer/list",
                    "funcType": 0,
                    "parentFuncId": "43dafb5d39f3481f85dce80c0ee95e5f",
                    "order": 1
                    },
                    {
                    "funcId": "43dafb5d39f3481f85dce80c0ee95e58",
                    "funcTitle": "与国彩通对账任务查询",
                    "requestUrl": "/resources/task/gctRecon/list",
                    "funcType": 0,
                    "parentFuncId": "43dafb5d39f3481f85dce80c0ee95e56",
                    "order": 2
                    },
                    {
                    "funcId": "43dafb5d39f3481f85dce80c0ee95e4b",
                    "funcTitle": "账户冻结与解冻管理",
                    "requestUrl": "/resources/account/inuse/list",
                    "funcType": 0,
                    "parentFuncId": "43dafb5d39f3481f85dce80c0ee95e49",
                    "order": 2
                    },
                    {
                    "funcId": "43dafb5d39f3481f85dce80c0ee95e5e",
                    "funcTitle": "中银通备付金账户划付查询",
                    "requestUrl": "/resources/prepay/zyt/list",
                    "funcType": 0,
                    "parentFuncId": "43dafb5d39f3481f85dce80c0ee95e5c",
                    "order": 2
                    },
                    {
                    "funcId": "43dafb5d39f3481f85dce80c0ee95e49",
                    "funcTitle": "投注资金账户管理",
                    "requestUrl": null,
                    "funcType": 0,
                    "parentFuncId": null,
                    "order": 2
                    },
                    {
                    "funcId": "43dafb5d39f3481f85dce80c0ee95e42",
                    "funcTitle": "日志管理",
                    "requestUrl": null,
                    "funcType": 0,
                    "parentFuncId": "43dafb5d39f3481f85dce80c0ee95e40",
                    "order": 2
                    },
                     {
                    "funcId": "43dafb5d39f3481f85dce80c0ee95e43",
                    "funcTitle": "你猜我是干啥的",
                    "requestUrl": "/quirt",
                    "funcType": 0,
                    "parentFuncId": "43dafb5d39f3481f85dce80c0ee95e40",
                    "order": 3
                    },
                    {
                    "funcId": "43dafb5d39f3481f85dce80c0ee95e52",
                    "funcTitle": "充值记录查询",
                    "requestUrl": "/resources/account/charge/list",
                    "funcType": 0,
                    "parentFuncId": "43dafb5d39f3481f85dce80c0ee95e50",
                    "order": 2
                    },
                    {
                    "funcId": "43dafb5d39f3481f85dce80c0ee95e44",
                    "funcTitle": "角色权限管理",
                    "requestUrl": "/resources/role/normal/list",
                    "funcType": 0,
                    "parentFuncId": "43dafb5d39f3481f85dce80c0ee95e41",
                    "order": 2
                    },
                    {
                    "funcId": "43dafb5d39f3481f85dce80c0ee95e5b",
                    "funcTitle": "与国彩通差异账记录查询",
                    "requestUrl": "/resources/account/gct/diff/list",
                    "funcType": 0,
                    "parentFuncId": "43dafb5d39f3481f85dce80c0ee95e59",
                    "order": 2
                    },
                    {
                    "funcId": "43dafb5d39f3481f85dce80c0ee95e4f",
                    "funcTitle": "系统处理日志",
                    "requestUrl": "/resources/log/sys/list",
                    "funcType": 0,
                    "parentFuncId": "43dafb5d39f3481f85dce80c0ee95e42",
                    "order": 2
                    },
                    {
                    "funcId": "43dafb5d39f3481f85dce80c0ee95e53",
                    "funcTitle": "投注记录查询",
                    "requestUrl": "/resources/betRecord/list",
                    "funcType": 0,
                    "parentFuncId": "43dafb5d39f3481f85dce80c0ee95e50",
                    "order": 3
                    },
                    {
                    "funcId": "43dafb5d39f3481f85dce80c0ee95e4c",
                    "funcTitle": "账户收支明细查询",
                    "requestUrl": "/resources/account/payDetail/list",
                    "funcType": 0,
                    "parentFuncId": "43dafb5d39f3481f85dce80c0ee95e49",
                    "order": 3
                    },
                    {
                    "funcId": "43dafb5d39f3481f85dce80c0ee95e45",
                    "funcTitle": "角色权限查询",
                    "requestUrl": "/resources/role/func/list",
                    "funcType": 0,
                    "parentFuncId": "43dafb5d39f3481f85dce80c0ee95e41",
                    "order": 3
                    },
                    {
                    "funcId": "43dafb5d39f3481f85dce80c0ee95e50",
                    "funcTitle": "交易管理",
                    "requestUrl": null,
                    "funcType": 0,
                    "parentFuncId": null,
                    "order": 3
                    },
                    {
                    "funcId": "43dafb5d39f3481f85dce80c0ee95e46",
                    "funcTitle": "用户权限管理",
                    "requestUrl": "/resources/user/list",
                    "funcType": 0,
                    "parentFuncId": "43dafb5d39f3481f85dce80c0ee95e41",
                    "order": 4
                    },
                    {
                    "funcId": "43dafb5d39f3481f85dce80c0ee95e54",
                    "funcTitle": "派奖记录查询",
                    "requestUrl": "/resources/award/return/list",
                    "funcType": 0,
                    "parentFuncId": "43dafb5d39f3481f85dce80c0ee95e50",
                    "order": 4
                    },
                   
                    {
                    "funcId": "43dafb5d39f3481f85dce80c0ee95e59",
                    "funcTitle": "差错账处理",
                    "requestUrl": null,
                    "funcType": 0,
                    "parentFuncId": null,
                    "order": 5
                    },
                     {
                    "funcId": "43dafb5d39f3481f85dce80c0ee95e56",
                    "funcTitle": "对账管理",
                    "requestUrl": null,
                    "funcType": 0,
                    "parentFuncId": null,
                    "order": 4
                    },
                    {
                    "funcId": "43dafb5d39f3481f85dce80c0ee95e55",
                    "funcTitle": "提现记录查询",
                    "requestUrl": "/resources/cash/list",
                    "funcType": 0,
                    "parentFuncId": "43dafb5d39f3481f85dce80c0ee95e50",
                    "order": 5
                    },
                    {
                    "funcId": "43dafb5d39f3481f85dce80c0ee95e47",
                    "funcTitle": "用户权限查询",
                    "requestUrl": "/resources/user/func/list",
                    "funcType": 0,
                    "parentFuncId": "43dafb5d39f3481f85dce80c0ee95e41",
                    "order": 5
                    },
                    {
                    "funcId": "43dafb5d39f3481f85dce80c0ee95e5c",
                    "funcTitle": "资金划付管理",
                    "requestUrl": null,
                    "funcType": 0,
                    "parentFuncId": null,
                    "order": 6
                    },
                    {
                    "funcId": "43dafb5d39f3481f85dce80c0ee95e48",
                    "funcTitle": "重置用户密码",
                    "requestUrl": "/resources/user/resetpwd/list",
                    "funcType": 0,
                    "parentFuncId": "43dafb5d39f3481f85dce80c0ee95e41",
                    "order": 6
                    },
                    {
                    "funcId": "43dafb5d39f3481f85dce80c0ee95e5f",
                    "funcTitle": "渠道商信息管理",
                    "requestUrl": null,
                    "funcType": 0,
                    "parentFuncId": null,
                    "order": 7
                    }
                ]
            }
        },

      
 
 
  created() {
    //菜单数据排序
    var by = function(name) {
      return function(o, p) {
        var a, b;
        if (typeof o === "object" && typeof p === "object" && o && p) {
          a = o[name];
          b = p[name];
          if (a === b) {
            return 0;
          }
          if (typeof a === typeof b) {
            return a < b ? -1 : 1;
          }
          return typeof a < typeof b ? -1 : 1;
        } else {
          throw "error";
        }
      };
    };
    //重排数据
    var obj = [];
    var that = this;
    for (var i in this.menus1) {
      this.menus1[i].children = [];

      for (var j in this.menus1) {
        ////获取三级菜单
        if (
          that.menus1[i].parentFuncId &&
          that.menus1[i].funcId === this.menus1[j].parentFuncId
        ) {
          that.menus1[i].children.push(this.menus1[j]);
          that.menus1[i].children.sort(by("order"));
        }
        ////获取二级菜单
        if (
          !that.menus1[i].parentFuncId &&
          that.menus1[i].funcId === this.menus1[j].parentFuncId
        ) {
          that.menus1[i].children.push(this.menus1[j]);
          that.menus1[i].children.sort(by("order"));
        }
      }
      //获取一级菜单
      if (!this.menus1[i].parentFuncId) {
        obj.push(this.menus1[i]);
        obj.sort(by("order"));
      }
    }
    console.log(obj);
    this.json = obj;
  },
  methods: {
    handleOpen(index) {
      //  alert(index)
      console.log(index);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>
