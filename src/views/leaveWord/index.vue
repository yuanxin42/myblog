<template>
  <div class="leave-word">
    <div class="banner"></div>
    <!-- <h2>碎言碎语</h2> -->
    <div class="form">
      <el-form
        ref="form"
        :model="form"
        :rules="rules"
        label-width="100px"
        label-position="left"
      >
        <el-form-item label="标题:" prop="title">
          <el-input
            style="width: 300px"
            v-model="form.title"
            placeholder="请输入内容"
          ></el-input>
        </el-form-item>
        <el-form-item label="+ 照片:">
          <el-upload
            class="upload-demo"
            action="/posts/"
            :on-preview="handlePreview"
            :on-remove="handleRemove"
            :before-remove="beforeRemove"
            multiple
            :limit="3"
            :on-exceed="handleExceed"
            :file-list="form.imgUrl"
          >
            <el-button size="small" type="primary">点击上传</el-button>
            <div slot="tip" class="el-upload__tip">
              只能上传jpg/png文件，且不超过500kb
            </div>
          </el-upload>
        </el-form-item>
        <el-form-item label="想说的话:" prop="describe">
          <el-input
            style="width: 500px"
            v-model="form.describe"
            type="textarea"
            :rows="3"
            placeholder="请输入内容"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">立即创建</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
import { sendLeaveWord } from "@/api/leaveWord";

// 未填写完成
const RuleCondition = [{ required: true, message: "未填写完成" }];

// 表单校验规则
const rules = {
  title: RuleCondition,
  describe: RuleCondition,
};
export default {
  data() {
    return {
      form: {
        title: "",
        describe: "",
        imgUrl: [
          {
            name: "food.jpeg",
            url: "https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100",
          },
          {
            name: "food2.jpeg",
            url: "https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100",
          },
        ],
      },
      rules,
    };
  },
  methods: {
    /**
     * 提交留言板
     */    
    onSubmit() {
      sendLeaveWord();
    },
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
    },
    handleExceed(files, fileList) {
      this.$message.warning(
        `当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${
          files.length + fileList.length
        } 个文件`
      );
    },
    beforeRemove(file) {
      return this.$confirm(`确定移除 ${file.name}？`);
    },
  },
  // inject: ['foo'],
  mounted() {},
};
</script>
<style lang='less' scoped>
.leave-word {
  .banner {
    background-image: url("../../assets/image/pixiv54839592.png");
    height: 300px;
    background-size: contain;
  }
  .form {
    // margin: 0 auto;
    width: 500px;
    padding-top: 20px;
    margin: 0 auto;
    /deep/ .el-input input {
      height: 35px;
      line-height: 35px;
    }
  }
}
</style>
