<template>
    <div class="header">
      <div class="headerInner">
        <span>{{msg}}</span>
        <span>换肤</span>
        <el-select v-model="value" placeholder="请选择" size="small" @change="chooseColor">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </div>
    </div>
</template>
<script>
export default {
  name: 'myHeader',
  data () {
    return {
      msg: 'this is header',
      options: [
        {label: '橘黄', value: 'orangeYellow'},
        {label: '橘红', value: 'orangeRed'},
        {label: '黑白', value: 'black'},
        {label: '蓝色', value: 'blue'}
      ],
      value: ''
    }
  },
  methods: {
    chooseColor () {
      document.body.className = 'style-' + this.value
    }
  }
}
</script>
<style lang="less" scoped>
@import '../../common/changeColor';
.changeColor(@deep, @shadow) {
  .header {
    .headerInner{
      margin: 0 auto;
      max-width: 1000px;
      padding: 0 20px;
    }
    background: @deep;
    color: #fff;
    position: fixed;
    top: 0;
    height: 40px;
    line-height: 40px;
    width: 100%;
  }
}

</style>
