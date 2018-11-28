// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import '@/assets/css/base.css'
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
import '../src/mock/mock'
import axios from 'axios'
import VueLazyload from 'vue-lazyload'
import echarts from 'echarts'
import store from "./store"
Vue.prototype.$echarts = echarts
Vue.prototype.axios = axios
Vue.config.productionTip = false
Vue.use(VueLazyload, {
  preLoad: 1.3, //预加载高度的比例
  error: 'http://image001.server110.com/20170322/2f51870d8add4f643bc44d0a67c8293e.gif', //图像的src加载失败
  loading: 'http://img.lanrentuku.com/img/allimg/1212/5-121204193R0-50.gif', //src的图像加载
  attempt: 3, //尝试计数
  listenEvents: ['scroll', 'mousewheel'] //你想要监听的事件,我个人喜欢全部监听，方便
});
// Vue.use(ElementUI)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {
    App
  },
  template: '<App/>'
})
