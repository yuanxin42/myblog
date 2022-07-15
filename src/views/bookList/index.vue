<template>
  <div class="growthProcess">
    <div class="pageHeader">
      <h1 class="cat-title">番组计划</h1>
      <span class="cat-des">
        <p>虽然这些我都没看过</p>
      </span>
    </div>
    <div class="booklist">
      <sir-card class="cardbox" width='47%' v-for="val in books" :key="val" style="margin:20px 0 0 2%; float:left;">
        <div slot="cardHeader">
          <img class="cardHover" src="../../assets/image/th(3).jpg" alt="">
        </div>
        <div slot="cardFotter">
          <div class="card-title">青春期笨蛋不做兔女郎学姐的梦
            <i class="material-icons right">comment</i>
          </div>
          <div class="card-title smallcardtitle">
            <a href="https://github.com/yuanxin666/sir-zujian">
              ハクメイとミコチ</a>
          </div>
          <p class="jindu">已完成</p>
        </div>
      </sir-card>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      activeIndex: '1',
      books: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
    }
  },
  methods: {
  }
}
</script>
<style lang='less' scoped>
a {
  color: #666;
  text-decoration: none
}

.growthProcess {
  width: 800px;
  margin: 0 auto;
  background: #fff;
  padding: 70px 20px 20px 20px;
  overflow: hidden;
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

.bookstyle() {
  margin: 15px 7% 15px 7%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 86%;
  height: 40px;
  font-size: 24px;
}

.booklist {
  .cardbox {
    transition: box-shadow 0.3s;
    &:hover {
      box-shadow: 0 8px 17px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    }
    .cardHover {
      width: 100%;
      height: 280px;
    }
    .card-title {
      font-weight: 300;
      .bookstyle();
    }
    .jindu {
      background: #ff9e2c;
      .bookstyle();
      text-align: center;
      height: 25px;
      font-size: 20px;
      color: #fff;
      margin-bottom: 30px;
    }
    .smallcardtitle{
      font-size: 16px;
    }
  }
}
</style>
