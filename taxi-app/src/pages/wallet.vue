<template>
<div class="bank">
  	<header>
      <div class="top_nav"> 
      	<a class="header_left icon_left"></a>
        <span class="sp_nav">钱包</span>
      </div>
      <div class="top_as"></div>
    </header>
    <!--头部结束-->
    
    <!--内容开始-->
   <div class="personal_min bgbody">
   	<div class="det_user_phone bg_white">
   		<span class="user_portrait04"><img src="../assets/icons/icon_Purse.png"></span>
   		<span class="user_name03">余额186元</span>
   		<div class="div_extension">
   			<div class="et_profit">推广收益<span>555</span>元</div>
   			<div class="et_friends">推广好友<span>16</span>人</div>
   		</div>
   	</div>
   	<div class="payment_method">
   		<div class="div_payment">支付方式</div>
   	</div>
   </div>
   </div>
</template>

<script>
export default {
  
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
.personal_min{
	position: relative;
    top: 0;
    height: 100%;
}
.personal_min .det_user_phone{
	padding: 3rem;
    overflow: hidden;
}
.bgbody{
	background-color: #f7f7f7;
}
.personal_min .user_name03{
	text-align: center;
	display: block;
	height: 4rem;
    line-height: 4rem;
    font-size: 1.3rem;
    color: #222;
    font-weight: bold;
}
/*钱包*/
.bg_white{
	background: #fff;
}
.div_extension{
	margin-top: 2rem;
}
.div_extension span{
	padding: 0 0.5rem;
}
.div_extension .et_profit{
	width: 50%;
	float: left;
	text-align: left;
}
.div_extension .et_friends{
	width: 50%;
	float: left;
	text-align: right;
}
.personal_min .user_portrait04 {
    width: 7rem;
    height: 7rem;
    overflow: hidden;
    text-align: center;
    display: block;
    margin: 0 auto;
}
.personal_min .user_portrait04 img {
    width: 100%;
}
.payment_method{
	overflow: hidden;
	background: #fff;
	margin-top: 2rem;
	min-height: 7rem;
}
.payment_method .div_payment{
	height: 3rem;
	line-height: 3rem;
	padding-left: 3rem;
}
</style>


