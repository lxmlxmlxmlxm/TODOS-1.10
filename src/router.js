import Vue from 'vue'
import Router from 'vue-router'
import All from './views/All.vue'
import Active from './views/Active.vue'
import App from './App.vue'
import Completed from './views/Completed.vue'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
	{
			path: '/Completed',
			name: 'Completed',
			component: Completed
	},
		{
				path: '/',
				name: 'all',
				component: All
		},
    {
      path: '/Active',
      name: 'Active',
      component:Active
    }
  ]
})
