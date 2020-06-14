<template>
  <div class="page">
  	 <headers title="重置密码"></headers>
     <div class="page-bd setpwd">
        <!-- 页面内容 -->
        <div class="weui-cells weui-cells_form">
          <div class="weui-cell bor_b">
            <div class="weui-cell__hd">
              <label class="weui-label fs28 fw_b">手机号码</label>
            </div>
            <div class="weui-cell__bd">
              <p><input class="weui-input mobile" v-model="reg.mobile" type="text" id="mobile" placeholder="请填写手机号码" style="width:55%;padding:5px;"/>
              <button  class="send"  id="btnSendCode" @click="sendMessage" >
                <span v-if="sendMsgDisabled">{{time+'秒'}}</span>
                  <span v-if="!sendMsgDisabled">发送验证码</span>
                </button></p>
            </div>
          </div>
          <div class="weui-cell  bor_b">
            <div class="weui-cell__hd">
              <label class="weui-label fs28 fw_b">验证码</label>
            </div>
            <div class="weui-cell__bd">
              <input class="weui-input code" v-model="reg.msgCode" type="text" placeholder="请填写验证码">
            </div>
            <div class="weui-cell__ft fw_b color_r getCode">
              <!--获取验证码-->
            </div>
          </div>
          <div class="weui-cell bor_b">
            <div class="weui-cell__hd">
              <label class="weui-label fs28 fw_b">新密码</label>
            </div>
            <div class="weui-cell__bd">
              <input class="weui-input new_password"  v-model="reg.newPassword" type="password" placeholder="请填写新密码"
              />
            </div>
          </div>
          <div class="weui-cell bor_b">
            <div class="weui-cell__hd">
              <label class="weui-label fs28 fw_b">确认密码</label>
            </div>
            <div class="weui-cell__bd">
              <input class="weui-input confirm_password"  v-model="password1" type="password" placeholder="请再次填写新密码"
              />
            </div>
          </div>
        </div>

        <div class="tips">
          <img src="../../assets/images/tipsIcon.png" alt="">
          <div class="fs24">密码长度为6~20个字符<br>至少使用数字、字母、特殊字符中的2种为密码</div>
        </div>

        <div class="butBox">
          <div class="but" @click="sure">确认</div>
        </div>
      </div>
    </div>
</template>

<script>
	import headers from '../../components/header'
  export default {
    name: 'login',
    components:{
      headers
    },
    data () {
    return {
      sendMsgDisabled: false,
      time:60,
      reg:{
        mobile:'',
        msgCode:'',
        newPassword:''
      },
      password1:'',
      validate: true //验证通过

    }
  },
  methods:{
      sure(){
				let self = this;
        self.check()
				if(self.validate) {
					let params = self.reg
					self.$axios.post('/login/forgot/password', params).then((res) => {
						if(res.data.code == 200){
               self.$weui.toast('修改成功',1000)
               self.$router.push({
				      	 		path: '/login'
				      	});
						}
					})
				 }
      },
      check() {
               let self = this;
               self.validate = true
				var reg2 = /^1[34578]\d{9}$/;
				if(self.reg.mobile == '') {
					self.$weui.topTips('请输入手机号码');
					self.validate = false;
					return false;
				}
				if(!reg2.test(self.reg.mobile)) {
					self.$weui.topTips('请输入正确手机号码');
					self.validate = false;
					return false;
				}
				if(self.reg.msgCode == '') {
					self.$weui.topTips('请输入验证码');
					self.validate = false;
					return false;
				}

				if(self.reg.newPassword == '' || self.password1 == '' || self.reg.newPassword != self.password1) {
					self.$weui.topTips('两次密码不一致或为空');
					self.validate = false;
					return false;
				}
			},
    	sendMessage() {
				let self = this;
				var reg2 = /^1[34578]\d{9}$/;

				if(self.reg.mobile == '') {
					self.$weui.topTips('请输入手机号码');
					return false;
				} else if(!reg2.test(self.reg.mobile)) {
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
						mobile: self.reg.mobile,
						msgTplCode: '2'
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
