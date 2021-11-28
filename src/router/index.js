import Vue from 'vue'
import VueRouter from 'vue-router'
import isAuthenticated from "../middleware/auth"

Vue.use(VueRouter)

const Routes = [
	{
		path: "/",
		name: "Root",
		beforeEnter: isAuthenticated
	},
	{
		path: "/home",
		name: "Home",
		component: () => import(/* webpackChunkName: "home" */ "../views/Home")
	}
]

const router = new VueRouter({
	routes: Routes,
	mode: 'history'
})

export default router
