<template>
  <div class="growthProcess">
    <sir-timeline>
      <sir-timelineTree titlewidth="150px" title='06月 (3篇文章)'>
        <sir-timelineItem>4444</sir-timelineItem>
        <sir-timelineItem>4444</sir-timelineItem>
        <sir-timelineItem>4444</sir-timelineItem>
      </sir-timelineTree>
      <sir-timelineTree titlewidth="150px">
        <sir-timelineItem>555</sir-timelineItem>
        <sir-timelineItem>555</sir-timelineItem>
        <sir-timelineItem>555</sir-timelineItem>
      </sir-timelineTree>
    </sir-timeline>
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
  }
}
</script>
<style lang='less' scoped>
  .growthProcess{
    width: 1000px;
    margin: 0 auto;
    background: #fff;
    padding: 20px;
    overflow: hidden;
  }

</style>
