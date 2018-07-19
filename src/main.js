import Vue from 'vue'
import router from './router'
import App from './App.vue'

Vue.config.productionTip = false

import mandMobile from 'mand-mobile'
import 'mand-mobile/lib/mand-mobile.css'

Vue.use(mandMobile)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
