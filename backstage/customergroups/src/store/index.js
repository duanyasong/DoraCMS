import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import customergroup from './modules/customergroup'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    customergroup
  },
  getters
})

export default store