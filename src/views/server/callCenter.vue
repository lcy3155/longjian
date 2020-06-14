<template>
	<div class="callwap">
		<van-nav-bar title="订单管理" fixed left-arrow @click-left="onClickLeft"  @click-right="onClickRight" style="background-color:rgba(250, 250, 250, 1);">
            <template #right>
				<van-icon name="bars" size="25" />
			</template>
		</van-nav-bar>

        <!-- 列表 -->
		<div class="callList">
			<ul>
				<li v-for="(item,index) in list" :key="index">
					<h5>客户名称：{{item.name}}</h5>
					<div class="callListCan">
						<span>联系人：{{item.contacts}}<a :href="'tel:' + item.phone"><van-icon name="phone" /></a></span>
						<span>下单日期：{{item.place}}</span>
						<span>交单日期：{{item.Presentation}}</span>
						<span>预付款：{{item.advance }}</span>
						<span>订单金额：{{item.Order }}</span>
						<span>状态：<button type="primary" @click="path_gameCenter(index)" :class="{ 'button1': item.StatusLi =='1', 'button2': item.StatusLi =='2' ,'button3': item.StatusLi =='3'}">{{item.StatusL}}</button></span>
						<span>业务员：{{item.salesman}}</span>
						<span>录入时间：{{item.entryTime}}</span>
						<!-- <span>附件：{{item.enclosureUrl}}</span> -->
						<p>附件：<button type="primary" @click="path_helpCenter(index)">无附件</button></p>
						<p class="callBtnWap">
							<button class="callBtn1"  type="primary" @click="path_callBtn1"><van-icon name="plus" /></button>
							<button class="callBtn2"  type="primary" @click="path_callBtn2">产品</button>
							<button class="callBtn3"  type="primary" @click="path_callBtn3(index)">修改</button>
							<button class="callBtn4"  type="primary" @click="path_callBtn4(index)">删除</button>
							(编号:{{item.id}})
						</p>
					</div>
				</li>
			</ul>
		</div>
		<!-- 分页 -->
		<van-pagination
			v-model="currentPage"
			:total-items="125"
			:show-page-size="3"
			force-ellipses
			@change="vanaPagination"
			/>
		<!-- 添加 -->
		<div class="addedWap"  @click="click_added()">
		    <van-icon class="vanallIc" :class="{'activeIc':addedShow}" name="http://116.62.174.255:88/theme/m/images/plug.png"/>
            <ul v-show="addedShow">
				<li><van-button icon="add" type="primary" @click.stop="path_packageCenter()">&nbsp;&nbsp;&nbsp;新增订单 </van-button></li>
				<li><van-button icon="setting" type="primary" color="#DE8324" @click.stop="path_custom()">自定义设置</van-button></li>
				<li><van-button icon="home-o" type="primary" color="#007aff" @click.stop="path_index()">&nbsp;&nbsp;&nbsp;系统主页 </van-button></li>
			</ul>
		</div>

		<!-- 右侧弹出搜索 -->
		<van-popup v-model="show" position="right" :style="{ width: '70%',height: '100%' }" >
			<van-search v-model="valueSearch" placeholder="请输入搜索关键词" />
			<van-row type="flex" justify="space-around" class="callsebtn">
				<van-button color="#49B377" @click="path_search">立即搜索</van-button>
				<van-button color="#505050" @click="path_cancel">清空条件</van-button>
			</van-row>
		</van-popup>
	</div>
</template>

