<template>
  <div class="index" >
    <div class="headertop" >
      <div class="focusinfo" @click="toclick">
        <!-- <h1 class="center-text glitch is-glitching Ubuntu-font" data-text="Hi, Mashiro!">diary</h1> -->
        <div class="header-info">
          <p>
            <i class="fa fa-quote-left"></i> You got to put the past behind you before you can move on.
            <i class="fa fa-quote-right"></i>
          </p>
          <div class="top-social_v2">
            <ul class="top-social-logo">
              <li class="logo-left-btn"><img src="https://cdn.jsdelivr.net/gh/moezx/cdn@3.1.9/img/Sakura/images/next-b.svg" alt=""></li>
              <li><img src="https://cdn.jsdelivr.net/gh/moezx/cdn@3.1.9/img/Sakura/images/sns/wechat.png" alt=""></li>
              <li><img src="https://cdn.jsdelivr.net/gh/moezx/cdn@3.1.9/img/Sakura/images/sns/wechat.png" alt=""></li>
              <li><img src="https://cdn.jsdelivr.net/gh/moezx/cdn@3.1.9/img/Sakura/images/sns/wechat.png" alt=""></li>
              <li><img src="https://cdn.jsdelivr.net/gh/moezx/cdn@3.1.9/img/Sakura/images/sns/wechat.png" alt=""></li>
              <li><img src="https://cdn.jsdelivr.net/gh/moezx/cdn@3.1.9/img/Sakura/images/sns/wechat.png" alt=""></li>
              <li><img src="https://cdn.jsdelivr.net/gh/moezx/cdn@3.1.9/img/Sakura/images/sns/wechat.png" alt=""></li>
              <li class="logo-left-btn"><img src="https://cdn.jsdelivr.net/gh/moezx/cdn@3.1.9/img/Sakura/images/next-b.svg" alt=""></li>
            </ul>
          </div>
        </div>
      </div>
      <div class="bolang-bg">
        <div class="bolang1"></div>
      </div>
    </div>
    <contain></contain>
  </div>
</template>
<script>
import contain from './contain'
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
    },
    // getlistdata () {
    //   this.$ajax.get('/url').then(function (res) {
    //     console.log(res)
    //   }).catch(function (err) {
    //     console.log(err)
    //   })
    // },
    toclick () {
      alert(2213)
    }
  },
  // inject: ['foo'],
  mounted () {
    // this.$ajax.get('/getdata', {
    //   params: { // 请求参数
    //     id: 123
    //   }
    // }).then(function (response) {
    //   console.log(response)// 请求正确时执行的代码
    // }).catch(function (response) {
    //   console.log(response)// 发生错误时执行的代码
    // })
    // // this.foo()
    // console.log(this.foo, '我是inject')
  },
  components: {
    contain
  }
}
</script>
<style lang = 'less' scoped>
.index {
  width: 100%;
  height: 100vh;
}

.headertop {
  width: 100%;
  height: 100%;
  background: url('../../assets/image/199-bigskin-3.jpg') no-repeat;
  background-size: cover;
  position: relative;
}

@keyframes bg {
    0% {
        transform: translateX(0);
    }

    100% {
        transform: translateX(50%);
    }
}

.bolang-bg {
  width: 100%;
  height: 75px;
  overflow: hidden;
  position: absolute;
  bottom: 0;
}

.bolang1 {
  /* transform: translateX(100%); */
  animation: bg 8s linear infinite;
  height: 75px;
  width: 200%;
  background: url('../../assets/image/wave1.png');
  position: absolute;
  bottom: 0;
  left: -100%;
}

.focusinfo {
  width: 800px;
  height: 230px;
  position: absolute;
  top: calc(50% - 115px);
  left: calc(50% - 400px);
  cursor: pointer;
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
  background: rgba(0, 0, 0, 0.7);
  height: auto;
  border-radius: 10px;
  margin: 20px auto;
  text-align: center;
  font-size: 16px;
  color: #eaeadf;
  font-weight: 600;
  position: relative;
}

.header-info p {
  margin: 0 0 15px 0;
}

.top-social_v2 {}

.top-social-logo {
  height: 40px;
  li {
    width: 60px;
    height: 40px;
    line-height: 40px;
    float: left;
    cursor: pointer auto !important;
  }
  .logo-left-btn {
    img {
      width: 60px;
      height: 30px;
    }
    &:first-child {
      /* transform: translateX(50%) */
      transform: rotateY(180deg);
    }
  }
}
</style>
