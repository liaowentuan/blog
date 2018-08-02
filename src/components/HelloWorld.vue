<template>
  <div class="main">
    <div class="content">
      <div class="background">
      </div>
    </div>
    
    <canvas id="live2d" width="280" height="250"></canvas>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style scoped lang="less">
.main{
  .content{
    width: 100%;
    max-width: 800px;
    margin: 0 auto;
    position: relative;
    .background{
      background: url('/static/img/3bad1ed4ce5beaab815d8fbd97729e46.jpg') no-repeat;
      background-size: cover;;//此处要注意，可以填cover也可以填100%。建议填100%
      display: block;
      min-height: 300px;
      position: absolute;
      left: 0;
      top: 0;
      right: 0;
    }
  }
  
}
</style>
