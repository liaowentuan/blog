<template>
  <div id="app">
    <div class="content">
      <my-header></my-header>
      <router-view/>
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
    .content{
      min-height: 400px;
    }
  }
  ul{
    list-style: none
  }
}

</style>
