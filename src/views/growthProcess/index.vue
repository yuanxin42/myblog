<template>
  <div class="growthProcess">
    <div class="pageHeader">
      <h1 class="cat-title">归档</h1>
      <span class="cat-des">
        <p>Archives</p>
      </span>
    </div>
    <div class="growthProcessTitle">2018年知识清单</div>
    <sir-timeline>
      <sir-timelineTree titlewidth="150px" title="06月 (3篇文章)">
        <sir-timelineItem v-for="val in arr" :key="val">
          <a href="https://blog.csdn.net/qq_37339364/article/details/84256788"
            >vue diff算法 patch</a
          >
        </sir-timelineItem>
      </sir-timelineTree>
      <sir-timelineTree titlewidth="150px" title="07月 (3篇文章)">
        <sir-timelineItem v-for="val in arr" :key="val">
          <a href="https://blog.csdn.net/qq_37339364/article/details/83895492"
            >浅谈javascript的Event Loop</a
          >
        </sir-timelineItem>
      </sir-timelineTree>
      <sir-timelineTree titlewidth="150px" title="08月 (2篇文章)">
        <sir-timelineItem v-for="val in arr" :key="val">
          <a href="https://blog.csdn.net/qq_37339364/article/details/82184247"
            >Element组件二次封装—入门</a
          >
        </sir-timelineItem>
      </sir-timelineTree>
      <sir-timelineTree titlewidth="150px" title="09月 (3篇文章)">
        <sir-timelineItem v-for="val in arr" :key="val">
          <a href="https://blog.csdn.net/qq_37339364/article/details/82564223"
            >npm run build发生了什么？</a
          >
        </sir-timelineItem>
      </sir-timelineTree>
      <sir-timelineTree titlewidth="150px" title="09月 (2篇文章)">
        <sir-timelineItem v-for="val in arr" :key="val">
          <a href="https://blog.csdn.net/qq_37339364/article/details/82086446"
            >javascript之正则表达式的入门部分</a
          >
        </sir-timelineItem>
      </sir-timelineTree>
    </sir-timeline>
  </div>
</template>
<script>
export default {
  // name: 'HelloWorld',
  data() {
    return {
      activeIndex: "1",
      arr: [1, 2, 3],
    };
  },
  methods: {},
};
</script>
<style lang='less' scoped>
a {
  color: #666;
  text-decoration: none;
}
.growthProcess {
  width: 1000px;
  margin: 0 auto;
  background: #fff;
  padding: 70px 20px 20px 20px;
  overflow: hidden;
  .growthProcessTitle {
    color: #676767;
    text-align: center;
    font-size: 20px;
  }
  .pageHeader {
    width: 100%;
    height: 60px;
    margin-top: 30px;
    margin-bottom: 30px;
    text-align: center;
    .cat-title {
      display: inline-block;
      font-size: 25px;
      font-weight: 400;
      padding-right: 15px;
      margin-right: 14px;
      border-right: 1px dashed #ddd;
      color: #676767;
    }
    .cat-des {
      display: inline-block;
      color: #9c9c9c;
    }
  }
}
</style>
