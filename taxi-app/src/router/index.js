import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/pages/login'
import Main from '@/pages/main'
import HomePage from '@/pages/homePage'
import Edit from '@/pages/edit'
import Center from '@/pages/center'
import Schedule from '@/pages/schedule'
import Wallet from '@/pages/wallet'
import CityChoice from '@/pages/cityChoice'
import Search from '@/pages/search'
import RegistSuccess from '@/pages/registSuccess'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', redirect: '/user' },
    {
      path:'/home',
      name: 'HomePage',
      component: HomePage
    },
    {
      path:'/user',
      name: 'Login',
      component: Login
    },
    {
      path:'/registSuccess',
      name: 'RegistSuccess',
      component:RegistSuccess
    },
    {
      path:'/edit',
      name: 'Edit',
      component: Edit
    },
    {
      path:'/center',
      name:'Center',
      component:Center
    },
    {
      path:'/sche',
      name: 'Schedule',
      component: Schedule
    },
    {
      path:'/wallet',
      name: 'Wallet',
      component:Wallet
    },
    {
      path:'/city',
      name:'CityChoice',
      component:CityChoice
    },
    {
      path:'/search',
      name:'Search',
      component: Search
    }
  ]
})
