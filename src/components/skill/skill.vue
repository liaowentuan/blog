<template>
  <div class="content">
    <div :class="'contentMedia-' + index % 2" v-for="(item, index) in contentList" :key="index">
      <img src="/static/img/3bad1ed4ce5beaab815d8fbd97729e46.jpg" alt="" class="contentImg">
      <a href="#">{{item.msg}}</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'skill',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      contentList: [
        {
          msg: '123'
        },
        {
          msg: '456'
        },
        {
          msg: '789'
        },
        {
          msg: '123'
        },
        {
          msg: '456'
        },
        {
          msg: '789'
        }
      ]
    }
  }
}
</script>

<style scoped lang="less">
@import '../../common/changeColor';
.changeColor(@deep, @shadow) {
  .content{
    width: 100%;
    max-width: 800px;
    margin: 0 auto;
    padding: 5px 0;
    [class^='contentMedia-'] {
      position: relative;
      z-index: 1;
      display: block;
      width: 90%;
      margin: 0 auto;
      max-width: 700px;
      height: 250px;
      background: @shadow;
      filter: opacity(0.9);
      margin: 20px auto;
      border: 4px solid @deep;
      border-radius: 5px;
      padding: 5px;
    }
    .contentImg{
      width: 300px;
      height: 200px;
      margin: 25px;
    }
    .contentMedia-1{
      .contentImg{
        float: left;
      }
    }
    .contentMedia-0{
      .contentImg{
        float: right;
      }
    }
  }
}
</style>
