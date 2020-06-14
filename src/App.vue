<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
.weui-toptips_warn {
     background-color: rgba(0,0,0,.6);
}
.weui-toptips{
	margin:0 auto;
	max-width:170px;
	padding:10px;
	top:70%;
	border-radius:10px;
}
</style>
