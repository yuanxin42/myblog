<template>
  <div class="blog">
    <sir-navmenu>
      <div slot="navtop">
        <a class="logolink" href="https://2heng.xin" alt="樱花庄的白猫">
          <span class="sakurasono"> さくら
            <ruby style="ruby-position:over;">荘
              <rp></rp>
              <rt>そ</rt>
              <rp></rp>
            </ruby>の</span>
          <span class="shironeko">
            <ruby style="ruby-position:over;">白
              <rp></rp>
              <rt>しろ</rt>
              <rp></rp>猫
              <rp></rp>
              <rt>ねこ</rt>
              <rp></rp>
            </ruby>
          </span>
        </a>
      </div>
      <div slot="allsubmenu" class="blogitems">
        <sir-submenu class="submenu">首页</sir-submenu>
        <sir-submenu class="submenu">归档</sir-submenu>
        <sir-submenu class="submenu">清单</sir-submenu>
        <sir-submenu class="submenu">留言板</sir-submenu>
        <sir-submenu class="submenu">友人帐</sir-submenu>
        <sir-submenu class="submenu">关于</sir-submenu>
        <sir-submenu class="submenu">关于</sir-submenu>
        <sir-submenu class="submenu">关于</sir-submenu>
      </div>
    </sir-navmenu>
    <div class="headertop">
      <sir-scrolltop></sir-scrolltop>
      <div class="bolang1"></div>
      <div class="bolang2"></div>
    </div>
    <router-view/>
    <router-view/>
    <router-view/>
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
.blog {
  width: 100%;
  height: 100%;
  text-shadow: 0 0 1px rgba(0, 0, 0, .1);
}

.logolink {
  color: #464646;
  float: left;
  font-size: 20px;
  font-weight: 800;
  height: 56px;
  line-height: 56px;
  padding-left: 35px;
  padding-right: 15px;
  padding-top: 11px;
  text-decoration-line: none;
}

.sakurasono {
  background-color: rgba(255, 255, 255, .5);
  border-radius: 5px;
  color: #464646;
  height: auto;
  line-height: 25px;
  margin-right: 0;
  padding-bottom: 0;
  padding-top: 1px;
  text-size-adjust: 100%;
  width: auto;
}

.blogitems .submenu {
  color: #666;
  font-weight: 600;
  font-size: 14px;
  margin-left: 28px;
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
  background: url('../assets/image/wave1.png');
  position: absolute;
  bottom: 0;
}

.bolang2 {
  bottom: 20px;
  left: -50px;
  background: url('../assets/image/wave2.png') repeat-x;
}
</style>
