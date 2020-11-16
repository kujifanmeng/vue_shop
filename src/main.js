import Vue from 'vue'
import router from './router'

import store from './store'
import './assets/css/global.css'
// import './plugins/element.js'
import ElementUI from 'element-ui';
import './assets/fonts/iconfont.css'
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue'
import  axios from 'axios'
axios.defaults.baseURL = 'http://127.0.0.1:8888/api/private/v1/'
Vue.prototype.$http = axios
Vue.use(ElementUI);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
