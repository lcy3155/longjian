<template>
	<div class="callCenterWap">
		<van-nav-bar title="新增订单页" fixed left-arrow @click-left="onClickLeft"  @click-right="onClickRight" style="background-color:rgba(250, 250, 250, 1);">
            <template #right>
				<van-icon name="home-o" size="25" />
			</template>
		</van-nav-bar>
        
		<!--  -->
		<van-tabs v-model="active" color="#1989fa">
			<van-tab title="客户列表">
				<div class="findtipWap"><div class="Findtip">1单击选中客户 >> 2录入信息</div></div>
				<div class="customerList">
                    <table border="1" cellpadding="0" cellspacing="0" align="center" class="Informationbox">
                        <thead>
                            <tr>
                                <th width="50" >单选</th>
                                <th>客户名称</th>
                                <th>联系人</th>
                                <th>手机号</th>
                                <th>业务员</th>
                                <th>操作</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(item,index) in data" :key="index" @click="click_path(item.id,index)">
                                <td>
                                    <div class="checkbox checkbox-primary">
                                        <input id="item.id" type="checkbox" v-model="item.checked" >
                                    </div>
                                </td>
                                <td>{{item.name}}</td>
                                <td>{{item.contacts}}</td>
                                <td>{{item.phone}}</td>
                                <td>{{item.salesman}}</td>
                                <td>
									<button class="callBtn1"  type="primary" @click="path_callBtn1(item.id)">修改</button>
									<button class="callBtn2"  type="primary" @click.stop="path_callBtn2(item.id)">删除</button>
								</td>
                            </tr>
                        </tbody>
                    </table>
				</div>
			</van-tab>
			<van-tab title="今日新增">今日新增 2</van-tab>
			<van-tab title="本周新增">本周新增 3</van-tab>
			<van-tab title="本月新增">本月新增 4</van-tab>
		</van-tabs>

		<!-- 分页 -->
		<van-pagination
			v-model="currentPage"
			:total-items="125"
			:show-page-size="3"
			force-ellipses
			@change="vanaPagination"
			/>
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
				currentPage:1,//当前页
				active:'1',
				data:[
					// {
					// 	id:'1',
					// 	name:'客户1',
					// 	contacts:'李总',
					// 	phone:'13112312141',
					// 	salesman:'管理员',
					// 	checked:false,
					// },
					// {
					// 	id:'2',
					// 	name:'客户2',
					// 	contacts:'张总',
					// 	phone:'13112312141',
					// 	salesman:'超级管理员',
					// 	checked:false,
					// },
				],
			}
		},
		created(){},
		mounted(){
			this.data = this.$store.state.data;//本地用vuex保存临时信息
		},
        methods:{
			onClickLeft() {
				// this.$router.go(-1);
				this.$router.push({path:'/callCenter'})
			},
			onClickRight() {
				this.$router.push({path:'/index'})
			},
			vanaPagination(res){
				console.log('分页',res)
			},
			click_path(id,index){ 
				let _that= this;
				this.data[index].checked =true;
				console.log('客户id跳修改页',id)
				setTimeout(function () {
					_that.$router.push({path:'/playCenter',query:{id:index}}); 
				}, 300);
			},
			path_callBtn1(id){
				console.log('修改',id)
			},
			path_callBtn2(id){
				console.log('删除',id)
				Dialog.confirm({
					title: '系统提示',
					message: '您确定要删除？',
				})
				.then(() => {
					console.log('删除成功')
					Toast.success('删除成功');
				})
				.catch(() => {
					console.log('取消删除')
				});
			}
			
		} ,
		//页面销毁
		destroyed(){
			
		},
        
	}
</script>
<style scoped>
.callCenterWap{
    padding-top: 45px;
}
.van-pagination{
	width: 100%;
	position: fixed;
	bottom: 20px;
	left: 50%;
	transform:translateX(-50%);
	background: #eee;
}
.findtipWap{
	padding: 10px 0;
}
.Findtip {
    margin: 0 auto;
    width: 220px;
    border: 1px dashed #ccc;
    line-height: 25px;
    text-align: center;
    font-size: 14px;
    color: red;
    font-weight: bold;
}
.customerList{
	width: 100%;
    border-collapse: collapse;
    table-layout: fixed;
    word-break: break-all;
	padding: 0 10px;
}

.Informationbox {
    width: 700px;
    border: 1px solid #ddd;
    border-collapse: collapse;
    table-layout: fixed;
    word-break: break-all;
}
.callBtn1{
	padding: 0 5px;
	color: #fff;
	background: #1874B6;
	border: 1px solid #1874B6;
}
.callBtn2{
	padding: 0 5px;
	color: #fff;
	background: #CA2736;
	border: 1px solid #CA2736;
}
td{
	text-align: center;
}
</style>
