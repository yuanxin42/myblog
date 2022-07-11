<!--
 * @Author: your name
 * @Date: 2019-03-04 16:18:38
 * @LastEditTime : 2020-01-16 11:41:13
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /myblog/src/components/common/tabs/tab.vue
 -->
<template>
    <div class="tab" v-if="isname === name" :style="{width:width,height:height}" :slot="name">
        <slot></slot>
    </div>
</template>
<script>
export default {
  name: 'sir-tab',
  props: {
    width: {
      default: '100%',
      type: [String, Number]
    },
    height: [String, Number],
    label: String,
    name: String
  },
  inject: ['eventBus'],
  watch: {

  },
  data () {
    return {
      isname: ''
    }
  },
  mounted () {
    // this.isname = this.$parent.tabname
    this.eventBus.$on('update:selected', (vm) => {
      this.isname = vm
    })
  },
  created () {
  }
}
</script>
<style lang="less" scoped>
@import "../../../assets/css/common.less";
</style>
