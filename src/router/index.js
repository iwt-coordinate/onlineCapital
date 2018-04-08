import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import login from '@/components/login/login'
import role from '@/components/role/role'
import system from '@/components/system/system'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)


  const routes = [
    {path: '/home', name: '首页', component: home},
    {path: '', name: ' 系统管理', component: home,children:[
      {path: '', name: '系统用户管理', component: system ,children:
        [
          {path: '/role', name: '角色管理', component: role, redirect:"/resources/role/list"},
        ]
      },
      {path: '/HelloWorld', name: ' 你猜我是干啥的",', component: system , redirect:"/quirt"}, 
    ]},
    
    {path: '', name: ' 投注资金账户管理', component: home,children:[

      {path: '/system', name: '账户信息查询', component: system , redirect:"/resources/account/viewInfo"},
      
    ]},
    
    {path: '/', name: 'login', component: login},
  ]

export default new Router({
  routes,
  mode: 'history'
})

