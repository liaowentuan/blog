<template>
    <div class="header">
      <div class="headerInner">
        {{msg}}
      </div>
    </div>
</template>
<script>
export default {
  name: 'myHeader',
  data () {
    return {
      msg: 'this is header'
    }
  }
}
</script>
<style lang="less" scoped>
.header {
  .headerInner{
    margin: 0 auto;
    max-width: 1000px;
    padding: 0 20px;
  }
  background: black;
  color: #fff;
  position: fixed;
  top: 0;
  height: 40px;
  line-height: 40px;
  width: 100%;
}
</style>
