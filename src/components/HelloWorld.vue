<template>
  <div class="hello">
    <div class="background">

    </div>

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
.hello{
  .background{
    background: url('/static/img/3bad1ed4ce5beaab815d8fbd97729e46.jpg') no-repeat 0 center fixed;
    background-size: 100%;//此处要注意，可以填cover也可以填100%。建议填100%
    display: block;
    min-height: 400px;
    position: fixed;
    left: 0;
    top: 40px;
    right: 0;
  }
}
</style>