<script>
import { Dialog,Toast } from 'vant';
	export default {
		name: 'callCenter',
		components: {
				[Dialog.Component.name]: Dialog.Component,Toast
		},
		data() {
			return {
				list:[],
				show:false,
				valueSearch:'',
				fileList: [
					// Uploader 根据文件后缀来判断是否为图片文件
					// 如果图片 URL 中不包含类型信息，可以添加 isImage 标记来声明
					// { url: 'https://cloud-image', isImage: true },
				],
				currentPage:1,//当前页
				addedShow:false,
			}
		},
		mounted() {		
			this.list = this.$store.state.list;//本地用vuex保存临时信息
			console.log(this.list)
		},
		methods:{
			onClickLeft() {
				// this.$router.go(-1);
				this.$router.push({path:'/server'})
			},
			onClickRight() {
				this.show = true;
			},
		    onSubmit(values) {
			   console.log('submit', this.personal);
			},
			 afterRead(file) {
			// 此时可以自行将文件上传至服务器
			console.log(file);
			},
			onConfirm(date) {
				console.log(date)
				this.personal.birthday = `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`;
				this.personal.showCalendar = false;
			},
			path_callBtn1(){
				this.$router.push({path:'/SyntCenter'})
			},
			path_callBtn2(){
				 this.$router.push({path:'/product'})
			},
			path_callBtn3(item){
				// this.$router.push({path:'/sellCenter'})
				this.$router.push({path:'/sellCenter',query:{id:item}}); 
			},
			path_callBtn4(id){
				console.log('删除');
				Dialog.confirm({
					title: '系统提示',
					message: '您确定要删除？',
				})
				.then(() => {
					this.$store.state.list.splice(id,1);
					Toast.success('删除成功');
					console.log('删除成功')
				})
				.catch(() => {
					console.log('取消删除')
				});
			},
			path_search(){
				 this.show = false;
				 this.valueSearch = '';
			},
			path_cancel(){
				 this.show = false;
				 this.valueSearch = '';
			},
			vanaPagination(res){
				console.log('分页',res)
			},
			click_added(){
				console.log('打开按钮')
				if(!this.addedShow ){
					this.addedShow = true;
				}else{
                    this.addedShow = false;
				}
			},
			path_packageCenter(){
				this.$router.push({path:'/packageCenter'});
			},
			path_custom(){
				alert('暂未开通')
			},
			path_index(){
				alert('暂未开通')
			},
			path_gameCenter(item){
				console.log(item)
				this.$router.push({path:'/gameCenter',query:{id:item}}); 
			},
			path_helpCenter(item){
				this.$router.push({path:'/helpCenter',query:{id:item}}); 
			},
			
		}
	}
</script>
<style scoped>
.callwap{
	padding-top: 45px;
}
.callList{
	padding-bottom: 100px;
}
.callList ul li{
	border-top: 10px solid #eee;
}
.callList ul li h5{
    height: 45px;
    line-height: 45px;
    border-bottom: 1px dotted #ddd;
    padding-left: 10px;
    font-size: 16px;
    color: #555;
    font-weight: bold;
}
.callListCan{
	padding-left: 10px;
	overflow: hidden;
	padding-bottom: 5px;
}
.callListCan span{
	float: left;
	width: 50%;
	line-height: 30px;
	font-size: 14px;
}
.callListCan span a>i{
	margin-left: 5px;
	font-size: 17px;
	color: #7bd706;
}
.callListCan span button{
	height: 30px;
	color: #fff;
	padding: 0 5px;
}
.button1{
	background: #096;
	border: 1px solid #096;
}
.button2{
	background: #D7880D;
	border: 1px solid #D7880D;
}
.button3{
	background: #e0405a;
	border: 1px solid #e0405a;
}
.callListCan span button a{
	color: #fff;
}
.callListCan p{
	float: left;
	width: 100%;
	line-height: 30px;
	font-size: 14px;
}
.callListCan p button{
	height: 30px;
	background: #eee;
	border: 1px solid #eee;
	color: #fff;
	padding: 0 5px;
}
.callBtnWap{
	height: 40px;
}
.callBtnWap button{
	margin: 5px 3px;
}
.callBtnWap .callBtn1{
	background: #eee;
	border: 1px solid #eee;
	color: #000;
}
.callBtnWap .callBtn1 i{
	font-weight: bold;
}
.callBtnWap .callBtn2{
	background: #24AABB;
	border: 1px solid #24AABB;
}
.callBtnWap .callBtn3{
	background: #1874B6;
	border: 1px solid #1874B6;
}
.callBtnWap .callBtn4{
	background: #CA2736;
	border: 1px solid #CA2736;
}
.callsebtn{
	margin-top: 30px;
}
.van-pagination{
	width: 100%;
	position: fixed;
	bottom: 20px;
	left: 50%;
	transform:translateX(-50%);
	background: #eee;
}
.addedWap{
    position: fixed;
	right: 30px;
	bottom: 100px;
}
.vanallIc{
	font-size: 30px;
	background-color: #B70000;
	border-radius: 36px;
	border: 5px solid #e0dbdb;
	transition: 0.3s;
}
.activeIc{
	transform: rotate(135deg);
	border: 5px solid #B70000;
}
.addedWap ul{
	position: absolute;
	bottom: 50px;
	right: 0;
	width: 135px;
}
.addedWap ul li{
	margin: 15px 0;
}
.addedWapbtn{
	background: #24AABB;
	border: 1px solid #24AABB;
}

</style>
