<template>
  <div class="index">
     <div class="headertop">
      <div class="focusinfo">
        <h1 class="center-text glitch is-glitching Ubuntu-font" data-text="Hi, Mashiro!">Hi, Mashiro!</h1>
        <div class="header-info">
          <p>
            <i class="fa fa-quote-left"></i> You got to put the past behind you before you can move on.
            <i class="fa fa-quote-right"></i>
          </p>
          <div class="top-social_v2">
            <ul class="top-social-logo">
              <li><img src="https://cdn.jsdelivr.net/gh/moezx/cdn@3.1.9/img/Sakura/images/sns/wechat.png" alt=""></li>
              <li><img src="https://cdn.jsdelivr.net/gh/moezx/cdn@3.1.9/img/Sakura/images/sns/wechat.png" alt=""></li>
              <li><img src="https://cdn.jsdelivr.net/gh/moezx/cdn@3.1.9/img/Sakura/images/sns/wechat.png" alt=""></li>
              <li><img src="https://cdn.jsdelivr.net/gh/moezx/cdn@3.1.9/img/Sakura/images/sns/wechat.png" alt=""></li>
              <li><img src="https://cdn.jsdelivr.net/gh/moezx/cdn@3.1.9/img/Sakura/images/sns/wechat.png" alt=""></li>
              <li><img src="https://cdn.jsdelivr.net/gh/moezx/cdn@3.1.9/img/Sakura/images/sns/wechat.png" alt=""></li>
            </ul>
          </div>
        </div>
      </div>
      <sir-scrolltop></sir-scrolltop>
      <div class="bolang1"></div>
      <!-- 波浪的两个图片-->
      <div class="bolang2"></div>
    </div>
     <sir-table :data="tableData5">
      <el-table-column label="商品 ID" prop="id">
      </el-table-column>
      <el-table-column label="商品名称" prop="name">
      </el-table-column>
      <el-table-column label="描述" prop="desc">
      </el-table-column>
    </sir-table>
  </div>
</template>
<script>
export default {
  // name: 'HelloWorld',
  data () {
    return {
      activeIndex: '1',
      tableData5: [{
        id: '12987122',
        name: '好滋好味鸡蛋仔',
        category: '江浙小吃、小吃零食',
        desc: '荷兰优质淡奶，奶香浓而不腻',
        address: '上海市普陀区真北路',
        shop: '王小虎夫妻店',
        shopId: '10333'
      }, {
        id: '12987123',
        name: '好滋好味鸡蛋仔',
        category: '江浙小吃、小吃零食',
        desc: '荷兰优质淡奶，奶香浓而不腻',
        address: '上海市普陀区真北路',
        shop: '王小虎夫妻店',
        shopId: '10333'
      }]
    }
  },
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
    },
    getlistdata () {
      this.$ajax.get('/url').then(function (res) {
        console.log(res)
      }).catch(function (err) {
        console.log(err)
      })
    }
  },
  mounted () {
    this.$ajax.get('/getdata', {
      params: { // 请求参数
        id: 123
      }
    }).then(function (response) {
      console.log(response)// 请求正确时执行的代码
    }).catch(function (response) {
      console.log(response)// 发生错误时执行的代码
    })
  }
}
</script>
<style scoped>
.index{
    width: 100%;
  height: 100%;
}
.headertop {
  width: 100%;
  height: 100%;
  background: url('https://cdn.jsdelivr.net/gh/moezx/cdn@3.5.2/cover/webp/199-bigskin-3.jpg.webp') no-repeat;
  background-size: cover;
  position: relative;
  z-index: -1;
}

.bolang1,
.bolang2 {
  height: 75px;
  width: 100%;
  background: url('../../assets/image/wave1.png');
  position: absolute;
  bottom: 0;
}

.bolang2 {
  bottom: 20px;
  left: -50px;
  background: url('../../assets/image/wave2.png') repeat-x;
}

.focusinfo {
  width: 800px;
  height: 230px;
  position: absolute;
  top: calc(50% - 115px);
  left: calc(50% - 400px);
}

.center-text {
  width: 615px;
  height: 100px;
  font-size: 80px;
  margin: 0 auto;
  text-align: center;
  color: white;
  font-family: 'Ubuntu', sans-serif;
}

.header-info {
  padding: 10px;
  width: 500px;
  height: auto;
  margin: 20px auto;
  text-align: center;
  background: black;
  opacity: 0.6;
  border-radius: 10px;
  font-size: 16px;
  color: #eaeadf;
  font-weight: 600;
}
.header-info p{
  margin: 0 0 15px 0;
}
.top-social_v2 {
  height: 100%;
}

.top-social-logo {
  height: 40px;
}

.top-social-logo li {
  width: 60px;
  height: 40px;
  float: left;
}
</style>
