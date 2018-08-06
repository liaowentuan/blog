<template>
    <div class="header">
      <div class="headerInner">
        <span class="title">{{msg[Lang]}}</span>
        <el-menu :default-active="'resume'" class="el-menu-demo" mode="horizontal" router>
          <el-menu-item index="resume" :route="{path: '/resume'}">{{firstNavItem[Lang]}}</el-menu-item>
          <el-submenu index="skill">
            <template slot="title" style="height: 40px;line-height: 40px;">{{secondNavItem[Lang]}}</template>
            <el-submenu index="skill">
              <template slot="title">前端</template>
              <el-menu-item index="skill/Front-end/1" :route="{path: '/skill/Front-end/1'}">选项1</el-menu-item>
              <el-menu-item index="skill/Front-end/2">选项2</el-menu-item>
              <el-menu-item index="skill/Front-end/3">选项3</el-menu-item>
            </el-submenu>
            <el-submenu index="2-2">
              <template slot="title">后端</template>
              <el-menu-item index="2-2-1">选项1</el-menu-item>
              <el-menu-item index="2-2-2">选项2</el-menu-item>
              <el-menu-item index="2-2-3">选项3</el-menu-item>
            </el-submenu>
            <el-submenu index="2-3">
              <template slot="title">计算机</template>
              <el-menu-item index="2-3-1">选项1</el-menu-item>
              <el-menu-item index="2-3-2">选项2</el-menu-item>
              <el-menu-item index="2-3-3">选项3</el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-menu-item index="3">{{thirdNavItem[Lang]}}</el-menu-item>
          <el-submenu index="4"  class="toggle">
            <template slot="title" style="height: 40px;line-height: 40px;">{{fourthNavItem[Lang]}}</template>
            <el-menu-item v-for="(item, index) in options[Lang]" index="4-1" :key="index" @click="chooseColor(item.value)">
              {{item.label}}&nbsp;<i :class="'toggle-skin' + item.value"></i>
            </el-menu-item>
          </el-submenu>
          <el-submenu index="5">
            <template slot="title" style="height: 40px;line-height: 40px;">{{fifthNavItem[Lang]}}</template>
            <el-menu-item @click="chooseLanguage('en')" index="5-1">
              English
            </el-menu-item>
            <el-menu-item @click="chooseLanguage('zh-cn')" index="5-2">
              中文
            </el-menu-item>
          </el-submenu>
        </el-menu>
      </div>
    </div>
</template>
<script>
export default {
  name: 'myHeader',
  data () {
    return {
      msg: '',
      firstNavItem: {
        'en': 'resume',
        'zh-cn': '个人简历'
      },
      secondNavItem: {
        'en': 'skill',
        'zh-cn': '技能'
      },
      thirdNavItem: {
        'en': 'Family',
        'zh-cn': '家庭'
      },
      fourthNavItem: {
        'en': 'chooseSkin',
        'zh-cn': '换肤'
      },
      fifthNavItem: {
        'en': 'language',
        'zh-cn': '语言'
      },
      options: {
        'en': [
          {label: 'orange', value: 'orangeYellow'},
          {label: 'red', value: 'orangeRed'},
          {label: 'black', value: 'black'},
          {label: 'blue', value: 'blue'}
        ],
        'zh-cn': [
          {label: '橘黄', value: 'orangeYellow'},
          {label: '血红', value: 'orangeRed'},
          {label: '黑白', value: 'black'},
          {label: '蓝色', value: 'blue'}
        ]
      },
      value: ''
    }
  },
  methods: {
    chooseColor (item) {
      document.body.className = 'style-' + item
      window.localStorage.skin = document.body.className
    },
    chooseLanguage (item) {
      if (item === 'en') {
        this.$store.commit('chooseEn')
      } else if (item === 'zh-cn') {
        this.$store.commit('chooseZh')
      }
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
      let url = '/static/api/info/header.json'
      this.$http({
        url,
        method: 'GET'
      }).then(res => {
        this.msg = res.data.headerMsg
        debugger
      }, err => {
        console.log(err)
      })
    })
  },
  computed: {
    Lang () {
      // 直接返回 state
      return this.$store.state.Lang
    }
  }
}
</script>

<style lang="less" scoped>
@import '../../common/changeColor';
.changeColor(@deep, @shadow) {
  .el-dropdown-menu__item--divided:before, .el-menu, .el-menu--horizontal>.el-menu-item:not(.is-disabled):focus, .el-menu--horizontal>.el-menu-item:not(.is-disabled):hover, .el-menu--horizontal>.el-submenu .el-submenu__title:hover{
    background: @shadow;
  }
  .el-menu--horizontal>.el-menu-item.is-active{
    border-bottom: 2px solid @deep;
  }
  [class^='toggle-skin']{
        text-align: center;
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
  .header {
    .headerInner{
      height: 40px;
      line-height: 40px;
      .el-menu{
        border-bottom: 0;
        text-align: center;
        display: inline-block;
        height: 40px;
        line-height: 40px;
        background: @deep;
        li{
          height: 40px;
          line-height: 40px;
          /deep/ div{
            height: 40px;
            line-height: 40px;
          }
          /deep/ .el-submenu__title{
            border-bottom: 2px solid @deep;
          }
          /deep/ .el-submenu__title:hover{
            background: @shadow;
          }
        }
      }
      margin: 0 auto;
      max-width: 1000px;
      padding: 0 20px;
      .title{
        font-weight: 900;
        font-size:  18px;
        float: left;
        margin: 0 10px;
      }
      .toggle {
        li {
          float: left;
          margin: 0 10px;
        }
      }
    }
    background: @deep;
    color: #fff;
    position: absolute;
    top: 0;
    height: 40px;
    line-height: 40px;
    width: 100%;
    z-index: 1000;
  }
}
</style>
