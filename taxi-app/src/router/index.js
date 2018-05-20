import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/pages/login'
import HomePage from '@/pages/homePage'
import Edit from '@/pages/edit'
import Center from '@/pages/center'
import Schedule from '@/pages/schedule'
import Wallet from '@/pages/wallet'
import CityChoice from '@/pages/cityChoice'
import Search from '@/pages/search'
import RegistSuccess from '@/pages/registSuccess'
import ScheDetail from '@/pages/scheDetail'
import GetSche from '@/driverPages/getSche'
import Dlogin from '@/driverPages/driverLogin'
import DriverRS from '@/driverPages/driverRS'
import Dhome from '@/driverPages/driverHome'
import Dcenter from '@/driverPages/dcenter'
import DEdit from '@/driverPages/driverEdit'
import ChooseRole from '@/pages/chooseRole'
import Loader from '@/pages/loader'
import FeedBack from '@/pages/FeedBack'
import PMsg from '@/driverPages/pMsg'
import daoda from '@/Pages/daoda'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', redirect: '/role' },
    {
      path:'/home',
      name: 'HomePage',
      component: HomePage
    },{
      path:'/user',
      name: 'Login',
      component: Login
    },{
      path:'/registSuccess',
      name: 'RegistSuccess',
      component:RegistSuccess
    },{
      path:'/edit',
      name: 'Edit',
      component: Edit
    },{
      path:'/center',
      name:'Center',
      component:Center
    },{
      path:'/sche',
      name: 'Schedule',
      component: Schedule
    },{
      path:'/wallet',
      name: 'Wallet',
      component:Wallet
    },{
      path:'/city',
      name:'CityChoice',
      component:CityChoice
    },{
      path:'/search',
      name:'Search',
      component: Search
    },{
      path:'/schedetail',
      name:'ScheDetail',
      component: ScheDetail
    },{
      path:'/getsche',
      name:'GetSche',
      component: GetSche
    },{
      path:'/dlogin',
      name:'Dlogin',
      component: Dlogin
    },{
      path:'/drs',
      name:'DriverRS',
      component: DriverRS
    },{
      path:'/dhome',
      name:'Dhome',
      component: Dhome
    },{
      path:'/dcenter',
      name:'Dcenter',
      component:Dcenter
    },{
      path:'/dedit',
      name:'DEdit',
      component:DEdit
    },{
      path:'/role',
      name:'ChooseRole',
      component:ChooseRole
    },{
      path:'/loader',
      name:'Loader',
      component:Loader
    },{
      path:'/feedback',
      name:'FeedBack',
      component:FeedBack
    },{
      path:'/pmsg',
      name:'PMsg',
      component:PMsg
    },{
      path:'/daoda',
      name:'daoda',
      component:daoda
    }
  ]
})
