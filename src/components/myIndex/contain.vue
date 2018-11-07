<template>
    <div class="contain">
        <div class="contain-start">
            <h5 class="borderBottom"> START:DASH!!</h5>
            <div class="start-imgs">
                <sir-card class="start-img" width='240px'>
                    <div slot="cardHeader">
                        <img class="cardHover" src="@/assets/image/sakura.md.png" alt="">
                    </div>
                </sir-card>
                <sir-card class="start-img" width='240px'>
                    <div slot="cardHeader">
                        <img class="cardHover" src="@/assets/image/th(1).jpg" alt="">
                    </div>
                </sir-card>
                <sir-card class="start-img" width='240px'>
                    <div slot="cardHeader">
                        <img class="cardHover" src="@/assets/image/th(3).jpg" alt="">
                    </div>
                </sir-card>
            </div>
        </div>
        <div class="containCard">
            <h5 class="borderBottom"> Discovery</h5>
            <div>
                <sir-card class="start-img" width='100%' height='300px'>
                    <div slot="cardHeader">
                        <img class="cardHover" style="height:300px" src="@/assets/image/1099193574-1024x684.jpg" alt="">
                    </div>
                </sir-card>
                <sir-card class="start-img" width='100%' height='300px'>
                    <div slot="cardHeader">
                        <img class="cardHover" style="height:300px" src="@/assets/image/child-1024x576.jpg" alt="">
                    </div>
                </sir-card>
                <sir-card class="start-img" width='100%' height='300px'>
                    <div slot="cardHeader">
                        <img class="cardHover" style="height:300px" src="@/assets/image/sakura-1024x576.jpg" alt="">
                    </div>
                </sir-card>
                <sir-card class="start-img" width='100%' height='300px'>
                    <div slot="cardHeader">
                        <img class="cardHover" style="height:300px" src="@/assets/image/20170306_blue_sunrise_007_2560_by_macrebisz-db1bzsp-1024x576.jpg" alt="">
                    </div>
                </sir-card>
            </div>
        </div>

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
<style lang = 'less' scoped>
.contain {
    width: 100%;
    height: 2000px;
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
                .cardHover {
                        display: block;
                        width: 100%;
                        height: 160px !important;
                    }
                /* margin-right: 10px; */
            }
        }
    }
    .containCard{
        width: 780px;
        margin: 0 auto;
        .start-img{
            margin-bottom: 30px;
            border-radius: 20px;
        }
    }
}

h5 {
    padding: 15px 0 15px 0;
}

.borderBottom {
    border-bottom: 1px solid #e6e6e6;
}
</style>
