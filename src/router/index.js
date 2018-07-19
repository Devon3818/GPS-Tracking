import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

var router = new Router({
	caseSensitive: true,
	mode: 'history',
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
			redirect: 'renting',
			component: resolve => require(['@/page/RentingBuyPage/RentingBuyPage'], resolve)
		},
		{
			path: '/renting',
			component: resolve => require(['@/page/RentingBuyPage/RentingBuyPage'], resolve)
		}]
    },{
		path: 'RBuyShow',
		name: 'RBuyShow',
		component: resolve => require(['@/page/RentingBuyShowPage/RentingBuyShowPage'], resolve)
	}]
});

export default router