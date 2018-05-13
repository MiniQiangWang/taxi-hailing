<template>
  <div class="bank">
    <header>
      <div class="top_nav"> 
      	<a class="header_left icon_personal" @click="changeShowFlag"></a>
        <span class="sp_nav"><strong>{{localCity !== '' ? localCity: "定位中..."}}</strong></span>
        <a class="hear_right icon_package"></a>
      </div>
      <div class="top_as"></div>
    </header>
    <!--头部结束-->
    
    <!--内容开始-->
		<div class="map" id="l-map" ref="lmap"></div>

    <div class="div_map" v-show="true">
    	<div class="map_infor">
    		<div class="map_min">
    			<span class="icon_blue"></span>
    			<input type="text" id="startId" ref="startId" size="20" value="" placeholder="请输入上车点" style="width:23rem;" />
					<div id="searchStartPanel" style="position:fixed;top:6rem;border:1px solid #C0C0C0;width:150px;height:3rem; display:none;"></div>
    		</div>
    		<div class="map_min">
    			<span class="icon_org"></span>
    			<input type="text" id="endId" ref="endId" size="20" value="" placeholder="请目的地" style="width:23rem;" />
					<div id="searchEndPanel" style="position:fixed;top:6rem;border:1px solid #C0C0C0;width:150px;height:3rem; display:none;"></div>
    		</div>
    		
    		<div class="div_display"  v-show="mapBtnFlag">
					<div class="map_div01">
					<!-- <span>是否与附近的人拼车</span> -->
    			<select>
    				<option>是否拼车</option>
    				<option>快车</option>
    			</select>
    		</div>
    		</div>
    		<div v-bind:class="[showIcon ? iconDropUp : iconDropDown, ]" @click="changeMapBtnFlag"></div>
    	</div>
    	<div class="div_map_btn">
    		<a class="call_car" @click="callACar">立即叫车</a>
    	</div>
    </div>
    <!--内容结束-->
    <!--模太框-->
    <div class="div_model animation01" v-show="showFlag">
      <div class="skid_bar">
        <div class="user_portrait" @click="showCenterPage">
          <span class="icon_portrait"><img src="../assets/icons/icon_portrait.png"></span>
          <span class="user_mame">{{personName}}</span>
        </div>
        <div class="personal_data">
          <ul>
            <li>
              <a>
              <span class="icon icon_address"></span>
              <span>行程</span>
              </a>
            </li>
            <li>
              <a>
              <span class="icon icon_wallet"></span>
              <span>钱包</span>
              </a>
            </li>
            <li>
              <a>
              <span class="icon icon_service"></span>
              <span>聊天功能</span>
              </a>
            </li>
            <!-- <li>
              <a>
              <span class="icon icon_set"></span>
              <span>设置</span>
              </a>
            </li> -->
          </ul>
        </div>
      </div>
      <div class="model_none" @click="changeShowFlag"></div>
    </div>
  </div>
</template>

