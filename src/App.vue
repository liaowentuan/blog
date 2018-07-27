<template>
  <div id="app">
    <my-header></my-header>
    <router-view/>
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

<style>
*{
  border: 0;
  margin: 0;
  padding: 0;
}
</style>
