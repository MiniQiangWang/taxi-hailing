<template>
<div>

</div>
  
</template>

<script>
  import { Tabbar, TabItem } from 'mint-ui';
  export default {
    components: {
      Tabbar,
      TabItem
    },
    data() {
      return {
        selected: ""
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .login {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
  }
  .mint-button {
    width: 100px;
  }
</style>
