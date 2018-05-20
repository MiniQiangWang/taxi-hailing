<template>
  <div class="btn-wrap">
    <div class="btn" @click="gotoPassagerLogin">我是乘客</div>
    <div class="btn" @click="gotoDriverLogin">我是司机</div>
  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  methods:{
    gotoPassagerLogin() {
      this.$router.push('/user');
    },
    gotoDriverLogin() {
      this.$router.push('/dlogin');
    }
  }
}
</script>


<style scoped>
  .btn-wrap {
    position:fixed;
    display: flex;
        flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    background: rgba(60,204,246);
  }
  .btn {

    display: inline;
    width: 15rem;
    height: 15rem;
    margin: 1rem;
    background: #eff;
    color: #777;
    line-height: 15rem;
    text-align: center;
    border-radius: 15%;
    font-size: 3rem;
  }
</style>
