<template>
	<div class="page">
		<headers title="注册"></headers>
		<div class="page-bd login">
			<!-- 页面内容 -->
			
			<div class="top registertop">
				<img class="logo" src="../../assets/images/logoimg.jpg" alt="" />
				<p>水晶之恋</p>
			</div>

			<div class="weui-cells weui-cells_form">
				<!-- 我加的开始 -->
				<div class="weui-cell">
					<div class="weui-cell__bd">
						<input class="weui-input fs28 fw_b code" type="text" placeholder="请输入昵称" v-model='reg.names' />
					</div>
				</div>
				<div class="weui-cell">
					<div class="weui-cell__bd">
							<input class="weui-input fs28 fw_b mobile" v-model='reg.mobile' type="text" maxlength="11" id="mobile" placeholder="请输入手机号" />
					</div>
				</div>
				<div class="registerwap">
					<div class="weui-cell">
						<div class="weui-cell__bd">
							<input class="weui-input fs28 fw_b code" type="text" placeholder="请输入验证码" v-model='reg.code'>
						</div>
					</div>
					<div class="weui-cell__bd_right" id="btnSendCode" @click="sendMessage">
						<span v-if="sendMsgDisabled">{{time+'秒'}}</span>
						<span v-if="!sendMsgDisabled" class="fs22" style="text-decoration:underline">获取验证码</span>
					</div>
				</div>
				<div class="weui-cell">
					<div class="weui-cell__bd">
						<input class="weui-input fs28 pwdInput fw_b password"  :type="see?'password':'text'" placeholder="登陆密码" v-model='reg.password' />
					</div>
					<div class="weui-cell__ft" @click="see = !see">
						<img src="../../assets/images/ere_no.png" v-if="see" data-style="no" alt="" class="ereimg">
						<img src="../../assets/images/ere_off.png" v-if="!see"  data-style="no" alt="" class="ereimg">
					</div>
				</div>
				<div class="weui-cell">
					<div class="weui-cell__bd">
						<input class="weui-input fs28 pwdInput fw_b paypwd" maxlength="6"  :type="see2?'password':'text'"  placeholder="交易密码" v-model='reg.paypwd' />
					</div>
					<div class="weui-cell__ft" @click="see2 = !see2">
						<img src="../../assets/images/ere_no.png" v-if="see2" data-style="no" alt="" class="ereimg">
						<img src="../../assets/images/ere_off.png" v-if="!see2"  data-style="no" alt="" class="ereimg">
					</div>
				</div>
				<div class="weui-cell">
					<div class="weui-cell__bd">
						<input class="weui-input fs28 fw_b invite" type="text" readonly placeholder="请输入推荐码" v-model='reg.inviteUserMobile' />
					</div>
				</div>
				<div class="Box pwd">
					<input type="checkbox"  checked name="" value="1" class="remember_pwd" id="" style="margin-right: 0.05rem;">
					<span class="fs24 color_9">注册即同意用户协议</span>
				</div>
			
				<!-- 我加的结束 -->
				

				<!-- <div class="Box pwd"><span class="fs24 color_9">手机号</span></div>
				<div class="weui-cell">
					<div class="weui-cell__bd">
						<p><input class="weui-input fs28 fw_b mobile" v-model='reg.mobile' type="text" id="mobile" placeholder="请输入手机号" style="width:60%;padding:5px;" />
							<button class="send" id="btnSendCode" @click="sendMessage">
                	            <span v-if="sendMsgDisabled">{{time+'秒'}}</span>
                                 <span v-if="!sendMsgDisabled">发送验证码</span>
                           </button>
						   </p>

					</div>
					<div class="weui-cell__ft"></div>
				</div>

				<div class="Box pwd"><span class="fs24 color_9">验证码</span></div>
				<div class="weui-cell">
					<div class="weui-cell__bd">
						<input class="weui-input fs28 fw_b code" type="text" placeholder="请输入验证码" v-model='reg.code' />
					</div>
				</div>

				<div class="Box pwd"><span class="fs24 color_9">邀请人</span></div>
				<div class="weui-cell">
					<div class="weui-cell__bd">
						<input class="weui-input fs28 fw_b invite" type="text" readonly placeholder="请输入邀请人" v-model='reg.inviteUserMobile' />
					</div>
				</div>

				<div class="Box pwd"><span class="fs24 color_9">密码</span></div>
				<div class="weui-cell">
					<div class="weui-cell__bd">
						<input class="weui-input fs28 pwdInput fw_b password"  :type="see?'password':'text'" placeholder="请输入密码" v-model='reg.password' />
					</div>
					<div class="weui-cell__ft" @click="see = !see">
						<img src="../../assets/images/ere_no.png" v-if="see" data-style="no" alt="" class="ereimg">
						<img src="../../assets/images/ere_off.png" v-if="!see"  data-style="no" alt="" class="ereimg">
					</div>
				</div>
				<div class="Box pwd"><span class="fs24 color_9">确认密码</span></div>
				<div class="weui-cell">
					<div class="weui-cell__bd">
						<input class="weui-input fs28 pwdInput fw_b confirm_password" :type="see1?'password':'text'" placeholder="请输入密码" v-model='password1' />
					</div>
					<div class="weui-cell__ft" @click="see1 = !see1">
						<img src="../../assets/images/ere_no.png" v-if="see1" data-style="no" alt="" class="ereimg">
						<img src="../../assets/images/ere_off.png" v-if="!see1"  data-style="no" alt="" class="ereimg">
					</div>
				</div>

				<div class="Box pwd"><span class="fs24 color_9">二级密码</span></div>
				<div class="weui-cell">
					<div class="weui-cell__bd">
						<input class="weui-input fs28 pwdInput fw_b paypwd" maxlength="6"  :type="see2?'password':'text'"  placeholder="请输入六位数字" v-model='reg.paypwd' />
					</div>
					<div class="weui-cell__ft" @click="see2 = !see2">
						<img src="../../assets/images/ere_no.png" v-if="see2" data-style="no" alt="" class="ereimg">
						<img src="../../assets/images/ere_off.png" v-if="!see2"  data-style="no" alt="" class="ereimg">
					</div>
				</div>
				<div class="Box pwd"><span class="fs24 color_9">确认二级密码</span></div>
				<div class="weui-cell">
					<div class="weui-cell__bd">
						<input class="weui-input fs28 pwdInput fw_b confirm_paypwd" :type="see3?'password':'text'" placeholder="请输入二级密码" v-model='payword1' />
					</div>
					<div class="weui-cell__ft" @click="see3 = !see3">
						<img src="../../assets/images/ere_no.png" v-if="see3" data-style="no" alt="" class="ereimg">
						<img src="../../assets/images/ere_off.png" v-if="!see3"  data-style="no" alt="" class="ereimg">
					</div>
				</div> -->

			</div>
			<div class="butBox" >
				<div class="but" @click.stop.prevent="register">注&nbsp;册</div>
			</div>
			<div class="butBox">
				<a class="registerA" href="https://fir.im/nr8h">点击下载APP</a>
			</div>
			<!--https://xz.52kj.wang/sjzl/ https://fir.im/nr8h <a @click="login" class="findpwd fw_b fs26 color_r">已注册？登录</a> -->
		</div>
	</div>
