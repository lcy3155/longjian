<template>
  <div>
    <van-grid :column-num="3" >
      <van-grid-item icon="column" text="订单管理" to="/callCenter" icon-size="30px"  class="serverNav"/>
      <van-grid-item icon="bill" text="采购入库开单" to="/callCenter"/>
      <van-grid-item icon="invition" text="采购入库审核" to="/callCenter"/>
    </van-grid>
    
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
    name: 'server',
    components:{
      
    },
    data () {
      return {
        color:"#009688",//主色调颜色
				active: 1,
      }	
  },
  mounted() {
			
		},
  methods: {
      link_Cus(){
      },
    
    }
  }
</script>


<style scoped>
.van-grid-item__icon{
  color: #64c574;
}
</style>
