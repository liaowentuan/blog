<template>
    <div class="footer">
      <div class="footerInner">
        {{msg}}
      </div>
    </div>
</template>
<script>
export default {
  name: 'myFooter',
  data () {
    return {
      msg: 'this is footer'
    }
  }
}
</script>
<style scoped lang="less">
.footer{
  background: black;
  color: #fff;
  width: 100%;
  .footerInner{
    max-width: 1000px;
    height: 150px;
    padding: 0 20px;
    margin: 0 auto;
  }
}
</style>
