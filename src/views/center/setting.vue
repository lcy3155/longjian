<template>
	<div id="setting-page">
		<van-nav-bar title="个人资料" fixed left-text="返回" left-arrow @click-left="onClickLeft"  @click-right="onClickRight" style="background-color:rgba(250, 250, 250, 1);">
			<template #right>
				<van-icon name="home-o" size="25" />
			</template>
		</van-nav-bar>
		<!-- 内容 -->
		<van-form @submit="onSubmit" class="setF">
			<van-field v-model="personal.username" label="登录账号" disabled colon  border readonly label-align="right"/>
			<van-field v-model="personal.password" label="登录密码" required colon  border clearable label-align="right"/>
			<van-field v-model="personal.name" label="真实姓名" required colon  border readonly label-align="right"/>
			<van-field v-model="personal.role" label="系统权限" disabled colon  border readonly label-align="right"/>
			<van-field v-model="personal.part" label="所属部门" disabled colon  border readonly label-align="right"/>
			<van-field v-model="personal.phone" label="手机号" name="pattern" :rules="[{ pattern, message: '请输入正确手机号' }]" required colon  border clearable label-align="right"/>
			<van-field v-model="personal.Email" label="E-mail"  colon  border clearable label-align="right"/>
			<van-field name="radio" label="性别" colon  border clearable label-align="right">
				<template #input>
					<van-radio-group v-model="personal.radio" direction="horizontal">
					<van-radio name="1">男 </van-radio>
					<van-radio name="2">女 </van-radio>
					</van-radio-group>
				</template>
			</van-field>
			<van-field name="uploader" label="文件上传" colon  border clearable label-align="right" >
				<template #input>
					<van-uploader v-model="personal.uploader" :after-read="afterRead"/>
				</template>
			</van-field>

			<van-field colon  border clearable label-align="right" name="calendar" :value="personal.birthday" label="生日" placeholder="点击选择日期" @click="personal.showCalendar = true"/>
            <van-calendar :min-date="minDate" :max-date="maxDate" v-model="personal.showCalendar" @confirm="onConfirm" />
			
			<van-field v-model="personal.introduce" rows="2" autosize label="个人介绍" type="textarea" colon border label-align="right" maxlength="50" placeholder="请输入个人介绍" show-word-limit />
		    <div class="submitBtn">
				<van-button round block type="info" native-type="submit" >保存修改</van-button>
			</div>
		
		</van-form>


	</div>
</template>

<script>
import { Dialog,Toast } from 'vant';
	export default {
		name: 'setting',
		components:{
				[Dialog.Component.name]: Dialog.Component,Toast
		},
		data () {
		  return {
			 personal:{
				 username:'13111111111',
				 password:'qwer1234',
				 role:'超级管理员',
				 part:'采购经理',
				 phone:'13111111111',
				 Email:'13111111111',
				 radio: '1',
				 name:'张三',
				 birthday:'',
				 showCalendar: false,
				 uploader: [{ url: 'https://img.yzcdn.cn/vant/leaf.jpg' }],
				 introduce:'采购业务管理者'
			 } ,
			pattern:/^1[3456789]\d{9}$/,//手机号正则
			minDate: new Date(1950, 0, 1),
            maxDate: new Date(2021, 0, 31),
             
		  }
		},
		mounted() {		
			this.personal = this.$store.state.personal;//本地用vuex保存临时信息
		},
		methods:{
			onClickLeft() {
				this.$router.go(-1);
			},
			onClickRight() {
				this.$router.push({path:'/index'})
			},
		    onSubmit(values) {
			   console.log('submit', this.personal);
			   Toast.success('保存个人信息成功');
				this.$router.push({path:'/center'})
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
		}
	}
</script>

<style scoped>
.setF{
	margin-bottom: 90px;
}
.submitBtn{
	position: fixed ;
	left: 0;
	right: 0;
	bottom: 0;
	padding: 15px 25px;
}	
</style>
