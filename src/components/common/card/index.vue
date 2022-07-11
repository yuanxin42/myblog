<template>
  <div :class="sirClass" :style="sirStyle">
    <div class="cardBlockHeader">
      <slot name="cardHeader"></slot>
    </div>
    <div class="cardBlockFotter">
      <slot name="cardFotter"></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: "c-card",
  props: {
    width: {
      default: "100%",
      type: [String, Number],
    },
    height: [String, Number],
    location: {
      default: "top",
      type: String,
    },
  },
  data() {
    return {};
  },
  computed: {
    sirStyle() {
      return {
        width: this.width,
        height: this.height,
      };
    },
    sirClass() {
      return {
        card: true,
        "card-location-left": this.location === "left",
        "card-location-right": this.location === "right",
      };
    },
  },
  created() {},
};
</script>
<style lang="less" scoped>
@import "../../../assets/css/common.less";
.card {
  &:hover {
    box-shadow: 0px 0px 10px #999;
  }
  border: 1px solid #e5e5e5;
  box-shadow: 0 1px 20px -6px rgb(0 0 0 / 50%);
  overflow: hidden;
  .cardBlockHeader {
    overflow: hidden;
    width: 100%;
    .cardHover {
      display: block;
      width: 100%;
      transition: all 0.5s ease;
    }
    .cardHover:hover {
      transform: scale(1.06);
    }
  }
  .cardBlockFotter {
    width: 100%;
    .cardTitle {
      margin: 12px;
      height: 20px;
      line-height: 20px;
      text-align: center;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      a {
        display: inline-block;
        height: 20px;
        line-height: 20px;
        text-align: center;
        font-size: 14px;
      }
    }
  }
}

.card-location-left {
  display: flex;
  // justify-content:space-between;
  .cardBlockHeader {
    width: 50%;
  }
  .cardBlockFotter {
    width: 50%;
  }
}
.card-location-right {
  .cardBlockHeader {
    width: 50%;
    float: right;
  }
  .cardBlockFotter {
    width: 50%;
    float: left;
  }
}
</style>
