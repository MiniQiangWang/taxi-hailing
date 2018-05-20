<template>
<div class="bank">
  <!--头部开始-->
	<header>
      <div class="top_nav"> 
      	<a class="header_left icon_left" @click="backDhome"></a>
        <span class="sp_nav">附近乘客</span>
		<a class="hear_right icon_package" @click="refreshList"></a>
      </div>
      <div class="top_as"></div>
    </header>
    <!--头部结束-->
    
    <!--内容开始-->
		<div class="schedule_min bgbody">
			
			<div class="cardInfo_content">
				<div class="con_div001">
					<ul>
						<li v-for="(item,index) in orderList" :key="item.id">
							<div><span class="kuaiche">拼车</span></div>
							<div><span class="icon_time"></span>下单时间 {{item.o_date}}</div>
							<div><span class="icon_blue"></span>{{item.start_place}}</div>
							<div><span class="icon_org"></span>{{item.end_place}}</div>
							<button @click="acceptOrderItem(index)">接单</button>
						</li>
					</ul>
				</div>
			</div>
			<div class="no_more">没有更多了</div>
		</div>
    </div>
</template>

<script>
import BMap from 'BMap';
export default {
  data() {
	  return {
		  index:''
	  }
  },
  computed: {
	orderList() {
		return this.$store.state.orderList.orderList;
	},
	driverMsg() {
		return this.$store.state.driverLogin.driverMsg;
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
		},
		getAcceptResult(result) {
			if(result === 'not_exist') {
				var message = {
					msg:this.driverMsg.d_userName,
					initPoint:this.initPoint
				}
				this.$socket.emit('setAccept', message);
			}else {
				this.$store.commit('setPMsg', result);
				this.$router.push('/pmsg');
			}
		}

	},
  created() {

  },
  mounted() {
	  var geolocation = new BMap.Geolocation();
	  this.geolocation = geolocation;
  },
  methods:{
	backDhome() {
		this.$router.go(-1);
	},
	acceptOrderItem(index) {
		this.index = index;
		var acceptMsg = {
			o_id:this.orderList[index].o_id,
			d_name: this.driverMsg.d_name,
			d_phone: this.driverMsg.d_phone,
			car_model: this.driverMsg.car_model,
			car_plate: this.driverMsg.car_plate
		};
		this.$socket.emit('setAcceptOrder', acceptMsg);
	},
	refreshList() {
		var _this = this;
		// var geolocation = new BMap.Geolocation();
		this.geolocation.getCurrentPosition(function(r){
			if(this.getStatus() == BMAP_STATUS_SUCCESS){
				_this.$store.commit('setInitPoint', r.point);
				var message = {
					msg:_this.driverMsg.d_userName,
					initPoint:_this.initPoint
				}
				_this.$socket.emit('setAccept', message);
				console.log(r.point.lat, r.point.lng);
			}else {
				alert('failed'+this.getStatus());
			}
		},{enableHighAccuracy: true});
	}
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
	background: url(../assets/icons/icon_refresh.png) no-repeat center;
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


