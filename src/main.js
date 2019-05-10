import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Vuex from 'vuex'
import 'ant-design-vue/dist/antd.css'
import Antd from 'ant-design-vue'
import store from './store.js'

Vue.config.productionTip = false
Vue.use(Antd)

new Vue({
  router,
	store,
  render: h => h(App)
}).$mount('#app')
