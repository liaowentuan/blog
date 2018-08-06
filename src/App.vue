<template>
  <div id="app">
    <div class="content">
      <my-header></my-header>
      <div class="main">
        <div class="background"></div>
        <router-view/>
        <canvas style="position: fixed;bottom: 0;left: 0;" id="live2d" width="280" height="250"></canvas>
      </div>
    </div>
    <my-footer></my-footer>
  </div>
</template>

<script>
import myHeader from '@/components/public/header.vue'
import myFooter from '@/components/public/footer.vue'
export default {
  name: 'App',
  components: {
    myHeader,
    myFooter
  }
}
</script>

<style lang="less">
@import '../src/common/changeColor';
*{
  border: 0;
  margin: 0;
  padding: 0;
}
.fr{
  float: right;
}
.fl{
  float: left;
}
.clear{
  clear: both;
}
.changeColor(@deep, @shadow) {
  #app{
    padding-top: 40px;
    .main{
      background: @shadow;
      .background{
        background: url('/static/img/background/background-1.jpg') no-repeat; //  3bad1ed4ce5beaab815d8fbd97729e46.jpg
        background-size: cover;
        display: block;
        position: fixed;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        // 仅限定于1920px
        margin: 0 auto;
        max-width: 1920px;
        filter: opacity(0.5);
      }
    }
  }
  ul{
    list-style: none
  }
}

</style>
