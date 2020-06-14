<template>
  <div class="page">
   <headers title="设定"></headers>

    <div class="page-bd login">
      <!-- 页面内容 -->
      <div class="top">
        <img class="logo" src="" alt="" />
      </div>
      <div class="weui-cells weui-cells_form">
        <div class="Box"><span class="fs24 color_9">手机号</span></div>
        <div class="weui-cell">
          <div class="weui-cell__bd">
            <input class="weui-input fs28 fw_b mobile" type="number" placeholder="请输入手机号"/>
          </div>
          <div class="weui-cell__ft"></div>
        </div>
        <div class="Box pwd"><span class="fs24 color_9">密码</span></div>
        <div class="weui-cell">
          <div class="weui-cell__bd">
            <input class="weui-input fs28 pwdInput fw_b password" type="password" placeholder="请输入密码"/>
          </div>
          <div class="weui-cell__ft"><img src="../../assets/images/ere_no.png" data-style="no" alt="" class="ereimg"></div>
        </div>
      </div>
      <!-- <div class="Box"><span class="fs24 color_9">验证码</span></div>
       <div class="weui-cell"> -->
      <!-- <div class="weui-cell__bd"> -->
      <!--   <input type = "text"  id = "input" value="" />
        <input type = "button" id="code" onclick="createCode()"/>  -->
      <!--  <div class="weui-cell__bd">
       <input class="weui-input fs28 pwdInput fw_b code" type="text" placeholder="请输入验证码"/>
       </div>
       <img src="" id="verify_code_img" onclick="verify()"> -->
      <!-- <input type = "button" value = "验证" onclick = "validate()"/>   -->
      <!-- </div> -->
      <!--  <div class="weui-cell__ft"></div>
     </div> -->
      <div class="Box pwd"><input type="checkbox" name="" value="1" class="remember_pwd" id="remember_pwd"><span class="fs24 color_9">记住密码</span></div>
      <br>
      <!-- <a href="forgot_password.html" class="register fs24 color_9" style="padding-top: 0.5rem">忘记密码？</a> -->
      <div class="butBox"><div class="but">登录</div></div>
      <a @click="register" class="findpwd fw_b fs26 color_r">还没有账号？注册</a>
      <a @click="forget" class="findpwd fw_b fs26 color_r" style="padding-top: 0.2rem">忘记密码？</a>
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
      msg: 'Welcome to Your Vue.js App'
    }
  },
   methods: {
     register(){
      this.$router.push({path:'/register'});    
     },
     forget(){
      this.$router.push({path:'/forget'});    
     }
  } 
  }
</script>
<style>
  
</style>
