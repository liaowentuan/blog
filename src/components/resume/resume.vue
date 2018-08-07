<template>
  <div class="container">
    <div class="resumeBody">
      <el-row>
        <el-col :span="18">
          <el-row class="h40">
            <el-col :span="4">
              <span  class="tr">
                姓名：
              </span>
            </el-col>
            <el-col :span="8">
              <span>
                廖文团
              </span>
            </el-col>
            <el-col :span="4">
              <span  class="tr">
                性别：
              </span>
            </el-col>
            <el-col :span="8">
              <span>
                男
              </span>
            </el-col>
          </el-row>
          <el-row class="h40">
            <el-col :span="4">
              <span  class="tr">
                QQ：
              </span>
            </el-col>
            <el-col :span="8">
              <span>
                996002654
              </span>
            </el-col>
            <el-col :span="4">
              <span  class="tr">
                年龄：
              </span>
            </el-col>
            <el-col :span="8">
              <span>
                27
              </span>
            </el-col>
          </el-row>
          <el-row class="h40">
            <el-col :span="4">
              <span  class="tr">
                邮箱：
              </span>
            </el-col>
            <el-col :span="8">
              <span>
                996002654@qq.com
              </span>
            </el-col>
            <el-col :span="4">
              <span  class="tr">
                学历：
              </span>
            </el-col>
            <el-col :span="8">
              <span>
                大专
              </span>
            </el-col>
          </el-row>
          <el-row class="h40">
            <el-col :span="4">
              <span  class="tr">
                微信：
              </span>
            </el-col>
            <el-col :span="8">
              <span>
                L996002654
              </span>
            </el-col>
            <el-col :span="4">
              <span  class="tr">
                工作经验：
              </span>
            </el-col>
            <el-col :span="8">
              <span>
                2年
              </span>
            </el-col>
          </el-row>
        </el-col>
        <el-col :span="6">
          <img class="headPortrait" src="/static/img/3bad1ed4ce5beaab815d8fbd97729e46.jpg" alt="个人头像">
        </el-col>
      </el-row>
    </div>
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
  .container{
    background: @shadow;
      max-width: 770px;
      margin: 0 auto;
      padding: 15px;
    .resumeBody{
      border: 3px solid @deep;
      border-radius: 5px;
      padding: 15px;
      .h40{
        height: 40px;
        line-height: 40px;
      }
      .headPortrait{
        margin: 0 auto;
        width: 120px;
        height: 160px;
        display: block;
      }
      span{
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        display: block;
      }
      
    }
  }
  
}
</style>
