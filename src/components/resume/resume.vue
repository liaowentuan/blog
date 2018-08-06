<template>
  <div class="resumeBody">
    {{msg}}
  </div>
</template>
<script>
export default {
  name: 'resume',
  data () {
    return {
      msg: 'this is msg'
    }
  }
}
</script>
<style scoped lang="less">
@import '../../common/changeColor';
.changeColor(@deep, @shadow) {
  .resumeBody{
    background: @shadow;
  }
}
</style>
