<template>
	<div class="loginwap">
		<div class="header"> 
			<a class="logo" href="/" title=""> <img src="http://116.62.174.255:88/theme/default/images/logo.png"> </a>
			<p>用户登录</p>
		</div>
		<van-form @submit="onSubmit">
			<van-field
				v-model="username"
				name="用户名"
				label="用户名"
				placeholder="用户名"
				:rules="[{ required: true, message: '请填写用户名' }]"
			/>
			<van-field
				v-model="password"
				type="password"
				name="密码"
				label="密码"
				placeholder="密码"
				:rules="[{ required: true, message: '请填写密码' }]"
			/>
			<div style="margin: 50px 15px;">
				<van-button round block type="info" native-type="submit" color="#009688" >
				登录
				</van-button>
			</div>
		</van-form>
	</div>
</template>

<script>

import { Dialog,Toast } from 'vant';
	export default {
		name: 'login',
		components: {
				[Dialog.Component.name]: Dialog.Component,Toast
		},
		data() {
			return {
				 username: '',
				 password: '',
				 usernamel:'',
				 passwordl: '',
			}
		},
		mounted() {
			this.usernamel = this.$store.state.personal.username;
			this.passwordl = this.$store.state.personal.password;
			
		},
		methods: {
			
			onSubmit() {

				let self = this;
				if(self.username !== self.usernamel || self.password !== self.passwordl) {
					Toast.fail('账号号和密码不正确');
					return false;
				}else{
					Toast.success('登录成功');
				}
				
				self.$router.push({
				    path: '/index'
				});

				const  postData = {
						mobile:self.username,
				         password:self.password
				}
 
				self.$axios.post('/login/user',postData).then((res) => {
				      	 if(res.data.code == 200){ //登录成功
						 
                        //   self.$router.push({
				      	//  		path: '/index'
						// 	   });
						 }
				      	  else {
					          self.$weui.topTips(res.data.msg);
					          return false;
				          }
				       }).catch(function(err){

				       })
			},
		}	
	}
	
</script>

<style scoped>
.loginwap{
	position: fixed;
	left: 0;
	top: 0;
	right: 0;
	bottom: 0;
	background: #00bcd4;
	padding: 1.5rem;
}
.header{
	text-align: center;
    margin-bottom: 1em;
}
.header .logo {
    max-height: 80px;
    display: block;
    text-align: center;
    margin: 20px 0 10px 0;
}
.header .logo img {
    max-width: 300px;
    max-height: 80px;
}
.loginInput{
	border-radius: 0.5rem;
	overflow: hidden;
	margin-bottom: 2rem;
}
.loginInput a:nth-child(1){
	border-bottom: 1px solid #DDE3E8;
}

</style>

