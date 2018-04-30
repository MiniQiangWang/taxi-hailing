<template>
  <div class="bank">
    <header>
      <div class="top_nav"> 
      	<a class="header_left icon_left" @touchend="gotoCenterPage"></a>
        <span class="sp_nav">编辑资料</span>
        <a class="hear_right">完成</a>
      </div>
      <div class="top_as"></div>
    </header>
    <!--头部结束-->
    
    <!--内容开始-->
    <div class="data_min bgbody">
      <div class="det_user_phone">
        <span class="user_portrait02"><img src="../assets/icons/icon_portrait.png"></span>
        <span class="user_name02">修改头像</span>
      </div>
   	  <div class="user_list_infor">
   		<ul>
   			<li>
   				<span>昵称</span>
					<input type="text" class="input01" placeholder="张xx"/>
   			</li>
   			<li>
   				<span>性别</span>
   				<input type="text" class="input01" placeholder="张xx"/>
   			</li>
   			<li>
   				<span>生日</span>
   				<input type="text" class="input01" placeholder="张xx"/>
   			</li>
   			<li>
   				<span>年龄</span>
   				<input type="text" class="input01" placeholder="张xx"/>
   			</li>
   		</ul>
   		<ul>
   			<li>
   				<span>行业</span>
   				<input type="text" class="input01" placeholder="张xx"/>
   			</li>
   			<li>
   				<span>职业</span>
   				<input type="text" class="input01" placeholder="张xx"/>
   			</li>
   			<li>
   				<span>个性签名</span>
   				<input type="text" class="input01" placeholder="张xx"/>
   			</li>
   			<li>
   				<span>手机号</span>
   				<input type="text" class="input01" placeholder="张xx"/>
   			</li>
   		</ul>
   	  </div>
    </div>
  </div>
</template>

<script>
export default {
	data () {
		return {

		}
	},
	methods: {
		gotoCenterPage() {
			console.log("跳到center");
			this.$router.go(-1);
		}
	}
}
</script>

<style scoped>
.bank{
	position:fixed;
	top:0;
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

/*编辑资料*/
.bgbody{
	background-color: #f7f7f7;
}
.icon_left{
	  background: url(../assets/icons/icon_return.png) no-repeat center;
    background-size: 25%;
}
.data_min{
	height:100%;
}
.data_min .det_user_phone{
	padding: 2rem;
	overflow: hidden;
}
.det_user_phone .user_portrait02{
	  width: 6rem;
	  height: 6rem;
	  overflow: hidden;
	  border-radius: 50%;
    text-align: center;
    display: block;
    float: left;
}
.user_portrait02 img{
	width: 100%;
}
.det_user_phone .user_name02{
	height: 6rem;
	line-height: 6rem;
	padding-left: 2rem;
	color: #2a2a2a;
	font-size: 1.7rem;
}
.user_list_infor{
	overflow: hidden;
}
.user_list_infor ul{
	background: #fff;
	margin-bottom: 1.5rem;
}
.user_list_infor ul li{
	padding-left: 2rem;
	height: 3.5rem;
	line-height: 3.5rem;
	color: #2A2A2A;
	border-bottom: 1px solid #F7F7F7;
	font-size: 1.5rem;
}
.user_list_infor ul li input {
	line-height: 1.5rem;
	font-size:1.5rem;
	margin: 0.3rem 0;
}
.user_list_infor ul li span:first-child{
	width: 6rem;
	display: inline-block;
}
</style>
