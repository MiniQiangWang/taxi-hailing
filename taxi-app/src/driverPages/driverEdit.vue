<template>
  <div class="bank">
    <header v-show="headerShowTip">
      <div class="top_nav"> 
      	<a class="header_left icon_left" @click="gotoCenterPage"></a>
        <span class="sp_nav">编辑资料</span>
        <a class="hear_right" @click="finish">完成</a>
      </div>
    </header>
    <!--头部结束-->
    <!-- <div class="bg_bank" v-show="!headerShowTip">
      <a class="btn-login" ><span>继续编辑</span></a>
	  <a class="btn-login" @click="finish"><span>保存资料</span></a>
  	</div> -->
    <!--内容开始-->
    <div class="data_min bgbody">
   	  <div class="user_list_infor">
   		<ul>
			<li>
   				<span>姓名</span>
   				<input type="text" class="input01" ref="d_name" maxlength="6" :placeholder="driverMsg.d_name || '未填写'" :value="driverMsg.d_name"/>
   			</li>
   			<li>
   				<span>性别</span>
   				<input type="text" class="input01" ref="d_sex" maxlength="1" :placeholder="driverMsg.d_sex || '未填写'" :value="driverMsg.d_sex"/>
   			</li>
   			<li>
   				<span>年龄</span>
   				<input type="text" class="input01" ref="d_age" maxlength="2" :placeholder="driverMsg.d_age || '未填写'" :value="driverMsg.d_age"/>
   			</li>
   			<li>
   				<span>手机号</span>
   				<input type="text" class="input01" ref="d_phone" maxlength="11" :placeholder="driverMsg.d_phone || '未填写'" :value="driverMsg.d_phone"/>
   			</li>
			<li style="display:inline-block;height:8rem;width:100%;">
   				<span style="display:inline-block;height:5rem;float:left;">家庭住址</span>
				<textarea name="" class="input01" style="width:72%;height:7rem;border:1px solid #ddd;margin:0.5rem;" ref="d_address" maxlength="100" :placeholder="driverMsg.d_address || '未填写'" :value="driverMsg.d_address" ></textarea>
   			</li>
   		</ul>
   		<ul>
   			<li>
   				<span>驾驶证号</span>
   				<input type="text" class="input01" ref="ID_number" maxlength="18" :placeholder="driverMsg.ID_number || '未填写'" :value="driverMsg.ID_number"/>
   			</li>
   			<li>
   				<span>车型</span>
   				<input type="text" class="input01" ref="car_model" maxlength="15" :placeholder="driverMsg.car_model || '未填写'" :value="driverMsg.car_model"/>
   			</li>
            <li>
   				<span>车牌号</span>
   				<input type="text" class="input01" ref="car_plate" maxlength="8" :placeholder="driverMsg.car_plate || '未填写'" :value="driverMsg.car_plate"/>
   			</li>
            <li>
   				<span>所属公司</span>
   				<input type="text" class="input01" ref="d_company" maxlength="20" :placeholder="driverMsg.d_company || '未填写'" :value="driverMsg.d_company"/>
   			</li>
   		</ul>
   	  </div>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
	data () {
		return {
			headerShowTip:true
		}
	},
	computed: {
		...mapState({
			driverMsg:state => {
				return state.driverLogin.driverMsg
			},
			editExitTip: state => {
				return state.driverLogin.editExitTip
			}
		})
  },
	methods: {
		gotoCenterPage() {
			this.$router.go(-1);
		}, 
		finish() {
			var _this = this;
			var valueMsg = {
                d_name: this.$refs.d_name.value,
                d_sex: this.$refs.d_sex.value,
                d_address: this.$refs.d_address.value,
                d_phone: this.$refs.d_phone.value,
                d_age: this.$refs.d_age.value,
                ID_number: this.$refs.ID_number.value,
                car_model:this.$refs.car_model.value,
                car_plate:this.$refs.car_plate.value,
                d_company:this.$refs.d_company.value
			}
			this.$store.commit("changeDriverInfo", valueMsg);
			// if(this.editExitTip == true) {
				this.$store.commit('changeEditExitTip', false);
				setTimeout(function () {
					_this.$router.push('/dcenter');
				},100);
				
			// }
			
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
      color: #000;
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
