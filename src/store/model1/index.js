
import * as actions from './actions'
import * as getters from './getters'
import * as types from './types'
import {mutations} from './mutations'
const state = {
  indexData:[]
}

/*const mutations = {
  [types.GET_INDEX_DATA](state, data){
    state.indexData = data.list
  }
}*/

export default {
  state,
  actions,
  getters,
  mutations
}
