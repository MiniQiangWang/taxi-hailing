// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Mint from 'mint-ui'
import store from './store/index.js'
import 'mint-ui/lib/style.css'

// Vue.use(Mint);
Vue.config.productionTip = false

/* eslint-disable no-new */
import { Field } from 'mint-ui';
import { Button } from 'mint-ui';
import { Tabbar, TabItem } from 'mint-ui';
import { Header } from 'mint-ui';

Vue.component(Header.name, Header);
Vue.component(Field.name, Field);
Vue.component(Button.name, Button);
Vue.component(Tabbar.name, Tabbar);
Vue.component(TabItem.name, TabItem);
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

// router.beforeEach((to, from, next) => {
//   if (to.path === '/login') {
//     next()
//   } else {
//     if (!store.state.user) {
//       next({ path: '/login' })
//     } else {
//       next()
//     }
//   }
// })