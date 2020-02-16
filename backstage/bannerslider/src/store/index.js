import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import bannerslider from './modules/bannerslider'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    bannerslider,
  },
  getters
})

export default store