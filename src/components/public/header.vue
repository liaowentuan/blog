<template>
    <div class="header">
      <div class="headerInner">
        <span class="title">{{msg}}</span>
        <ul class="toggle">
          <li v-for="item in options" :key="item.value"><i @click="chooseColor(item.value)" :class="'toggle-skin' + item.value"></i></li>
        </ul>
      </div>
    </div>
</template>
<script>
export default {
  name: 'myHeader',
  data () {
    return {
      msg: '',
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
    chooseColor (item) {
      document.body.className = 'style-' + item
      window.localStorage.skin = document.body.className
    }
  },
  created () {
    if (!window.localStorage.skin) {
      document.body.className = 'style-blue'
    } else {
      document.body.className = window.localStorage.skin
    }
  },
  mounted () {
    this.$nextTick(_ => {
      let url = '/static/json/header/header.json'
      this.$http({
        url,
        method: 'GET'
      }).then(res => {
        this.msg = res.data.headerMsg
      }, err => {
        console.log(err)
      })
    })
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
      .title{
        font-weight: 900;
        font-size:  18px;
      }
      .toggle{
        float: right;
        li{
          float: left;
          margin: 0 10px;
        }
      }
      [class^='toggle-skin']{
        display: inline-block;
        width: 10px;
        height: 10px;
        border: 2px solid @shadow;
        background: @deep;
      }
      [class $='orangeYellow']{
        border: 2px solid #FFF367;
        background: #FFC90F;
      }
      [class $='orangeRed']{
        border: 2px solid #FF7559;
        background: #FF0E13;
      }
      [class $='black']{
        border: 2px solid #ddd;
        background: #000;
      }
      [class $='blue']{
        border: 2px solid #ABC6FF;
        background: #1570E8;
      }
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
