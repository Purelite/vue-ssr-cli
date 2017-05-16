
import Vue from 'vue'
import Vuex from 'vuex'
import mod1 from './model1'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    mod1
  }
})
