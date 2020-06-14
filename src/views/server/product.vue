<template>
	<div class="callCenterWap">
		<van-nav-bar title="产品" fixed left-arrow @click-left="onClickLeft"  @click-right="onClickRight" style="background-color:rgba(250, 250, 250, 1);">
            <template #right>
				<van-icon name="home-o" size="25" />
			</template>
		</van-nav-bar>
        <!-- <div class="findtipWap"><div class="Findtip">1单击选中客户</div></div> -->
        <div class="customerList">
            <table border="1" cellpadding="0" cellspacing="0" align="center" class="Informationbox">
                <thead>
                    <tr>
                        <th>序号</th>
                        <th>产品名称</th>
                        <th>销售单价</th>
                        <th>数量</th>
                        <th>折扣</th>
                        <th>商品总金额</th>
                        <th>业务员</th>
                        <th>录入时间</th>
                        <th>管理</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(item,index) in data" :key="index" >
                        <td>{{index+1}}</td>
                        <td>{{item.name}}</td>
                        <td>{{item.salesPrice}}</td>
                        <td>{{item.goods}}</td>
                        <td>{{item.discountPrice}}</td>
                        <td>{{item.salesman}}</td>
                        <td>{{item.role}}</td>
                        <td>{{item.newT}}</td>
                        <td>
                            <button class="callBtn1"  type="primary" @click="path_callBtn1(item.id)">修改</button>
                            <button class="callBtn2"  type="primary" @click.stop="path_callBtn2(item.id)">删除</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

         <div class="callsebtn">
			<van-button color="#49B377" @click="path_added">新增</van-button>
			<van-button color="#505050" @click="path_cancel">取消</van-button>
		</div>
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
				data:[
					{
						id:'1',
						General :'大类名称1',
						Subclass:'小类名称1',
						name:'产品名称1',
						Specifications:'规格1',
						modela:'型号1',
						InventoryAlarm:'100',
						goods:"100",
						costPrice:"12",
						salesPrice:"20",
						numberL:"99",
						discountPrice:'99',
						introduce:'备注信息1',
					    totalPrice:"99999999",
						checked:false,
						newT:'2019/12/1',
						role:'超级管理员'
					},
				]
			}
		},
		created(){},
		mounted(){},
        methods:{
			onClickLeft() {
				this.$router.push({path:'/callCenter'})
			},
			onClickRight() {
				this.$router.push({path:'/index'})
			},
			// click_path(id,index){
			// 	let _that= this;
			// 	this.data[index].checked =true;
			// 	console.log('客户id跳修改页',id)
			// 	setTimeout(function () {
			// 		_that.$router.push({path:'/playCenter'});
			// 	}, 300);
			// },
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
			},
			path_added(){
                	this.$router.push({path:'/SyntCenter'})
            },
            path_cancel(){
                this.$router.go(-1);
			},
			
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
.callsebtn{
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    justify-content:space-around;
    padding: 10px;
}
.callsebtn button{
    width: 35%;
}
</style>
