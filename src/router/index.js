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
		//卖房详情
		path: '/HBuyShow/:id',
		name: 'HBuyShow',
		component: resolve => require(['@/page/HouseBuyShowPage/HouseBuyShowPage'], resolve)
	},
	{
		//租房详情
		path: '/RBuyShow/:id',
		name: 'RBuyShow',
		component: resolve => require(['@/page/RentingBuyShowPage/RentingBuyShowPage'], resolve)
	},
	{
		//卖房-发布
		path: '/sendHouse',
		name: 'SendHouse',
		component: resolve => require(['@/page/sendHousePage/sendHousePage'], resolve)
	},
	{
		//购房-发布
		path: '/purchase',
		name: 'Purchase',
		component: resolve => require(['@/page/PurchasePage/PurchasePage'], resolve)
	},
	{
		//登录
		path: '/login',
		name: 'Login',
		component: resolve => require(['@/page/LoginPage/LoginPage'], resolve)
	},
	{
		//注册
		path: '/reg',
		name: 'Reg',
		component: resolve => require(['@/page/RegisterPage/RegisterPage'], resolve)
	}
	]
});

export default router