<template>
  <div class="bg_bank">
    <a class="re_bank" @click="backRole"></a>
		<div class="re_min_infor" v-show="loginOrRegistFlag">
      <div class="re_logo">欢迎回来，乘客</div>
      <div class="bg_color">
        <div class="re_min">
            <span class="icon_phone"></span>
            <input class="input01" name="phone" type="text" placeholder="账号" v-model="userName" maxlength="10"/><div id="div1"></div>
        </div>
        <div class="re_min">
            <span class="icon_passwarde"></span>
            <input v-if="pwdType==='password'" class="input01" type="password" placeholder="密码" v-model="userPwd" maxlength="12"/>
            <input v-if="pwdType==='text'" class="input01" type="text" placeholder="密码" v-model="userPwd" maxlength="12"/>
            <span class="the_eyes" :class="eyesClass" @click="changeEyesType"></span>
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
      <div class="re_regist02">
          <a class="" @click="changeLRFlag">没有账号？立即注册</a>
      </div>
    </div>

    <div class="re_min_infor" v-show="!loginOrRegistFlag">
      <!-- <div class="re_logo"><img src="../assets/images/logo.png"></div> -->
      <div class="bg_color">
        <div class="re_min">
            <span class="icon_phone"></span>
            <input class="input01" name="phone" type="text" placeholder="注册的账号,6-10位" v-model="rUserName" maxlength="10"/><div id="div1"></div>
        </div>
        <div class="re_min">
            <span class="icon_passwarde"></span>
            <input class="input01" name="password" type="password" placeholder="输入密码,8-12位" v-model="rUserPwd" maxlength="12"/>
            <span class="the_eyes"></span>
        </div>
        <div class="re_min">
            <span class="icon_passwarde"></span>
            <input class="input01" name="password" type="password" placeholder="确认密码,8-12位" v-model="rSecondUserPwd" maxlength="12"/>
            <span class="the_eyes"></span>
        </div>
        <div class="error-show" v-show="equalTip">输入有误，请检查</div>
        <div class="error-show" v-show="userExistedTip">账号已存在，请重新输入</div>
      </div>
      <div class="re_regist">
          <a class="btn_regist" id="regist" @click="regist">注册</a>
      </div>
      <div class="re_regist02">
          <a class="" @click="changeLRFlag">已有账号，返回登陆</a>
      </div>
      <div class="r-mask" ></div>
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
        loginOrRegistFlag:true,
        userName:'',
        userPwd:'',
        errorTip:false,
        rUserName:'',
        rUserPwd:'',
        rSecondUserPwd:'',
        equalTip: false,
        userExistedTip:false,
        pwdType:'password'
      }
    },
    mounted() {
     
    },
    computed: {
      eyesClass() {
        return {
         "the_eyes_close":  this.pwdType === 'password',
         "the_eyes_open":  this.pwdType === 'text'
        }
      }
    },
    methods: {
      changeEyesType(){
        this.pwdType = this.pwdType==='password'?'text':'password';
      },
      changeLRFlag() {
        this.loginOrRegistFlag = !this.loginOrRegistFlag;
      },
      backRole() {
        this.$router.push('/role');
      },
      regist () {
        if(this.rUserName.length < 6 || this.rUserPwd.length < 8 || this.rSecondUserPwd.length < 8 || this.rUserPwd !== this.rSecondUserPwd) {
          this.equalTip = true;
          this.userExistedTip=false;
        }else {
            this.equalTip = false;
            axios.post('/users/regist', {
            userName: this.rUserName,
            userPwd: this.rUserPwd
          })
          .then((response)=>{
            let res = response.data;
            if(res.status == '0'){
              this.$router.push('/registSuccess');
            }else if (res.status == '10'){
              this.userExistedTip=true;
            }
            else{
              this.equalTip = true;
              alert('qubudao')
            }
          })
        }
        
      },
      login() {
        if(!this.userName || !this.userPwd || this.userName.length < 6 || this.userPwd.length < 8) {
          this.errorTip = true;
          return;
        }
        axios.post('/users/login', {
          userName: this.userName,
          userPwd: this.userPwd
        }).then((response)=>{
          let res = response.data;
          let userMsg = res.result;
          if(res.status == '0'){
            this.$store.commit('initUserInfo', userMsg);
            this.$router.push('/home');
            this.errorTip = false;
          }else{
            this.errorTip = true;
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
    background-size: 50%;
}
.the_eyes_close {
  background: url(../assets/icons/icon_close_eyes.png) no-repeat center;
}
.the_eyes_open {
  background: url(../assets/icons/icon_open_eyes.png) no-repeat center;
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
.r-mask {
  position: relative;
  width:100%;
  height:100%;
  background: rgba(0,0,0, .5);
  z-index: 1000;
}
</style>
