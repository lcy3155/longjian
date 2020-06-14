// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from "./store";
import axios from '../src/utils/axios'
// import 'swiper/dist/css/swiper.css'
// import VueAwesomeSwiper from 'vue-awesome-swiper'
// Vue.use(VueAwesomeSwiper)
import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant)
import weui from 'weui.js'
Vue.use(axios)
import 'weui'
Vue.prototype.$weui = weui

Vue.config.productionTip = false
console.log(store)
Vue.prototype.$store=store;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
