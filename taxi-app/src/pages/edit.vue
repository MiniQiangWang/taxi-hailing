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
    <div class="bg_bank" v-show="!headerShowTip">
      <a class="btn-login" @click="showMask"><span>继续编辑</span></a>
	  <a class="btn-login" @click="finish"><span>保存资料</span></a>
  	</div>
    <!--内容开始-->
    <div class="data_min bgbody">
      
   	  <div class="user_list_infor">
   		<ul>
			<li>
   				<span>昵称</span>
   				<input type="text" class="input01" ref="personName" maxlength="20" :placeholder="userMsg.personName || '未填写'" :value="userMsg.personName"/>
   			</li>
   			<li>
   				<span>性别</span>
   				<input type="text" class="input01" ref="sex" maxlength="1" :placeholder="userMsg.sex || '未填写'" :value="userMsg.sex"/>
   			</li>
   			<li>
   				<span>年龄</span>
   				<input type="text" class="input01" ref="age" maxlength="2" :placeholder="userMsg.age || '未填写'" :value="userMsg.age"/>
   			</li>
   			<li>
   				<span>职业</span>
   				<input type="text" class="input01" ref="occupation" maxlength="10" :placeholder="userMsg.occupation || '未填写'" :value="userMsg.occupation"/>
   			</li>
			<li style="display:inline-block;height:8rem;width:100%;">
   				<span style="display:inline-block;height:5rem;float:left;">个性签名</span>
   				<textarea type="text" class="input01" ref="discription" style="width:72%;height:7rem;border:1px solid #ddd;margin:0.5rem;" :placeholder="userMsg.discription || '未填写'" :value="userMsg.discription"></textarea>
   			</li>
   		</ul>
   		<ul>
			<li style="display:inline-block;height:8rem;width:100%;">
   				<span style="display:inline-block;height:5rem;float:left;">住址</span>
				<textarea class="input01" style="width:72%;height:7rem;border:1px solid #ddd;margin:0.5rem;" maxlength="40" ref="address" :placeholder="userMsg.address || '未填写'" :value="userMsg.address" ></textarea>
   			</li>
   			<li>
   				<span>手机号</span>
   				<input type="text" class="input01" ref="phone" maxlength="11" :placeholder="userMsg.phone || '未填写'" :value="userMsg.phone"/>
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
			headerShowTip:true
		}
	},
	computed: {
		...mapState({
			userMsg:state => {
				return state.login.userMsg
			},
			editExitTip: state => {
				return state.login.editExitTip
			}
		})
  },
	methods: {
		gotoCenterPage() {
			console.log("跳到center");
			this.$router.go(-1);
		}, 
		showMask() {
			this.headerShowTip = !this.headerShowTip;
		},
		finish() {
			// 
			var valueMsg = {
				personName:this.$refs.personName.value,
				sex: this.$refs.sex.value,
				age:this.$refs.age.value,
				occupation: this.$refs.occupation.value,
				discription: this.$refs.discription.value,
				address: this.$refs.address.value,
				phone: this.$refs.phone.value
			}
			console.log(valueMsg)
			this.$store.commit("changeUserInfo", valueMsg);
			if(this.editExitTip == true) {
				this.$store.commit('changeEditExitTip', false);
				this.$router.push('/center');
			}
			
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
	margin-top: 5rem;
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
