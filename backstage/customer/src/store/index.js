import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import customer from './modules/customer'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    customer,
  },
  getters
})

export default store