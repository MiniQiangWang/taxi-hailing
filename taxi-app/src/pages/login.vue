<template>
  <div class="bg_bank">
    <a class="re_bank" href="###"></a>
		<div class="re_min_infor">
      <!-- <div class="re_logo"><img src="../assets/images/logo.png"></div> -->
      <div class="bg_color" v-if="loginModelFlag">
        <div class="re_min">
            <span class="icon_phone"></span>
            <input class="input01" id="phone" name="phone" type="text" placeholder="账号" v-model="userName" pattern="(\d{11})|^((\d{7,8})|(\d{4}|\d{3})-(\d{7,8})|(\d{4}|\d{3})-(\d{7,8})-(\d{4}|\d{3}|\d{2}|\d{1})|(\d{7,8})-(\d{4}|\d{3}|\d{2}|\d{1}))$" /><div id="div1"></div>
        </div>
        <div class="re_min">
            <span class="icon_passwarde"></span>
            <input class="input01"  id="password" name="password" type="password" placeholder="密码" v-model="userPwd"/>
            <!-- <span class="the_eyes"></span> -->
        </div>
        <div class="error-show" v-show="errorTip">用户名或密码错误</div>
        <!-- <div class="re_min"> -->
            <!-- <span class="icon_vf_code"></span> -->
            <!-- <input class="input01 login_btn" id="code" name="code" type="text" placeholder="请输入验证码" onkeyup="chkCode(this)"/> -->
            <!-- <input class="reto_code" id="btn" onclick="settime(this)" value="发送验证码"/> -->
        <!-- </div> -->
      </div>
      <div class="re_regist">
          <a class="btn_regist" id="login" @click="login">登录</a>
      </div>
      <div class="re_regist">
          <a class="btn_regist" id="login" @click="logOut" v-if="!loginModelFlag"><span v-text="nickName"></span></a>
      </div>
      <div class="re_regist02">
          <a class="" >立即注册</a>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    components: {
    },
    data() {
      return {
        "userName":'',
        "userPwd":'',
        "errorTip":false,
        "loginModelFlag":true,
        "nickName":''
      }
    },
    mounted() {
      this.checkLogin();
    },
    methods: {
      checkLogin() {
        axios.get('/users/checklogin').then((response)=>{
          let res = response.data;
          if(res.status == '0') {
            this.nickName = res.result.userName;
            this.loginModelFlag = false;
          }
        });
      },
      login() {
        if(!this.userName || !this.userPwd) {
          this.errorTip = true;
          return;
        }
        axios.post('/users/login', {
          userName: this.userName,
          userPwd: this.userPwd
        }).then((response)=>{
          let res = response.data;
          if(res.status == '0'){
            this.errorTip = false;
            this.loginModelFlag = false;
            this.nickName = res.result; 
          }else{
            this.errorTip = true;
          }
        })
      },
      logOut() {
        this.loginModelFlag=true;
        axios.post('/users/logout').then((response)=>{
          let res = response.data;
          if(res.status == "0") {
            this.nickName = '';
          }
        })
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .bg_bank{
    position: absolute;
    height: 100%;
    width: 100%;
    background: url(../assets/images/bg_bank.png) no-repeat;
    background-size: 100% 100%;
    opacity: .9;
  }
  .re_bank{
	position: absolute;
	width: 3rem;
	height: 3rem;
	top: 5%;
	left: 5%;
	background: url(../assets/icons/icon_return.png) no-repeat center;
	background-size: 30%;
}
.re_logo{
	  position: relative;
    width: 50%;
    text-align: center;
    margin: 0 auto;
    margin-top: 20%;
    overflow: hidden;
}
.re_logo img{
	width: 70%;
}
.bg_color{
	width: 70%;
	margin: 0 auto;
	margin-top: 20px;
	border-radius: 8px;
	background-color: rgba(255, 255, 255, 0.1);
	padding: 20px;
	padding-bottom: 40px;
}
.re_min_infor {
  margin-top: 10rem;
}
.re_min{
	border-bottom: 1px solid #96d2ff;
	padding-bottom: 5px;
	overflow: hidden;
	margin-top: 8px;
	position: relative;
}
.re_min .input01{
  font-size: 1.7rem;
	width: 90%;
  float: left;
  background-color:transparent ;
  color: #fff;
  margin: 0.5rem 0;
}
.re_min .icon_phone{
	width: 10%;
	height: 3rem;
	background: url(../assets/icons/icon_phone.png) no-repeat center;
	background-size: 50%;
	display: block;
	float: left;
}
.re_min .icon_passwarde{
	width: 10%;
	height: 3rem;
	background: url(../assets/icons/icon_passward.png) no-repeat center;
	background-size: 50%;
	display: block;
	float: left;
}
.re_min .icon_vf_code{
	width: 10%;
	height: 3rem;
	background: url(../assets/icons/icon_vf_code.png) no-repeat center;
	background-size: 50%;
	display: block;
	float: left;
}
.re_min input::-webkit-input-placeholder{
	color:#fff;
}
.re_min input::-ms-input-placeholder{
  color:#fff;
}
.re_regist{
	width: 100%;
	margin-top: 20px;
	text-align: center;
}
.re_regist .btn_regist{
	width: 80%;
	height: 3rem;
	line-height: 3rem;
	display: block;
	margin: 0 auto;
	border-radius: 5px;
	background-color: rgba(255, 255, 255, 0.2);
	color: #fff;
	font-size: 1.8rem;
}
.reto_code{
	  position: absolute;
    background-color: rgba(255, 255, 255, 0.2);
    width: 8rem;
    text-align: center;
    display: block;
    padding: 5px;
    color: #fff;
    right: 0;
    font-size: 1rem;
    border-radius: 5px; 
}
.the_eyes{
	  position: absolute;
    width: 3rem;
    height: 3rem;
    text-align: center;
    display: block;
    right: 0;
    font-size: 1rem;
    background: url(../assets/icons/icon_close_eyes.png) no-repeat center;
    background-size: 50%;
}
.re_regist02 {
    width: 100%;
    margin-top: 20px;
    text-align: center;
    color: #fff;
}
.re_regist02 a{
	text-decoration: underline;
}
</style>
