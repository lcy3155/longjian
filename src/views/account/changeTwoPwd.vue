<template>
  <div class="page verify">
  	 <headers title="修改二级密码"></headers>
     <!-- 页面内容 -->
        <div class="fromBox">
        
          <div class="weui-cells__title color_3 fw_b fs28">验证码</div>
            <div class="weui-cells weui-cells_form">
              <div class="weui-cell">
                <div class="weui-cell__bd">
                  <input class="weui-input fs28 fw_b code" type="text" minlength="6" maxlength="6" placeholder="请输入验证码"  v-model="yzm"/>
                </div>
               <p><button  class="send" id="btnSendCode" @click="sendMessage">
               <span v-if="sendMsgDisabled">{{time+'秒'}}</span>
               <span v-if="!sendMsgDisabled">获取验证</span>
               </button></p>
              </div>
            </div>
            <div class="weui-cells__title fs28 color_3 fw_b">新密码</div>
            <div class="weui-cells weui-cells_form">
              <div class="weui-cell">
                <div class="weui-cell__bd">
                  <input class="weui-input fs28 fw_b new_password" :type="see?'password':'text'"  minlength="6" maxlength="6" placeholder="请输入六位数字的二级密码"  v-model="newpwd"/>
                </div>
				<!-- <div class="weui-cell__ft ereImg"><img src="../../assets/images/ere_no.png" data-ere="no" alt=""></div> -->
				<div class="weui-cell__ft" @click="see = !see">
					<img src="../../assets/images/ere_no.png" v-if="see" data-style="no" alt="" class="ereimg">
					<img src="../../assets/images/ere_off.png" v-if="!see"  data-style="no" alt="" class="ereimg">
				</div>
              </div>
            </div>
            <div class="weui-cells__title fs28 color_3 fw_b">确认密码</div>
            <div class="weui-cells weui-cells_form">
              <div class="weui-cell">
                <div class="weui-cell__bd">
                  <input class="weui-input fs28 fw_b confirm_password" :type="seel?'password':'text'"  minlength="6" maxlength="6"  placeholder="请再次输入新二级密码" v-model="newpwdConfirm"/>
                </div>
                <div class="weui-cell__ft" @click="seel = !seel">
					<img src="../../assets/images/ere_no.png" v-if="seel" data-style="no" alt="" class="ereimg">
					<img src="../../assets/images/ere_off.png" v-if="!seel"  data-style="no" alt="" class="ereimg">
				</div>
              </div>
            </div>
        </div>

        <div class="butBox"><div class="but" @click="submitTwoPsd">提交</div></div>

      </div>
</template>

<script>
	import headers from '../../components/header'
  export default {
    name: 'changePwd',
    components:{
      headers
    },
    data () {
			return {
				see:true,
				seel:true,
				yzm: '',
				newpwd:'',
				newpwdConfirm:'',
				sendMsgDisabled: false,
				time: 60
			}
		},
		methods:{
			sendMessage(){
				let self=this;
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
					let params = {
						mobile:localStorage.mobile,
						msgTplCode:'6'
					};
					self.$axios.get('/msg/send',{params:params}).then((res) => {
						if(res.data.code == 200) {
								self.$weui.toast('验证码已发送',1000)
								
						}
						else{
							self.$weui.topTips(res.data.msg);
						}

						}).catch((error) => {
						
						})
				}	
				
			},
			submitTwoPsd(){
				if(this.yzm==''){
					this.$weui.topTips('验证码不能为空');
					return;
				}
				if(this.newpwd==''){
					this.$weui.topTips('密码不能为空');
					return;
				}
				if(this.newpwdConfirm==''){
					this.$weui.topTips('请再次确认密码');
					return;
				}
				if(this.newpwd!=this.newpwdConfirm){
					this.$weui.topTips('两次密码输入不一致');
					return;
				}
				let params={
					msgCode: this.yzm,
					password: this.newpwd
				}
				this.$axios.post('/xzuser/info/senior/edit',params).then((res) => {
					if(res.data.code == 200) {
							this.$weui.toast('二级密码修改成功',1000)
							 self.$router.push({
                	path: '/center'
                });
					}
					}).catch((error) => {
					
					})
			}
		}
  }
</script>
<style>
  .send{
      height: 2.5em;
      text-decoration:none;
      line-height: 2.5em;
      padding:0px 3px;
      background: #f8584f;
      color: #fff;
      text-align: center;
      display: block;
      float: right;
      border-radius:5px;
  }
</style>
