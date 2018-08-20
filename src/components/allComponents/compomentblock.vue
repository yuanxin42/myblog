<template>
    <div>
        <!-- <el-row>
                                                                                <el-col :span="12">
                                                                                    <div class="demo-input-suffix">
                                                                                        属性方式：
                                                                                        <el-input size="medium" placeholder="请选择日期" suffix-icon="el-icon-date" v-model="input2">
                                                                                        </el-input>
                                                                                        <el-input size="medium" placeholder="请输入内容" prefix-icon="el-icon-search" v-model="input21">
                                                                                        </el-input>
                                                                                    </div>
                                                                                </el-col>
                                                                                <el-col :span="12">
                                                                                    <div class="demo-input-suffix">
                                                                                        slot 方式：
                                                                                        <el-input size="medium" placeholder="请选择日期" v-model="input22">
                                                                                            <i slot="suffix" class="el-input__icon el-icon-date"></i>
                                                                                        </el-input>
                                                                                        <el-input size="medium" placeholder="请输入内容" v-model="input23">
                                                                                            <i slot="prefix" class="el-input__icon el-icon-search"></i>
                                                                                        </el-input>
                                                                                    </div>
                                                                                </el-col>
                                                                            </el-row> -->
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
      currentDate: new Date(),
      input2: '',
      input21: '',
      input22: '',
      input23: ''
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
