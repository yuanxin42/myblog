<template>
  <div class="blog">
    <!-- :issetlocation='menustyle' -->
    <sir-navmenu class="sir-navmenu" :sirbac="menustyle?'transparent':'#fff'" declinecolor='#fff'  :isdeclinebackground='true'>
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
        <sir-submenu class="submenu">
          <a href="/">首页</a>
        </sir-submenu>
        <sir-submenu class="submenu">
          <a href="growthProcess">成长历程</a>
        </sir-submenu>
        <sir-submenu class="submenu"><a href="bookList">清单</a></sir-submenu>
        <sir-submenu class="submenu">留言板</sir-submenu>
        <sir-submenu class="submenu">友人帐</sir-submenu>
        <sir-submenu class="submenu"><a href="about">关于</a></sir-submenu>
        <sir-submenu class="submenu"><a href="about">关于</a></sir-submenu>
        <sir-submenu class="submenu"><a href="about">关于</a></sir-submenu>
      </div>
    </sir-navmenu>
    <sir-scrolltop></sir-scrolltop>
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
  watch: {
  },
  computed: {
    menustyle () {
      let href = window.location.href
      let host = window.location.host
      return href.split(host)[1] === '/'
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
    },
    bar () {
      alert(213123)
    }
  },
  provide: {
    foo: this.bar
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

<style lang='less' scoped>
a {
  color: #666;
  font-weight: 600;
  font-size: 14px;
  text-decoration: none;
}

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
</style>
