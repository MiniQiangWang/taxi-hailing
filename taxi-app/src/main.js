// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// import Mint from 'mint-ui'
import store from './store/index.js'
import 'mint-ui/lib/style.css'
import VueSocketio from 'vue-socket.io';
import socketio from 'socket.io-client';
// Vue.use(Mint);
Vue.config.productionTip = false

Vue.use(VueSocketio, socketio('http://localhost:3000'));

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