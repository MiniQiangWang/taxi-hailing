<template>
  <div class="bank">
    <header v-show="headerShowTip">
      <div class="top_nav"> 
      	<a class="header_left icon_left" @click="gotoCenterPage"></a>
        <span class="sp_nav">订单详情</span>
      </div>
    </header>
    <!--头部结束-->
    <!--内容开始-->
    <div class="data_min bgbody">
      <div class="det_user_phone">
      </div>
   	  <div class="user_list_infor">
   		<ul>
			<li>
   				<span>司机</span>
   				<span>张胖胖</span>
   			</li>
            <li>
   				<span>车型</span>
   				<span>奥迪A8-黑色</span>
   			</li>
            <li>
   				<span>车牌号</span>
   				<span>黑A-K7777</span>
   			</li>
   			<li>
   				<span>时间</span>
   				<span>5月4日 8:30</span>
   			</li>
            <li>
   				<span>金额</span>
   				<span>17.6元</span>
   			</li>
   			<li>
   				<span>起点</span>
   				<span>黑龙江大学</span>
   			</li>
   			<li>
   				<span>终点</span>
   				<span>哈尔滨西站</span>
   			</li>
			<li>
   				<span>里程</span>
   				<span>3.8km</span>
   			</li>
            <li>
   				<span>时长</span>
   				<span>18分钟</span>
   			</li>
            <li>
   				<span>手机号</span>
   				<span>13088886666</span>
   			</li>
   		</ul>
   		<ul>
   			<li>
                   <span>评价</span><span>棒棒哒</span>
               </li>
   		</ul>
   	  </div>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
console.log(mapState)
export default {
	data () {
		return {
		}
	},
	computed: {
  },
	methods: {
		gotoCenterPage() {
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
.bg_bank{
    position: absolute;
	display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    background: #000;
    background-size: 100% 100%;
    opacity: .7;
    
  }
  .btn-login {
      width: 40%;
      background: #fff;
      color: #eee;
    height: 4rem;
	line-height: 4rem;
    text-align: center;
    font-size: 1.8rem;
	border-radius: 5px;
	margin: 0 1rem;
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
	color: #bbb;
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
	color: #666;
	border-bottom: 1px solid #F7F7F7;
	font-size: 1.5rem;
}
.user_list_infor ul li span:first-child{
	width: 7rem;
	display: inline-block;
}
</style>
