// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './style/common.css';
import './style/style.css';
// import './style/pc_label.css';
// import './style/h5_style.css';
// import './style/h5_label.css';
import axios from 'axios';

import "babel-polyfill";

Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.prototype.router = router
import Mock from './mock';
Mock.bootstrap()


/* eslint-disable no-new */
window.vm = new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
