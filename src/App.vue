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
*{
  border: 0;
  margin: 0;
  padding: 0;
}
#app{
  padding-top: 40px;
  .content{
    min-height: 400px;
  }
}
</style>
