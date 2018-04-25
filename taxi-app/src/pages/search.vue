<template>
  <div class="bank">
    <div class="div_hearder">
		<div class="div_ss1">
				<span class="hea_city">城市</span>
			    <span class="ks_city"></span>
			    <input type="text" placeholder="您行程开始的地方?" />
			    <span class="span_cancel">取消</span>
			</div>
			<div class="in_div_icon">
				<span class="icon_home">家</span>
				<span class="icon_buildings">公司</span>
				<span class="icon_add">添加</span>
			</div>
		</div>
		<div class="list_address">
			<ul>
				<li>
					<div class="icon_map"></div>
					<div class="adr_span">
						<span class="span01">深圳宝安国际机场</span>
						<span class="span02">广东省深圳市宝安区福永镇机场南路</span>
					</div>
				</li>
				<li>
					<div class="icon_map"></div>
					<div class="adr_span">
						<span class="span01">深圳宝安国际机场</span>
						<span class="span02">广东省深圳市宝安区福永镇机场南路</span>
					</div>
				</li>
				<li>
					<div class="icon_map"></div>
					<div class="adr_span">
						<span class="span01">深圳宝安国际机场</span>
						<span class="span02">广东省深圳市宝安区福永镇机场南路</span>
					</div>
				</li>
			</ul>
		</div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style scoped>
.bank{
    position: fixed;
    width:100%;
    height:100%;
}
.div_hearder{
	width: 100%;
	min-height: 3.75rem;
	line-height: 3.75rem;
	border-bottom: 1px solid #F4F4F5;
	box-shadow: 0px 1px 5px 3px #ececec;
	overflow: hidden;
}
.span_cancel{
	width: 4rem;
	height: 3.75rem;
	line-height: 3.75rem;
	text-align: center;
	float: right;
	color: #777;
}
/*要去的地方，开始的地方*/
.hea_city{
	width: 5rem;
	height: 3.75rem;
	line-height: 3.75rem;
	display: block;
	float: left;
	text-align: center;
	color: #08c8fb;
}
.ks_city{
	width: 3.75rem;
	height: 3.75rem;
	display: block;
	float: left;
	background: url(../assets/icons/icon_selsct.png) no-repeat center;
	background-size: 40%;
}
.div_ss1{
	border-bottom: 1px solid #F4F4F5;
}
.in_div_icon{
	position: relative;
	overflow: hidden;
	padding-top: 5%;
}
.in_div_icon span{
	width: 33%;
	padding-top: 10%;
	text-align: center;
	display: block;
	float: left;
	color: #333;
	font-size: 1.3rem;
}
.in_div_icon .icon_home{
	background: url(../assets/icons/icon_home.png) no-repeat top;
	background-size: 40%;
}
.in_div_icon .icon_buildings{
	background: url(../assets/icons/icon_buildings.png) no-repeat top;
	background-size: 30%;
}
.in_div_icon .icon_add{
	background: url(../assets/icons/icon_add.png) no-repeat top;
	background-size: 30%;
}
.list_address{
	margin-top: 5%;
}
.list_address ul li{
	display: block;
	overflow: hidden;
}
.list_address .icon_map{
	width: 20%;
	height: 5rem;
	float: left;
	background: url(../assets/icons/icon_map.png) no-repeat center;
	background-size: 35%;	
} 
.list_address .adr_span{
	width: 80%;
	float: left;
	height: 5rem;
}
.list_address .adr_span span{
	display: block;
}
.list_address .adr_span .span01{
	font-size: 1.2rem;
	color: #333;
	margin-top: 5%;
}
.list_address .adr_span .span02{
	font-size: 1rem;
	color: #999;
}
</style>

