
import http from '../../apis/http'
import Api from '../../apis/apis'
import * as types from './types'

export const getIndexData = ({commit},param) =>{
  (async () => {
    let res = await http(Api.getData,'get',{param:JSON.stringify(param)})
    commit(types.GET_INDEX_DATA, res)
  })()
}
