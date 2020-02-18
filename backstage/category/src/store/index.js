import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import category from './modules/category'
import contentTemplate from './modules/contentTemplate'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    category,
    contentTemplate
  },
  getters
})

export default store