import Vue from 'vue'
import Router from 'vue-router'
import index from '@/pages/index'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    // {
    //   path:"/",
    //   redirect: "/login"
    // },
    {
      path: '/index',
      name: 'index',
      component: () => import('../pages/index.vue'),
    },
    {
      path: '/login',
      component: () => import('../pages/Login.vue'),
    }
  ]
})
