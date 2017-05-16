<template>
  <div class="test">
    <h1>this is home</h1>
    <div class="btn" @click="ajaxtest">
      ajax text
    </div>
    <ul>
      <li v-for="item in list">{{item.category_name}}</li>
    </ul>
  </div>
</template>
<script>
  import Api from '../apis/apis.js'
  import http from '../apis/http.js'

  export default {
    data(){
      return {
        list:[]
      }
    },
    preFetch (store) {
      return store.dispatch('getIndexData',{page: 1, page_size: 10})
    },
    methods:{
      ajaxtest(){
        (async() => {
          let res = await http(Api.getData, 'get', {param:JSON.stringify({page: 1, page_size: 10})})
          this.list = res.list
        })()
      }
    },
    created(){
      (async() => {
        let res = await http(Api.getData, 'get', {param:JSON.stringify({page: 1, page_size: 10})})
        this.list = res.list
      })()
    }
  }
</script>
<style  lang="stylus" scoped>
  .test{
    text-align: center;
    .btn{
      margin: 0 auto;
      padding:20px;
      width:300px;
      line-height:36px;
      background:#E2001E;
      color:#fff;
    }
  }
</style>
