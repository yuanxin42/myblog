<template>
    <div class="main" :style="{width:width,height:height}">
        <slot></slot>
    </div>
</template>
<script>
export default {
  props: {
    width: [String, Number],
    height: [String, Number]
  },
  data () {
    return {
    }
  },
  created () {
  }
}
</script>
<style lang="less" scoped>
.main {
    padding: 20px;
    background: #e9eef3;
    width: 100%;
}
</style>
