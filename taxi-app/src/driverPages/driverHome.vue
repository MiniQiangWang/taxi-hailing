<template>
  <div class="bank">
    <header>
      <div class="top_nav"> 
      	<a class="header_left icon_personal" @click="gotoCenter"></a>
        <span class="sp_nav"><strong>{{localCity}}</strong></span>
        <a class="hear_right icon_package"></a>
      </div>
      <div class="top_as"></div>
    </header>
    <!--头部结束-->
    
    <!--内容开始-->
	<div class="map" id="l-map" ref="lmap"></div>
    <div class="div_map" v-show="true">
    	<div class="div_map_btn">
    		<a class="call_car" @click="gotoGetSche">开始运营</a>
    	</div>
    </div>
    <!--内容结束-->

  </div>
</template>

<script>
	import BMap from 'BMap';
	import VueSocketio from 'vue-socket.io';
  	export default {
		components: {

		},
		data() {
			return {
				selected: "",
				mapBtnFlag: false,
				showIcon: true,
				iconDropUp:"icon-drop-up",
				iconDropDown:"icon-drop-down",
				localCity:"",
				// callCarClickable:false
			}
		},
		watch: {
			// localCity(cur, old) {
			// 	if(cur !== ''){
			// 		this.callCarClickable = true;
			// 		console.log('nizhenhao',this.callCarClickable);
			// 	}
			// }
		},
		computed: {
			d_userName() {
				return this.$store.state.driverLogin.driverMsg.d_userName;
			},
			initPoint() {
				return this.$store.state.orderList.initPoint;
			}
		},
		sockets: {
			connect() {
				console.log("socket连接成功");
			},
			acceptOrder(orderList) {
				this.$store.commit('setOrderList', orderList);
				this.$router.push('/getsche');
			}

		},
		mounted() {
			//********************生成地图
			var lmap = this.$refs.lmap;
			var map = new BMap.Map(lmap,{minZoom:6,maxZoom:17});
			var point = new BMap.Point(116.331398,39.897445);
			map.centerAndZoom(point,12);
			// this.myMap = map;
			let _this = this;
			// **********************浏览器定位
			var geolocation = new BMap.Geolocation();
			geolocation.getCurrentPosition(function(r){
				if(this.getStatus() == BMAP_STATUS_SUCCESS){
					_this.localCity = r.address.city;
					var mk = new BMap.Marker(r.point);
					_this.$store.commit('setInitPoint', r.point);
					map.addOverlay(mk);
					// 将地图的中心点更改为给定的点
					map.panTo(r.point);
				}else {
					alert('failed'+this.getStatus());
				}
			},{enableHighAccuracy: true});
		},
    methods: {
		gotoCenter() {
			this.$router.push('/dcenter');
		},
        changeMapBtnFlag() {
            this.showIcon = !this.showIcon;
            this.mapBtnFlag = !this.mapBtnFlag;
		},
		gotoGetSche() {
			var message = {
				msg:this.d_userName,
				initPoint:this.initPoint
			}
			this.$socket.emit('setAccept', message);
		}
    }
  }
</script>

<style scoped>
/*头部导航*/
#l-map {
	position: fixed;
	height: 100%;
	width: 100%;
	z-index:1;
}
#r-result{
	position: fixed;
	top: 5rem;
	width: 30rem;
	height: 4rem;
	background:red;
}
.bank{
  position: fixed;
  width: 100%;
  height: 100%;
}
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
    font-size: 1.5rem;
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
    font-size: 1.2rem;
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

