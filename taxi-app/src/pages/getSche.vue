<template>
<div class="bank">
  <!--头部开始-->
	<header>
      <div class="top_nav"> 
      	<a class="header_left icon_left"></a>
        <span class="sp_nav">附近乘客</span>
      </div>
      <div class="top_as"></div>
    </header>
    <!--头部结束-->
    
    <!--内容开始-->
	<div class="schedule_min bgbody">
		<div class="div_nav">
		</div>
		<div class="cardInfo_content">
			<div class="con_div001">
				<ul>
					<li>
						<div><span class="kuaiche">拼车</span></div>
						<div><span class="icon_time"></span>下单时间  08:38</div>
						<div><span class="icon_blue"></span>哈尔滨市黑龙江大学正门A区正门学府路</div>
						<div><span class="icon_org"></span>哈尔滨市哈尔滨西火车站</div>
                        <button>接单</button>
					</li>
					<li>
						<div><span class="kuaiche">不拼车</span></div>
						<div><span class="icon_time"></span>下单时间  08:38</div>
						<div><span class="icon_blue"></span>哈尔滨市黑龙江大学正门A区正门学府路</div>
						<div><span class="icon_org"></span>哈尔滨市哈西服装城北门</div>
                        <button>接单</button>
					</li>
					<li>
						<div><span class="kuaiche">拼车</span></div>
						<div><span class="icon_time"></span>下单时间  08:38</div>
						<div><span class="icon_blue"></span>哈尔滨市黑龙江大学A区正门学府路</div>
						<div><span class="icon_org"></span>哈尔滨市哈尔滨西火车站</div>
                        <button>接单</button>
					</li>
                    <li>
						<div><span class="kuaiche">不拼车</span></div>
						<div><span class="icon_time"></span>下单时间  08:38</div>
						<div><span class="icon_blue"></span>哈尔滨市黑龙江大学正门A区正门学府路</div>
						<div><span class="icon_org"></span>哈尔滨市哈尔滨西火车站</div>
                        <button>接单</button>
					</li><li>
						<div><span class="kuaiche">拼车</span></div>
						<div><span class="icon_time"></span>下单时间  08:38</div>
						<div><span class="icon_blue"></span>哈尔滨市黑龙江大学正门A区正门学府路</div>
						<div><span class="icon_org"></span>哈尔滨市哈尔滨西火车站</div>
                        <button>接单</button>
					</li><li>
						<div><span class="kuaiche">不拼车</span></div>
						<div><span class="icon_time"></span>下单时间  08:38</div>
						<div><span class="icon_blue"></span>哈尔滨市黑龙江大学正门A区正门学府路</div>
						<div><span class="icon_org"></span>哈尔滨市哈尔滨西火车站</div>
                        <button>接单</button>
					</li>
				</ul>
			</div>
		</div>
		<div class="no_more">没有更多了</div>
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

/*我的行程*/
.bgbody{
	background-color: #f7f7f7;
}
.schedule_min{
	position: relative;
    top: 0;
    height: 100%;
}
.schedule_min .div_nav{
	width: 100%;
	line-height: 4rem;
	padding-left: 5%;
}
.schedule_min .div_nav .span_active{
	font-weight: bold;
}
.cardInfo_content{
	position: relative;
}
.cardInfo_content .con_div001{
	width: 90%;
	margin: 0 auto;
}
.cardInfo_content .con_div001 .kuaiche{
	font-weight: bold;
}
.cardInfo_content .con_div001 .pingjia{
	float: right;
	padding-right: 1rem;
	color: #555;
	background: url(../assets/icons/icon_right.png) no-repeat right;
	background-size: 12%;
	display: inline-block;
}
.cardInfo_content .con_div001 li{
	margin-bottom: 1.5rem;
	background: #fff;
	border-radius: 10px;
	box-shadow: 0px 2px 2px 2px #efefef;
	line-height: 2rem;
	padding: 0.5rem;
}
.cardInfo_content .con_div001 li div{
    float: left;
}
.cardInfo_content .con_div001 li button{
    float:right;
    width: 6rem;
    height: 4rem;
    background: rgb(25, 166, 190);
    color:#fff;
    border-radius: 0.6rem;
}
.cardInfo_content .con_div001 .icon_time{
	  width: 1rem;
    height: 2rem;
    display: inline-block;
    float: left;
    background: url(../assets/icons/icon_time.png) no-repeat left;
    background-size: 70%;
    margin-left: 6rem;
}
.cardInfo_content .con_div001 .icon_blue{
	width: 1rem;
    height: 2rem;
    display: block;
    float: left;
    background: url(../assets/icons/icon_blue.png) no-repeat left;
    background-size: 40%;
}
.cardInfo_content .con_div001 .icon_org{
	    width: 1rem;
    height: 2rem;
    display: block;
    float: left;
    background: url(../assets/icons/icon_org.png) no-repeat left;
    background-size: 40%;
}

.no_more{
	width: 100%;
	text-align: center;
	color: #999;
}

</style>


