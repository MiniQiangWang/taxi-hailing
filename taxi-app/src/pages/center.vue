<template>
  <div class="bank">
    <header>
      <div class="top_nav"> 
      	<a class="header_left icon_left" @click="backToHome"></a>
        <span class="sp_nav">个人中心</span>
        <a class="hear_right" @touchend="gotoEditPage">编辑</a>
      </div>
      <div class="top_as"></div>
    </header>
    <!--头部结束-->
    
    <!--内容开始-->
    <div class="personal_min">
      <div class="det_user_phone">
        <span class="user_portrait03"><img src="../assets/icons/icon_portrait.png"></span>
        <span class="user_name03">{{nickName}}</span>
      </div>
      <div class="user_aut">
        <div class="iconatt">
          <span class="real_name">实名认证</span>
          <span class="icon_atted">已认证</span>
        </div>
        <div class="iconatt">
          <span class="car_atted">车主认证</span>
          <span class="icon_not_atted">未认证</span>
   	    </div>
   	  </div>
      <div class="re_regist">
          <a class="btn_regist" id="regist" @touchend="logOut">退出登陆</a>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
        nickName:'',
    }
  },
  mounted() {
      this.checkLogin();
  },
  methods: {
    backToHome () {
        console.log("跳到home");
        this.$router.push('/home');
    },
    gotoLoginPage() {
        this.$router.push('/user');
    },
    gotoEditPage() {
        this.$router.push('/edit');
    },
    logOut() {
        axios.post('/users/logout').then((response)=>{
          let res = response.data;
          if(res.status == "0") {
            console.log('已登出');
            this.gotoLoginPage();
          }
        })
    },
    checkLogin() {
        axios.get('/users/checklogin').then((response)=>{
            let res = response.data;
            if(res.status == '0') {
                console.log('已登陆',res);
                this.nickName = res.result;
            }
        });
    },
  }
}
</script>

<style scoped>
.bank{
    position:fixed;
    width:100%;
    height: 100%;
}
    /*头部导航*/
header{
	height: 3.75rem;
}
.top_nav {
    height: 3.75rem;
    line-height: 3.75rem;
    text-align: center;
    background: #ffffff;
    color: white;
    position: fixed;
    width: 100%;
    top: 0;
    z-index: 222;
    font-size: 1.7rem;
    background: #08c8fb;
}
.top_nav .header_left {
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    width: 3.75rem;
    height: 3.75rem;
}
.icon_left{
	background: url(../assets/icons/icon_return.png) no-repeat center;
    background-size: 25%;
}
.top_nav .hear_right {
    display: block;
    font-size: 1.5rem;
    position: absolute;
    top: 0;
    right: 0;
    width: 3.75rem;
    height: 3.75rem;
}
.icon_personal{
	background: url(../assets/icons/icon_personal.png) no-repeat center;
	background-size: 45%;
}
.icon_package{
	background: url(../assets/icons/icon_package.png) no-repeat center;
	background-size: 45%;
}
/*导航结束*/ 

/*个人中心*/
.personal_min{
	position: relative;
    top: 0;
    height: 100%;
}
.personal_min .det_user_phone{
	padding: 3rem;
    overflow: hidden;
}
.personal_min .user_portrait03{
	width: 7rem;
    height: 7rem;
    overflow: hidden;
    border-radius: 50%;
    text-align: center;
    display: block;
    margin: 0 auto;
}
.personal_min .user_portrait03 img{
	width: 100%;
}
.personal_min .user_name03{
	text-align: center;
	display: block;
	height: 4rem;
    line-height: 4rem;
    color: #2a2a2a;
    font-size: 1.5rem;
    color: #333;
    font-weight: bold;
}
.user_aut{
	width: 75%;
	padding: 1rem 2rem;
	box-shadow: 0px 2px 2px 2px #e3e3e3;
	margin: 0 auto;
}
.user_aut .iconatt{
	overflow: hidden;
	line-height: 3rem;
	color: #555;
	font-size: 1.5rem;
	font-weight: bold;
}
.user_aut .iconatt span{
	height: 3rem;
	line-height: 3rem;
	display: inline-block;
}
.user_aut .iconatt .real_name{
	float: left;
	padding-left: 2rem;
	background: url(../assets/images/real_name.png) no-repeat left;
	background-size: 20%;
}
.user_aut .iconatt .icon_atted{
	float: right;
	padding-left: 1.5rem;
	background: url(../assets/icons/icon_atted.png) no-repeat left;
	background-size: 20%;
}
.user_aut .iconatt .car_atted{
	float: left;
	padding-left: 2rem;
	background: url(../assets/images/car_atted.png) no-repeat left;
	background-size: 20%;
	
}
.user_aut .iconatt .icon_not_atted{
	float: right;
	padding-left: 1.5rem;
	background: url(../assets/icons/icon_not_atted.png) no-repeat left;
	background-size: 20%;
}

.re_regist{
	width: 100%;
	margin-top: 2rem;
	text-align: center;
}
.re_regist .btn_regist{
	width: 90%;
	height: 3rem;
	line-height: 3rem;
	display: block;
	margin: 0 auto;
	border-radius: 5px;
    border:2px solid rgba(90, 198, 246, .8);
	color: rgba(90, 198, 246);
	font-size: 1.8rem;
}
</style>
