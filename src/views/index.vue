<template>
	<div class="indexWap">
		<!-- 轮播 -->
		<div class="swipeIndex">
			<van-swipe class="my-swipe"  @change="onChange" indicator-color="white" >
				<van-swipe-item><img src="../assets/images/index/banner2.png" alt=""></van-swipe-item>
				<van-swipe-item><img src="../assets/images/index/banner.png" alt=""></van-swipe-item>
			</van-swipe>
		</div>
		
		<!-- 功能 -->
		<van-cell :title="'今日采购开单/审核：'+title" icon="sign" style="vanCellindex" to="/index">
			<template #right-icon>
				<van-icon name="arrow" style="line-height: inherit;" :color="color" size="25"/>
			</template>
		</van-cell>
		<van-cell :title="'今日材料开单/审核：'+title1" icon="failure" style="vanCellindex" >
			<template #right-icon>
				<van-icon name="arrow" style="line-height: inherit;" :color="color" size="25"/>
			</template>
		</van-cell>
		<van-cell :title="'今日调拨开单/审核：'+title2" icon="balance-list-o" style="vanCellindex">
			<template #right-icon>
				<van-icon name="arrow" style="line-height: inherit;" :color="color" size="25"/>
			</template>
		</van-cell>
		<van-cell title="报表查询入口" icon="todo-list-o" style="vanCellindex">
			<template #right-icon>
				<van-icon name="arrow" style="line-height: inherit;" :color="color" size="25"/>
			</template>
		</van-cell>
		<van-cell title="存货信息类别" icon="send-gift-o" style="vanCellindex">
			<template #right-icon>
				<van-icon name="arrow" style="line-height: inherit;" :color="color" size="25"/>
			</template>
		</van-cell>

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
    // import { Tabbar, TabbarItem,NavBar  } from 'vant';
	export default {
		name: 'index',
		components: {
			// Tabbar, TabbarItem,NavBar
		},
		data() {
			return {
				color:"#009688",//主色调颜色
				current: 0,
				active: 0,
			    title:'1000',
				title1:'1000',
				title2:'12'
			}
		},
		mounted() {
			

		},
		methods: {
			 onChange(index) {
				console.log(index)
				this.current = index;
			},
			
   
		},
		
	}
</script>
<style scoped="scoped">
 .van-nav-bar__title{
	margin: 1;
	padding-left: 55px;
}
 .swipeIndex{
	padding: 10px 10px 20px;
	margin-bottom: 10px;
	border-bottom: 1px solid #eee;
	box-sizing: border-box;
  }
  .van-swipe{
	box-sizing: border-box;
  }
 .my-swipe .van-swipe-item {
	 font-size: 0;
  }	
   .my-swipe .van-swipe-item img{
	   display: inline-block;
	   width: 100%;
	   height: auto;
	   border-radius: 5px;
   }
   .van-cell__left-icon{
	   color:#009688;
	   font-size: 21px;
   }
   .van-cell{
	   font-size: 15px;
   }
</style>
