import Vue from 'vue'
import App from './App.vue'
import VConsole from 'vconsole'

Vue.config.productionTip = false

// or init with options
const vConsole = new VConsole({ theme: 'dark' })
Vue.use(vConsole)
new Vue({
	render: h => h(App),
}).$mount('#app')
