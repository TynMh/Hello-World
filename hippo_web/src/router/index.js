import Vue from 'vue'
import Router from 'vue-router'
import ShowCenter from '@/components/ShowCenter'
import Base from '@/components/Base'
import Host from '@/components/Host'
import Login from '@/components/Login'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Login
    },
    {
      path: '/hippo',
      component: Base,
      children: [
        {
          path: 'host/',
          component: Host
        },
        {
          path: 'showcenter/',
          component: ShowCenter
        }
      ]
    },
  ]
})
