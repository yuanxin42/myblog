<template>
  <div class="contain">
    <div class="contain-start">
      <h5 class="border-bottom">MEMORIES!!</h5>
      <div class="start-imgs">
        <sir-card class="start-img" width="240px">
          <div slot="card-header">
            <img class="card-hover" src="@/assets/image/sakura.md.png" alt="" />
          </div>
        </sir-card>
        <sir-card class="start-img" width="240px">
          <div slot="card-header">
            <img class="card-hover" src="@/assets/image/th(1).jpg" alt="" />
          </div>
        </sir-card>
        <sir-card class="start-img" width="240px">
          <div slot="card-header">
            <img class="card-hover" src="@/assets/image/th(3).jpg" alt="" />
          </div>
        </sir-card>
      </div>
    </div>
    <div class="contain-card">
      <h5 class="border-bottom">THINGS!!</h5>
      <div>
        <sir-card
          v-for="(val, index) in imgarr"
          :key="index"
          :class="`start-img`"
          :location="leftOrRignt(index)"
          width="100%"
          height="300px"
        >
          <div slot="card-header">
            <img
              :class="`card-hover cardStyle${index}`"
              style="height: 300px"
              :data="val.src"
              :src="val.src"
              alt=""
            />
          </div>
          <div slot="card-fotter">
            <div class="card-title">
              <a href="https://github.com/yuanxin666/sir-zujian">
                360公司于上交所敲锣 成功回归A股360公司于上交所敲锣
                成功回归A股360公司于上交所敲锣 成功回归A股</a
              >
            </div>
            <div class="card-title">
              <a href="https://github.com/yuanxin666/sir-zujian">
                360公司于上交所敲锣 成功回归A股360公司于上交所敲锣
                成功回归A股360公司于上交所敲锣 成功回归A股</a
              >
            </div>
          </div>
        </sir-card>
      </div>
    </div>
  </div>
</template>
<script>
import imgSrc from "@/assets/image/1099193574-1024x684.jpg";
export default {
  // name: 'HelloWorld',
  data() {
    return {
      activeIndex: "1",
      imgarr: [
        {
          src: imgSrc,
        },
      ],
      scrollTop: "0px",
      allImg: [],
    };
  },
  computed: {},
  methods: {
    leftOrRignt(index) {
      return +index % 2 === 0 ? "left" : "right";
    },
    handleScroll() {
      let scroll =
        (window.pageYOffset ||
          document.documentElement.scrollTop ||
          document.body.scrollTop) + document.documentElement.clientHeight;
      if (Array.isArray(this.allImg)) {
        this.allImg.forEach((val) => {
          if (scroll > val.iTop) {
            const element = document.querySelector(val.imgClass);
            if (element) {
              element.src = val.data;
            }
          }
        });
      }
    },
    lazyLoading(dom, name) {
      return name;
    },
    getallImgHeight() {
      this.imgarr.forEach((val, index) => {
        let element = document.querySelector(`.cardStyle${index}`);
        this.allImg.push({
          imgClass: `.cardStyle${index}`,
          iTop: this.getFixed(element),
          data: element.getAttribute("data"),
        });
      });
    },
    getFixed(obj) {
      // 获取非行间属性
      function getStyle(obj, styleName) {
        if (obj.currentStyle) {
          return obj.currentStyle[styleName];
        } else {
          return getComputedStyle(obj, null)[styleName];
        }
      }
      // 要获取图片相对网页顶部的距离，但图片有被定位的父级
      //   var iLeft = 0
      var iTop = 0;
      var oParent = obj;
      while (oParent) {
        if (oParent.tagName === "HTML") {
          break;
        }
        // iLeft += oParent.offsetLeft
        iTop += oParent.offsetTop;
        if (oParent !== obj) {
          //   iLeft += parseInt(getStyle(oParent, 'borderWidth'))// offsetLeft不包括边框，因此要把边框加
          if (
            typeof parseInt(getStyle(oParent, "borderWidth")) === "number" &&
            !isNaN(parseInt(getStyle(oParent, "borderWidth")))
          ) {
            iTop += parseInt(getStyle(oParent, "borderWidth"));
          }
        }
        oParent = oParent.offsetParent;
      }

      return iTop; // 当 break 后itop就是图片相对网页顶部的距离
    },
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
    this.getallImgHeight(); // 懒加载
  },
};
</script>
<style lang='less' scoped>
.contain {
  width: 100%;
  /* height: 2000px; */
  /*后续删掉*/
  overflow: hidden;
  background: #fff;
  .contain-start {
    width: 780px;
    margin: 0 auto;
    /* background: paleturquoise; */
    .start-imgs {
      width: 100%;
      display: flex;
      justify-content: space-around;
      margin-top: 30px;
      height: 160px;
      border-radius: 10px;
      .start-img {
        border-radius: 10px;
        .card-hover {
          display: block;
          width: 100%;
          height: 160px !important;
        }
        /* margin-right: 10px; */
      }
    }
  }
  .contain-card {
    width: 780px;
    margin: 0 auto;
    .start-img {
      margin-bottom: 30px;
      border-radius: 20px;
    }
  }
}

h5 {
  padding: 15px 0 15px 0;
}

.border-bottom {
  border-bottom: 1px solid #e6e6e6;
  text-align: center;
}
</style>
