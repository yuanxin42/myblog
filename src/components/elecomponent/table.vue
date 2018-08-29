<template>
  <div class="sir-table">
    <el-table :data="showData" style="width: 100%">
      <slot></slot>
    </el-table>
  </div>
</template>
<script>
export default {
  props: {
    data: {
      default () {
        return []
      },
      type: Array
    }
  },
  data () {
    return {
      showData: []
    }
  },
  methods: {
  },
  mounted () {
    this.showData = this.data
    console.log(this.showData)
  }

}
</script>
<style scoped>

</style>
