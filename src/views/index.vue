<template>
  <div class="blog">
    <sir-navmenu
      class="sir-navmenu"
      sirbac="transparent"
      declinecolor="#fff"
      :inTopShowMenus="showMenu"
      :isdeclinebackground="true"
    >
      <div slot="navtop">
        <!-- https://2heng.xin -->
        <a class="logo-link" href="/" alt="日记">
          <span class="sakura-sono">
            原蓦然<ruby style="ruby-position: over">の日记 </ruby></span
          >
        </a>
      </div>
      <div slot="allsubmenu" class="blogitems">
        <sir-submenu class="submenu">
          <router-link to="/">首页</router-link>
        </sir-submenu>
        <sir-submenu class="submenu">
          <router-link to="/growthProcess">成长历程</router-link>
        </sir-submenu>
        <sir-submenu class="submenu"
          ><router-link to="/bookList">清单</router-link></sir-submenu
        >
        <sir-submenu class="submenu"
          ><router-link to="/leaveWord">留言板</router-link></sir-submenu
        >
        <sir-submenu class="submenu"
          ><router-link to="/about">关于</router-link></sir-submenu
        >
      </div>
    </sir-navmenu>
    <sir-scrolltop></sir-scrolltop>
    <router-view />
  </div>
</template>

<script>
import ProgressIndicator from "@/assets/js/progress-indicator.js";
export default {
  data() {
    return {
      activeIndex: "1",
      showMenu: true,
    };
  },
  watch: {
    $route: {
      handler() {
        this.showMenu = !["/", "/leaveWord"].includes(
          this.$router.currentRoute.fullPath
        );
      },
      immediate: true,
    },
  },
  computed: {
    // showMenu() {
    // },
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    bar() {
      alert(213123);
    },
  },
  // provide: {
  //   foo: this.bar
  // },
  mounted() {
    new ProgressIndicator();
  },
};
</script>

<style lang='less' scoped>
a {
  font-weight: 600;
  font-size: 14px;
  text-decoration: none;
}

.blog {
  width: 100%;
  height: 100%;
  text-shadow: 0 0 1px rgba(0, 0, 0, 0.1);
}

.logo-link {
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

.sakura-sono {
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 5px;
  color: #464646;
  height: auto;
  line-height: 25px;
  margin-right: 0;
  padding: 1px 10px;
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
