import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'
import city from './modules/city'
import getters from './getters'

Vue.use(Vuex)



const store = new Vuex.Store({
    modules: {
      user,
      city
    },
    getters
  })

export default store