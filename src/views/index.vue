<template>
  <div class="test">
  <router-link :to="{path:'home'}"> 
    <img src="../assets/logo.png">
  </router-link> 
   index
   <span>
     color text
   </span>
   <div v-for="item in user">{{item.category_id}}{{item.category_name}}</div>
  </div>
</template>
<script>
  function fetchData(store){
    return store.dispatch('getIndexData',{page: 1, page_size: 10})
  }
  export default {
    preFetch: fetchData,
    computed: {
      user(){
        return this.$store.state.mod1.indexData
      }
    },
    beforeMount () {
      //fetchData(this.$store)
    }
  }
</script>
<style rel="stylesheet/stylus" lang="stylus" scoped>
  .test{
    padding:40px;
    font-size: 36px;/*px*/
    span{
        color:#E2001E
      }
    }
    img{
      width:100px;
      height:100px;
      display:block;
      margin: 0 auto;
    }

</style>
