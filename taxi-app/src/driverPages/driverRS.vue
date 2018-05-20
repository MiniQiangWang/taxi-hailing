<template>
  <div class="bg_bank">
      <a class="btn-login" @touchend="gotoLoginPage"><span>注册成功，返回登陆</span></a>
  </div>
</template>

<script>
export default {
  data() {
      return {

      }
  },
  methods: {
      gotoLoginPage () {
          this.$router.push('/dlogin');
      }
  }
}
</script>
    

<style scoped>
.bg_bank{
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    background: url(../assets/images/bg_bank.png) no-repeat;
    background-size: 100% 100%;
    opacity: .7;
    
  }
  .btn-login {
      width: 60%;
      background: #fff;
      color: rgba(90, 198, 246);
    height: 4rem;
	line-height: 4rem;
    text-align: center;
    font-size: 1.8rem;
    border-radius: 5px;
  }
</style>