.div_map{
	position: absolute;
	top: 2rem;
	width: 100%;
	background-size: 100%;
	z-index:100;
}
.map_infor{
	width: 85%;
	background: #fff;
	margin: 0 auto;
	position: relative;
	top: 3rem;
	border-radius: 10px;
	box-shadow: 0px 3px 2px 2px #e3e3e3;
}
.map_min{
	border-bottom: 1px solid #f4f4f5;
	overflow: hidden;
}
.map_min input {
	font-size: 1.7rem;
  margin: 0.8rem 0;
}
.map_min span {
  margin: .3rem 0;
  width: 3rem;
  height: 3rem;
  display: block;
  float: left;
	background-size: 20%;
}
.icon_blue{
	background: url(../assets/icons/icon_blue.png) no-repeat center;
}
.icon_org{
	background: url(../assets/icons/icon_org.png) no-repeat center;
}
.map_div01{
	width: 80%;
	margin: 0 auto;
	height: 3rem;
	line-height: 3rem;
	border-bottom: 1px solid #f4f4f5;
}
.map_div01 select{
	border: none;
	width: 100%;	
}
.map_div02{
	width: 80%;
	margin: 0 auto;
	height: 3rem;
	line-height: 3rem;
	border-bottom: 1px solid #f4f4f5;
}
.map_div02 select{
	border: none;
	width: 32%;	
}
.map_div01 .span01{
	width: 50%;
	display: block;
	float: left;
	text-align: center;
	border-right: 1px solid #F4F4F5;
}
.map_div01 .a_jiaoche{
	width: 48%;
	float: left;
	text-align: center;
	background: url(../assets/icons/icon_right.png) no-repeat right;
	background-size: 5%;
}
.div_map_btn{
	position: relative;
}
.call_car{
	width: 80%;
	font-size: 2rem;
	height: 4rem;
	line-height: 4rem;
	text-align: center;
	color: #FFFFFF;
	display: block;
	margin: 0 auto;
	margin-top: 5rem;
	background: #08c8fb;
	border-radius: 5px;
}
.icon-drop-up{
	position: absolute;
	width: 3.5rem;
	height: 3.5rem;
	background: url(../assets/icons/icon_drop-down02.png) no-repeat center;
	background-size: 100% 100%;
	left: 50%;
	margin-left: -1.75rem;
	bottom: -25px;
}
.icon-drop-down{
	position: absolute;
	width: 3.5rem;
	height: 3.5rem;
	background: url(../assets/icons/icon_drop-down.png) no-repeat center;
	background-size: 100% 100%;
	left: 50%;
	margin-left: -1.75rem;
	bottom: -25px;
}

/*model css 模太框*/
.div_model{position: fixed;top:0px;width:100%;height: 100%;background-color: rgba(0, 0, 0, 0.4);z-index: 333;}
.div_model .model_con{background-color: #fff;box-sizing: border-box;padding: 20px 10px;border-top: 1px solid #e7e7e7;}
.div_model .model_con a{display:inline-block;width: 110px;height: 45px;border-radius: 4px;text-align: center;
   line-height: 45px;font-size: 14px;}
.div_model .model_con .a_payed{background-color: #0898fc;color:#fff}
.div_model .model_con .a_nopay{border:1px solid #e7e7e7;color:#333}

.skid_bar{
	width: 70%;
	float: left;
	top: 0;
	height: 100%;
	background: #fff;
	z-index: 555;
}
.model_none{
	width: 30%;
	float: right;
	top: 0;
	height: 100%;
}
.animation01{
-webkit-animation:fadeInLeft .2s .1s ease both;
-moz-animation:fadeInLeft .2s .1s ease both;}
@-webkit-keyframes fadeInLeft{
0%{opacity:0;
-webkit-transform:translateX(-320px)}
100%{opacity:1;
-webkit-transform:translateX(0)}
}
@-moz-keyframes fadeInLeft{
0%{opacity:0;
-moz-transform:translateX(-320px)}
100%{opacity:1;
-moz-transform:translateX(0)}
}
.user_portrait{
	width: 100%;
	text-align: center;
	margin-top: 20%;
}
.user_portrait span{
	display: block;
}
.user_portrait .icon_portrait{
	width: 35%;
	margin: 0 auto;
	border-radius: 50%;
	overflow: hidden;
}
.user_portrait .icon_portrait img{
	width: 100%;
}
.user_portrait .user_mame{
	line-height: 3rem;
	font-size: 1.2rem;
	color: #333;
	font-weight: bold;
}
.personal_data{
	padding: 20px;
	overflow: hidden;
}
.personal_data li{
	  display: block;
    overflow: hidden;
    margin-bottom: 15px;
}
.personal_data li a{
	  display: block;
    overflow: hidden;
}
.personal_data li span{
	display: block;
	float: left;
	line-height: 3;
	font-weight: bold;
	color: #555;
}
.personal_data .icon{
	width: 4rem;
	height: 3rem;
	line-height: 3rem;
}
.personal_data .icon_address{
	background: url(../assets/icons/icon_address.png) no-repeat center;
	background-size: 50%;
}
.personal_data .icon_wallet{
	background: url(../assets/icons/icon_wallet.png) no-repeat center;
	background-size: 50%;
}
.personal_data .icon_service{
	background: url(../assets/icons/icon_service.png) no-repeat center;
	background-size: 50%;
}
.personal_data .icon_set{
	background: url(../assets/icons/icon_set.png) no-repeat center;
	background-size: 50%;
}
.personal_data .icon_recommend{
	background: url(../assets/icons/icon_recommend.png) no-repeat center;
	background-size: 40%;
}
</style>