<script>
	import BMap from 'BMap';
  export default {
    components: {

    },
    data() {
      return {
        selected: "",
        showFlag: false,
        mapBtnFlag: false,
        showIcon: true,
        iconDropUp:"icon-drop-up",
				iconDropDown:"icon-drop-down",
				initPoint:'',
				localCity:'',
				// map : new BMap.Map("l-map",{minZoom:16,maxZoom:16}),
				// point : new BMap.Point(11.331398,39.897445)
				//myMap: '',
				startPoint:'',
				endPoint:'',
				startPointNum:{},
				endPointNum:{}
      }
		},
		computed: {
			personName() {
				return this.$store.state.login.userMsg.personName
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
					
					_this.initPoint = r.point;
					
					map.addOverlay(mk);
					// 将地图的中心点更改为给定的点
					map.panTo(r.point);
				}else {
					alert('failed'+this.getStatus());
				}        
			});
			

		// 	//*********************关键字索引框

			function G(id) {
				return document.getElementById(id);
			}

			var ac = new BMap.Autocomplete(    //建立一个自动完成的对象
				{
					"input" : "startId",
					"location" : map
				});
				var bc = new BMap.Autocomplete(    //建立一个自动完成的对象
				{
					"input" : "endId",
					"location" : map
				});

			var myValue;
			// 测试
			ac.addEventListener("onconfirm", function(e) {    //鼠标点击下拉列表后的事件
				
				var localSearch = new BMap.LocalSearch(map);
				localSearch.enableAutoViewport(); //允许自动调节窗体大小
				
				var _value = e.item.value;
				myValue = _value.province +  _value.city +  _value.district +  _value.street +  _value.business;

				searchByStationName();
				function searchByStationName() {
				　　var keyword = myValue;
				　　localSearch.setSearchCompleteCallback(function (searchResult) {
				　　　　var poi = searchResult.getPoi(0);
				　　　　_this.startPointNum.lng = poi.point.lng;
						   _this.startPointNum.lat = poi.point.lat;
				　　});
				　　localSearch.search(keyword);
				}

				G("searchStartPanel").innerHTML ="onconfirm<br />index = " + e.item.index + "<br />myValue = " + myValue;
				_this.startPoint = myValue;
				console.log(_this.startPoint)
				if(!_this.$refs.endId.value) {
					setPlace();
				}else {
					drawRoute();
				}
			});
			bc.addEventListener("onconfirm", function(e) {    //鼠标点击下拉列表后的事件
				var _value = e.item.value;
				myValue = _value.province +  _value.city +  _value.district +  _value.street +  _value.business;
				G("searchEndPanel").innerHTML ="onconfirm<br />index = " + e.item.index + "<br />myValue = " + myValue;
				_this.endPoint = myValue;
				console.log(_this.endPoint)
				if(!_this.$refs.startId.value) {
					setPlace();
				}else {
					drawRoute();
				}
				
			});
			function setPlace(){
				map.clearOverlays();    //清除地图上所有覆盖物
				function myFun(){
					var pp = local.getResults().getPoi(0).point;    //获取第一个智能搜索的结果
					map.centerAndZoom(pp, 18);
					map.addOverlay(new BMap.Marker(pp));    //添加标注
				}
				var local = new BMap.LocalSearch(map, { //智能搜索
					onSearchComplete: myFun
				});
				local.search(myValue);
			}
			function drawRoute () {
				var p1 = new BMap.Point(116.301934,39.977552);
				var p2 = new BMap.Point(116.508328,39.919141);

				console.log(_this.startPoint,_this.endPoint,"111",p1,p2);
				var driving = new BMap.DrivingRoute(map, {renderOptions:{map: map, autoViewport: true},
					onPolylinesSet:function(routes) { 
            searchRoute = routes[0].getPolyline();//导航路线
            map.addOverlay(searchRoute); 
					}, 
					onMarkersSet:function(routes) {
							map.removeOverlay(routes[0].marker); //删除起点
								map.removeOverlay(routes[1].marker);//删除终点
					}
        });
				driving.search(_this.startPoint,_this.endPoint);
			}


			// ***********************地图点击事件
			// function showInfo(e){
			// 	console.log(e.point.lng + ", " + e.point.lat);
			// 	_this.startPointNum.lng = e.point.lng;
			// 	_this.startPointNum.lat = e.point.lat;
			// }
			// map.addEventListener("click", showInfo);
		},
    methods: {
      changeShowFlag() {
        this.showFlag = !this.showFlag;
      },
      changeMapBtnFlag() {
        this.showIcon = !this.showIcon;
        this.mapBtnFlag = !this.mapBtnFlag;
			},
			showCenterPage() {
				this.$router.push('/center');
			},
			callACar() {
				
			}
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/*头部导航*/
#l-map {
	position: fixed;
	height: 90%;
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
	padding-top: 10px;
	padding-bottom: 25px;
	background: #fff;
	margin: 0 auto;
	position: relative;
	top: 20px;
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
	width: 75%;
	font-size: 1.2rem;
	height: 3rem;
	line-height: 3rem;
	text-align: center;
	color: #FFFFFF;
	display: block;
	margin: 0 auto;
	margin-top: 40px;
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
