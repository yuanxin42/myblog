<template>
  <div
    :class="sirClass"
    :style="sirColor"
    @mouseenter="sirenter"
    @mouseleave="sirleave"
  >
    <div class="navtop">
      <slot name="navtop"></slot>
    </div>
    <ul class="navmenu" v-if="showBg || inTopShowMenus">
      <slot name="allsubmenu"></slot>
    </ul>
  </div>
</template>
<script>
export default {
  props: {
    width: [String, Number],
    height: {
      type: [String, Number],
      default: "70px",
    },
    //  默认的导航菜单背景
    sirbac: {
      type: String,
      default: "#267439",
    },
    // 下滑和鼠标移入时背景色
    declinecolor: {
      type: String,
      default: "rgba(66, 139, 202, 1)",
    },
    // 居于顶部的时候，是否显示menus
    inTopShowMenus: {
      type: Boolean,
      default: true,
    },
    // 是否固定顶部
    issetlocation: {
      type: Boolean,
      default: true,
    },
    // 鼠标下滑颜色是否改变
    isdeclinebackground: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      showBg: false,
      navmenuBac: "transparent",
    };
  },
  computed: {
    sirColor() {
      return {
        width: this.width,
        height: this.height,
        lineHeight: this.height,
        background: this.navmenuBac || this.sirbac,
      };
    },
    sirClass() {
      return {
        navment: true,
        sirTop: this.showBg,
        islocation: this.issetlocation,
      };
    },
  },
  methods: {
    handleScroll() {
      let scroll =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      if (scroll > 0 && this.isdeclinebackground) {
        this.showBg = true;
        this.navmenuBac = this.declinecolor;
      } else {
        this.showBg = false;
        this.navmenuBac = this.sirbac;
      }
    },
    sirenter() {
      this.showBg = true;
      this.navmenuBac = this.declinecolor;
    },
    sirleave() {
      this.handleScroll();
    },
  },
  mounted() {
    this.handleScroll();
    window.addEventListener("scroll", this.handleScroll);
  },
};
</script>
<style lang="less" scoped>
/deep/ a {
  text-decoration: none;
  color: #666;
}
.navment {
  width: 100%;
  transition: all 0.5s ease;
  .navtop {
    float: left;
    margin-left: 20px;
  }
  .navmenu {
    margin: 0;
    padding: 0;
    margin-right: 20px;
    float: right;
  }
}

.islocation {
  position: fixed;
  top: 0;
  z-index: 10;
}
</style>
