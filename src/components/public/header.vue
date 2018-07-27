<template>
    <div class="header">
        {{msg}}
    </div>
</template>
<script>
export default {
  name: 'header',
  data () {
    return {
      msg: 'this is header'
    }
  }
}
</script>
<style lang="less">
.header {
  background: black;
  color: #fff;
}
</style>
