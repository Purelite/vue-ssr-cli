 
import axios from 'axios'

let http = axios.create({
  withCredentials: false
})

http.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded; charset=UTF-8'

function _http(url, method, data){
  return http({url:url,method:method,params:data}).then((response) => {
      if(Number(response.data.status.status_code) === 0){
        return response.data.result
      }else{
        console.log(response.data.status.status_code)
      }
  }, (response) => {
      console.log('接口错误',response)
  })
}

export default _http


