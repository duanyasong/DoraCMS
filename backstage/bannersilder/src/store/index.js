import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import bannersilder from './modules/bannersilder'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    bannersilder,
  },
  getters
})

export default store