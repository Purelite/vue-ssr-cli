

import * as types from './types'

export const  mutations = {
 [types.GET_INDEX_DATA](state, data){
    state.indexData = data.list
    console.log(state)
  }
}
