<template>
  <div>
    <el-row>
      <el-menu :default-active="activeIndex" :router="true" class="el-menu-demo" mode="horizontal" @select="handleSelect" background-color="#3a5163" text-color="#fff" active-text-color="#ffd04b">
        <el-col class="title" :span="4">
          <el-menu-item :router="false" index="/" background-color="#fff">
            <el-row>
              <el-col class="tit-logo" :span="17">
              </el-col>
              <el-col class="tit-letter" :span="3">
                My博客
              </el-col>
              <!-- <img src="@/assets/image/023504o9N.jpg">  -->
            </el-row>
          </el-menu-item>
        </el-col>
        <el-col class="title" :span="3">
          <el-menu-item index="/index">
            <!-- <router-link tag='span' to="/allComponents/details"> -->
              首页
            <!-- </router-link> -->
          </el-menu-item>
        </el-col>
        <el-col class="title" :span="3">
          <el-menu-item index="/diary">我的日记</el-menu-item>
        </el-col>
        <el-col class="title" :span="3">
          <el-menu-item index="/allComponents">demo组件库</el-menu-item>
        </el-col>
        <el-col class="title" :span="3">
          <el-menu-item index="/myfeel">读书感受</el-menu-item>
        </el-col>
        <el-col class="title" :span="3">
          <el-menu-item disabled index="/myfeel">源码心得</el-menu-item>
        </el-col>
      </el-menu>
    </el-row>
    <router-view/>
  </div>
</template>

<script>
export default {
  // name: 'HelloWorld',
  data () {
    return {
      activeIndex: '1'
    }
  },
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.el-menu-demo {
  border: 0;
}

.title {
  text-align: center;
}

.title:first-child .tit-logo {
  height: 56px;
  background: url('../assets/image/023504o9N1.jpg') no-repeat;
  background-size: 100% 100%;
}

.title:first-child .tit-letter {
  font-size: 16px;
}

/* .title:first-child img{
       display: inline-block;
        height: 56px;
    } */
</style>
