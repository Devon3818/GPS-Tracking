import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

var router = new Router({
	caseSensitive: true,
	scrollBehavior() {
		return {
			x: 0,
			y: 0
		}
    },
    routes: [{
        path: '/',
		component: resolve => require(['@/page/TabRentingPage/TabRentingPage'], resolve),
		children: [{
			path: '',
			redirect: 'houseBuy',
			component: resolve => require(['@/page/HouseBuyPage/HouseBuyPage'], resolve)
		},
		{
			path: '/houseBuy',
			component: resolve => require(['@/page/HouseBuyPage/HouseBuyPage'], resolve)
		},
		{
			path: '/rentingBuy',
			component: resolve => require(['@/page/RentingBuyPage/RentingBuyPage'], resolve)
		}]
	},
	{
		path: '/RBuyShow',
		name: 'RBuyShow',
		component: resolve => require(['@/page/RentingBuyShowPage/RentingBuyShowPage'], resolve)
	},
	{
		path: '/login',
		name: 'Login',
		component: resolve => require(['@/page/LoginPage/LoginPage'], resolve)
	},
	{
		path: '/reg',
		name: 'Reg',
		component: resolve => require(['@/page/RegisterPage/RegisterPage'], resolve)
	}
	]
});

export default router