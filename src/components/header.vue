<template>
 <div class="header">
   <div class="page centre">
     <div class="page-hd">
       <div class="header bor-1px-b">
         <div class="header-left">
           <a href="javascript:history.go(-1)" class="left-arrow"></a>
         </div>
         <div class="header-title">{{title}}</div>
         <div class="header-right">
           <a href="#"></a>
         </div>
       </div>
     </div>
 </div>
   </div>
</template>

<script>
  export default {
    name: 'headers',
    props:["title"],
    data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
</style>
