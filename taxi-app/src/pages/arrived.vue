<template>
  <div class="bank">
        <header>
        <div class="top_nav"> 
            <!-- <a class="header_left icon_personal"></a> -->
            <span class="sp_nav"><strong>已接单</strong></span>
            <!-- <a class="hear_right icon_package"></a> -->
        </div>
        <div class="top_as"></div>
        </header>
    <!--头部结束-->
    
    <!--内容开始-->
	<div class="map" id="l-map" ref="lmap"></div>
    <div class="cardInfo_content">
        <div><span class="kuaiche">司机 {{gottenOrder.driver}}</span></div>
        <div><span class="icon_time"></span>下单时间 {{gottenOrder.o_date}}</div>
        <div><span class="icon_blue"></span>起点{{gottenOrder.start_place}}</div>
        <div><span class="icon_org"></span>终点{{gottenOrder.end_place}}</div>
    </div>
    <!--内容结束-->
  </div>
</template>

<script>
import BMap from 'BMap';
export default {
    
    data() {
        return {


        }
    },
    computed: {
        gottenOrder() {
            return this.$store.state.orderList.gottenOrder;
        }
    },
    mounted() {
        var lmap = this.$refs.lmap;
        var map = new BMap.Map(lmap,{minZoom:6,maxZoom:17});
        var point = new BMap.Point(126.630615, 45.713664);
        map.centerAndZoom(point,14);

        map.clearOverlays();
        var driving = new BMap.DrivingRoute(map, {
            renderOptions:{map: map, autoViewport: true},
            onPolylinesSet:function(routes) { 
                var searchRoute = routes[0].getPolyline();//导航路线
                map.addOverlay(searchRoute); 
            },
            onMarkersSet:function(routes) {
                map.removeOverlay(routes[0].marker); //删除起点
                map.removeOverlay(routes[1].marker);//删除终点
            }
        });
        console.log("ooooooo",this.gottenOrder.start_place, this.gottenOrder.end_place);
        driving.search(this.gottenOrder.start_place,this.gottenOrder.end_place);
    },
    methods:{
        
    }
}
</script>


<style scoped> 

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
.cardInfo_content {
	width: 80%;
	margin: 1.5rem auto;
    position: absolute;
    top: 4rem;
    z-index: 1000;
    left: 50%;
    transform: translateX(-50%);
    font-size: 1.5rem;
    background:#ffffff;
    padding: 2rem;


}
.cardInfo_content .kuaiche{
	font-weight: bold;
}
.cardInfo_content .pingjia{
	padding-right: 1rem;
	color: #555;
	background: url(../assets/icons/icon_right.png) no-repeat right;
	background-size: 12%;
	display: inline-block;
}

.cardInfo_content .icon_time{
	  width: 2rem;
    height: 2rem;
    display: inline-block;
    /* float: left; */
    background: url(../assets/icons/icon_time.png) no-repeat left;
    background-size: 70%;

}
.cardInfo_content .icon_blue{
	width: 2rem;
    height: 2rem;
    display: block;
    float: left;
    background: url(../assets/icons/icon_blue.png) no-repeat left;
    background-size: 40%;
}
.cardInfo_content .icon_org{
	width: 2rem;
    height: 2rem;
    display: block;
    float: left;
    background: url(../assets/icons/icon_org.png) no-repeat left;
    background-size: 40%;
}
/* .arrived-btn {
    position:fixed;
    width: 80%;
    height: 3.5rem;
    background-color:blue;
    font-size: 2rem;
    text-align: center;
    line-height: 3.5rem;
    bottom: 3rem;
    color:#666;
    left: 50%;
    transform: translateX(-50%);
    z-index:10000;
} */
</style>
