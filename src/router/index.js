import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import login from '@/components/login/login'

Vue.use(Router)


  const routes = [
    {path: '/home', name: 'home', component: home},
    {path: '/', name: 'login', component: login},
  ]

export default new Router({
  routes,
  mode: 'history'
})

