import Vue from "vue"
import App from "./App.vue"
import router from "./router"
import store from "./store"
import { BootstrapVue } from "bootstrap-vue"

// CSS ( Bootstrap )
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap-vue/dist/bootstrap-vue.css"

Vue.config.productionTip = false

Vue.use(BootstrapVue)

new Vue({
	router: router,
	store: store,
	render: h => h(App)
}).$mount('#app')
