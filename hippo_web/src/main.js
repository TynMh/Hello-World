// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import axios from 'axios'
import settings from "./settings";

let echarts = require('echarts')
Vue.prototype.$echarts = echarts    // 组件对象 .$echarts
Vue.prototype.$axios = axios    // 组件对象 .$axios
Vue.prototype.$settings = settings    // 组件对象 .$settings

Vue.use(Antd);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
