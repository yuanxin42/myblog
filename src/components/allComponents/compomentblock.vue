<template>
    <div class="clothes">
        <el-row>
            <el-col class="card" :span="5" v-for="(o) in 6" :key="o" :offset="2">
                <router-link tag='span' to="./allComponents/details">
                    <el-card style="cursor:pointer;" shadow="hover" :body-style="{ padding: '0px' }">
                        <img src="@/assets/logo.png" class="image">
                        <div style="padding: 14px;">
                            <span>好吃的汉堡</span>
                            <div class="bottom clearfix">
                                <el-row>
                                    <el-col :span="17">
                                        <time class="time">{{ currentDate }}</time>
                                    </el-col>
                                    <el-col :span="7">

                                        <el-button type="text" class="button">操作按钮</el-button>

                                    </el-col>
                                </el-row>
                            </div>
                        </div>
                    </el-card>
                </router-link>
            </el-col>
        </el-row>
    </div>
</template>
<script>
export default {
  // name: 'HelloWorld',
  data () {
    return {
      activeIndex: '1',
      currentDate: new Date()
    }
  },
  methods: {
  }
}
</script>
<style scoped>
.time {
    font-size: 13px;
    color: #999;
}

.bottom {
    margin-top: 13px;
    line-height: 12px;
}

.button {
    padding: 0;
    float: right;
}

.image {
    width: 100%;
    height: 230px;
    display: block;
}

.clearfix:before,
.clearfix:after {
    display: table;
    content: "";
}

.clearfix:after {
    clear: both
}

.card {
    margin-top: 30px;
}
</style>
