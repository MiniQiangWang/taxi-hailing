<template>
    <div class="bank">
        <header v-show="showContFlag">
            <div class="top_nav"> 
                <a class="header_left icon_left" @click="backToHome"></a>
                <span class="sp_nav">个人中心</span>
            </div>
        </header>
        <div class="cont-wrap" v-show="showContFlag">
            <div class="feed-wrap">
                <textarea name="feed" class="feed" id="" cols="30" rows="10" placeholder="输入反馈内容,至少10个字" v-model="innerText"></textarea>
            </div>
            <div class="send-btn" @click="sendFeedMsg">提交反馈信息</div>
            <div class="re_regist02">
                <a class="" href="tel:0147-88469258">打给客服，人工受理</a>
            </div>
        </div>
        <div class="mask" v-show="!showContFlag">反馈成功!</div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    data() {
        return {
            innerText:'',
            showContFlag:true
        }
    },
    computed: {
        userName(){
            return this.$store.state.login.userMsg.userName;
        }
    },
    methods: {
        sendFeedMsg() {
            if(this.innerText == '' || this.innerText.split('').length < 11) {
                return;
            }
            axios.post('/feed/getFeed', {
                userName:this.userName,
                feedText:this.innerText
            }).then((response)=>{
                let res = response.data;
                let userMsg = res.result;
                if(res.status !== '1'){
                    this.sendSuccess();
                }else{

                }})

            this.innerText = '';
        },
        backToHome() {
            this.$router.go(-1);
        },
        sendSuccess() {
            var _this = this;
            this.showContFlag = false;
            setTimeout(function () {
                _this.backToHome();
            },1000)
        }
    }
}
</script>


<style scoped>
.mask {
    position: fixed;
    text-align: center;
    color: rgb(8,200,255);
    font-size: 2.5rem;
    width:20rem;
    height: 20rem;
    line-height: 20rem;
    left: 50%;
    top: 50%;
    transform:translateX(-50%) translateY(-50%);
}
.bank{
	position:fixed;
    display: flex;
    flex-wrap:wrap;
    justify-content: center;
	top:0;
	width:100%;
    height: 100%;
}
.cont-wrap {
    width: 100%;
    height: 100%;
    display: flex;
    flex-wrap:wrap;
    justify-content: center;
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
.feed-wrap {
    margin-top: 6rem;
    width: 85%;
    height: 50%;
}
.feed-wrap .feed {
    width: 100%;
    height: 100%;
    border-radius: 0.5rem;
    border: 1px solid #ddd;
    background-color: #fff;
}

.send-btn {
    width: 85%;
    height: 5rem;
    border-radius: 0.5rem;
    background-color:rgb(8,200,251);
    color: #fff;
    text-align: center;
    line-height: 5rem;
    font-size: 2rem;
}
.re_regist02 {
    width: 100%;
    margin-top: 20px;
    text-align: center;
    color: rgb(8, 200, 251);
}
.re_regist02 a{
	text-decoration: underline;
}
</style>
