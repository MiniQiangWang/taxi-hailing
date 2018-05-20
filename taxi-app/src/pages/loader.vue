<template>
<div class="bank">
<header>
      <div class="top_nav"> 
        <span class="sp_nav"><strong>等待司机接单</strong></span>
      </div>
    </header>
<transition enter-active-class="animated slideInUp"  leave-class="animated fadeOutRight">
    
  <div class="call-wrapper">
    <div class="call-tips">
      <p class="title">{{title}}</p>
    </div>

    <div class="top-car-region" v-if="!contShowTip">
      <div class="driver-card-wraper border-bottom-1px">
        <div class="driver-card-content">
          <div class="driver-card-avatar">
            <img src="//taxife.didistatic.com/static/fe/default_driver_avator_v5.png">
          </div>
          <div class="driver-card-call">
            <a :href="'tel:'+ gottenOrder.d_phone" class="driver-card-phone">
              <div>
                <img src="../assets/icons/icon_blackphone.png" alt="" style="height:2.5rem;width:2.5rem;">
              </div>
            </a>
          </div>
          <div class="driver-card-info">
            <div class="driver-card-name-star-num">
              <span class="driver-card-name">{{gottenOrder.driver+'师傅'}}</span>
            </div>
            <div class="driver-card-licence-special">
              <div class="driver-card-licence">{{gottenOrder.car_plate}}</div>
            </div>
            <div class="driver-card-cartype">{{gottenOrder.car_model}}</div>
          </div>
        </div>
      </div>
    </div>

    <div class="state" v-show="contShowTip">
      <div class="loader">
        <svg width="240" height="240" xmlns="http://www.w3.org/2000/svg">
          <circle r="90" cy="120" cx="120" stroke-width="3" opacity="0.2" stroke="#333" fill="none" />
          <circle class="circle-one" id="backdrop" r="90" cy="120" cx="120" stroke-width="3" stroke-linecap="round" stroke="rgb(8,200,251)" fill="none" />
        </svg>
        <div class="loader-tip">
          <p>请等待司机接单...</p>
        </div>
      </div>
    </div>
    <div class="bottom arrive">
      <div>
        <button class="cancle" @click="gotoArrivedPage">
          <span>司机已到达</span>
        </button>
      </div>
    </div>
    <div class="bottom">
      <div>
        <button class="cancle" @click="back">
          <span>取消订单</span>
        </button>
      </div>
    </div>
  </div>
</transition>
</div>
</template>

<script>
import VueSocketio from 'vue-socket.io';
import {mapState} from 'vuex'
export default {
    data () {
      return{
          title: '您的订单已发布到附近的司机',
          contShowTip: true
      }
    },
    computed: {
      ...mapState({
        o_id: state => {
          return state.callCar.initOrderList.o_id;
        },
        gottenOrder: state => {
          return state.orderList.gottenOrder;
        }
      })
    },
    sockets: {
      gotoGottenOrder(data) {
        console.log(data);
        this.title = '司机已接单，正在赶来，请稍等...';
        this.$store.commit('setGottenOrder', data);
        this.contShowTip = !this.contShowTip;
      },
      gotoArrived() {
        this.$router.push('/arrived');
      }
    },
    methods: {
        back() {
            console.log(this.o_id);
            this.$socket.emit('setDeleteOrder', this.o_id);
            this.$router.go(-1);
        },
        gotoArrivedPage() {
          console.log("zhelicuo",this.gottenOrder.o_id);
          this.$socket.emit('setStartStatus',this.gottenOrder.o_id);
        }
    },
    watch: {

    },
    mounted() {

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
  background:#fff;
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
.call-wrapper {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    width: 100%;
    padding-top: 150px;
    animation-duration: .5s;
}
.call-tips {
  height: 60px;
  /*line-height: 60px;*/
}
.call-tips .title {
  font-size: 20px;
}

.loader {
  position: relative;
}

.loader-tip {
  width: 100%;
  position: absolute;
  top: 88px;
  color: #FC9153;
  text-align: center;
}

.loader-tip>p {
  color: #6C6C6C;
  font-size:1.5rem;
}

.circle-wapper {
  width: 110px;
  height: 40px;
  position: absolute;
  top: 98px;
  transform-origin: 0 50%;
  transform: rotate(-90deg);
  animation: circleRoate infinite linear 30s;
  z-index: 99;
}

@keyframes circleRoate {
  to {
    transform: rotate(270deg)
  }
}

.circle-one {
  transform: rotate(-90deg);
  transform-origin: 50% 50%;
  stroke-dasharray: 566px;
  stroke-dashoffset: 566px;
  animation: progressAnimation 30s linear infinite;
}

@keyframes progressAnimation {
  to {
    stroke-dashoffset: 0px;
  }
}

.circle-demo {
  width: 40px;
  height: 40px;
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  border-radius: 50%;
  background-color: #FC9153;
  position: absolute;
  right: 0;
}

.call-wrapper .bottom {
  width: 100%;
  position: absolute;
  bottom: 4rem;
}
.call-wrapper .arrive {
  bottom: 11rem;
}
.call-wrapper .bottom>div{
  width: 80%;
  margin-left: 10%;
  box-shadow: 1px 1px 10px #ccc;
  display: flex;
  justify-content: space-around;
}
.call-wrapper .bottom button {
    font-size: 1.5rem;
    width:100%;
  background: #fff;
  border: none;
  padding: 10px 10px;
    box-shadow: 1px 1px 10px #ccc;
}
.top-car-region {
  width: 80%;
  top: 0;
  z-index: 999;
  box-shadow: 0 2px 3px rgba(0, 0, 0, .12);
}

.driver-card-wraper {

  /*border: 1px solid #000;*/
  border-radius: 2px;
  background-color: #fff;
  line-height: 1;
}

.driver-card-content {
  padding: 16px;
  height: 60px;
}

.driver-card-avatar {
  position: relative;
  float: left;
  width: 60px;
  height: 100%;
  margin-right: 10px;
  border-radius: 50%;
  background-color: #f9f9f9;
}

.driver-card-avatar>img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
}

.driver-card-call {
  height: 100%;
  float: right;
  line-height: 60px;
  font-size: 0;
}

.driver-card-call>a {
  position: relative;
  font-size: 20px;
  color: #666;
  text-decoration: none;
  display: inline-block;
  height: 36px;
  width: 36px;
  border: 1px solid rgba(0, 0, 0, .4);
  line-height: 32px;
  vertical-align: middle;
  text-align: center;
  border-radius: 50%;
  margin-left: 12px;
}

.fa-icon {
  fill: rgba(0, 0, 0, .4);
}

.driver-card-info {
  text-align: left;
  font-size: 12px;
}

.driver-card-info>div {
  padding: 4px 0;
}

.driver-card-name {
  font-size: 16px;
  color: #333;
}
</style>