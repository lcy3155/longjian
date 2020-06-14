<template>
  <div class="centerIndex">
    <div class="centerHeader">
      <div class="centerHeader-img">
        <img :src="imgurl" alt="">
        <p>员工ID：{{name}}</p>
      </div>
    </div>
    <!-- url="/setting" -->
    <van-cell title="个人中心" is-link value="编辑" to="/setting" />
    <van-cell title="手机号码" is-link :value="phone" />
    <van-cell title="关于我们" is-link value="龙光建设移动仓库系统" />
   
    <!-- 底部 -->
		<van-tabbar v-model="active" :active-color="color" inactive-color="#000">
			<van-tabbar-item to="/index" icon="home-o">主页</van-tabbar-item>
			<van-tabbar-item to="/server" icon="notes-o">开单</van-tabbar-item>
			<van-tabbar-item icon="completed">审核</van-tabbar-item>
			<van-tabbar-item to="/center" icon="friends-o">我的</van-tabbar-item>
		</van-tabbar>
  </div>
</template>

<script>
 
  export default {
    name: 'cnater',
    components:{
      
    },
    data () {
      return {
          color:"#009688",//主色调颜色
          active: 3,
          imgurl: 'https://img.yzcdn.cn/vant/cat.jpeg',
          name:'000123',
          phone:''
        }
    },
		mounted(){
	  	this.phone =this.$store.state.personal.phone;
    }
  }
</script>
<style scoped>
 .centerHeader{
   width: 100%;
   height: 200px;
   background: #009688;
 }
 .centerHeader-img{
   text-align: center;
   color: #fff;
 }
.centerHeader-img img{
  display: inline-block;
  width: 70px;
  height: 70px;
  border-radius: 50%;
  margin: 35px auto 10px;
  overflow: hidden;
}



</style>