</template>

<script>
	import headers from '../../components/header'

	export default {
		name: 'login',
		components: {
			headers
		},
		data() {
			return {
				sendMsgDisabled: false,
				time: 60,
				see:true,
				see1:true,
				see2:true,
				see3:true,
				reg: {
					names:'',//用户昵称
					mobile: '',
					inviteUserMobile: '',
					code: '',
					password: '',
					paypwd: '',
				},
				password1: '',
				payword1: '',
				validate: true //验证通过
			}
		},
		mounted() {
			this.reg.inviteUserMobile=this.$route.params.mobile|| ''
		},
		methods: {
			login() {
				this.$router.push({
					path: '/login'
				});
			},
			register() {
				let self = this;
				self.check();
				if(self.validate) {
					let params = self.reg
					self.$axios.post('/login/save', params).then((res) => {
						if(res.data.code == 200){
							self.$weui.toast('注册成功',1000)
							self.login()
						}
						 else {
					          self.$weui.topTips(res.data.msg);
					          return false;
				          }
					})

				 }
			},
			check() {
               let self = this;
               self.validate = true
				var reg2 = /^1[34578]\d{9}$/;
				var reg1=/^[0-9]+$/; //输入纯数字
				if(self.reg.mobile == '') {
					self.$weui.topTips('请输入手机号码');
					self.validate = false;
					return false;
				}
				if(!reg1.test(self.reg.mobile)) {
					self.$weui.topTips('请输入正确手机号码');
					self.validate = false;
					return false;
				}
				if(self.reg.mobile.length < 11){
					self.$weui.topTips('请输入正确手机号码');
					self.validate = false;
					return false;
				}
				if(self.reg.code == '') {
					self.$weui.topTips('请输入验证码');
					self.validate = false;
					return false;
				}

				if(self.reg.password == '') {
					self.$weui.topTips('密码不能为空');
					self.validate = false;
					return false;
				}

				if(self.reg.password.length < 6){
					self.$weui.topTips('密码不能少于6位');
					self.validate = false;
					return false;
				}

				if(!reg1.test(self.reg.paypwd) || self.reg.paypwd.length < 6){
                    self.$weui.topTips('二级密码是6位数字');
					self.validate = false;
					return false;
				}
				// if(self.reg.paypwd == '' || self.reg.payword1 == '' || self.reg.paypwd != self.payword1) {
				// 	self.$weui.topTips('二级密码不一致或为空');
				// 	self.validate = false;
				// 	return false;
				// }

			},
			sendMessage() {
				let self = this;
				var reg2 = /^1[34578]\d{9}$/;
				var reg1=/^[0-9]+$/; //输入纯数字
				if(self.reg.mobile == '') {
					self.$weui.topTips('请输入手机号码');
					return false;
				} else if(!reg1.test(self.reg.mobile)) {
					self.$weui.topTips('请输入正确手机号码');
					return false;
				}else if(self.reg.mobile.length < 11){
					self.$weui.topTips('请输入正确手机号码');
					return false;
				}

				if(self.sendMsgDisabled == false) {
					//倒计时
					self.sendMsgDisabled = true;
					window.clearInterval(interval);
					let interval = window.setInterval(function() {
						if((self.time--) <= 1) {
							self.time = 60;
							self.sendMsgDisabled = false;
							window.clearInterval(interval);
						}
					}, 1000);
					//发送注册短信
					let params = {
						mobile:self.reg.mobile,
						msgTplCode: '1'
					}
					self.$axios.get('/msg/send', {
						params: params
					}).then((res) => {
						if(res.data.code == 200) {
                   self.$weui.toast('验证码已发送',1000)
						}
						else{
							self.$weui.topTips(res.data.msg);
						}

					})
				}

			}
		}
	}
</script>
<style>
	
</style>
