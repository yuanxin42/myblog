<template>
  <div>
    <h1>我是孩子页{{value}}</h1>
  </div>
</template>
<script>
export default {
  props: {
    value: String
  },
  data () {
    return {
      activeIndex: '1'
    }
  },
  methods: {
  },
  created () {

  },
  mounted () {
  }
}
</script>
<style scoped>

</style>
