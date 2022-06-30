import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Index from './index.vue'
import About from './about.vue'
import Math from './math.vue'

Vue.use(VueRouter)
const routes: Array<RouteConfig> = [
	{
		path: '/',
		component: Math,
	},
	{
		path: '/about',
		component: About,
	},
	{
		path: '/Math',
		component: Math,
	},
	// {
	// 	path: '/about',
	// 	name: 'about',
	// 	component: () => import(/* webpackChunkName: "about" */ './about.vue'),
	// },
]

const router = new VueRouter({
	routes,
})

new Vue({
	router,
	render: h => h(Index),
}).$mount('#app')
