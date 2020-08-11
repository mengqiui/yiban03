<template>
  <div class="tech" @click="clickblank($event)">
    <div class="banner" v-lazy:background-image="require('../../../static/img/tech01.png')"></div>
    <leaderbar :leadertext="$t('leader.tech')" :clickwhere="blank" @barheight="getbarheight"></leaderbar>
    <div class="allfloor" ref="allfloor">
      <div class="floor" id="floor1">
        <div class="mining item">
          <div class="mining-box">
            <div class="box">
              <div class="left content-title">
                <div class="bg-text compute">
                  MINER
                  <div class="bg-line"></div>
                  <div class="main-text">
                   {{$t('content.tech.minerBus.title')}}
                    <div class="main-line"></div>
                  </div>
                </div>
                <div class="mobile mobile-title">
                  {{$t('content.tech.minerBus.title')}}
                  <div class="mobile-line"></div>
                </div>
                <div class="left-text">
                  <p class="text">
                    <span class="text-first">{{$t('content.tech.minerBus.content01.first')}}</span> {{$t('content.tech.minerBus.content01.text')}}</p>
                </div>
              </div>
              <div class="right">
                <img v-lazy="require('../../assets/img/tech02.jpg')" alt class="pic" />
              </div>
            </div>
            <div class="box clear-both">
              <div class="left content-title mt-55 mb-50">
                <div class="left-text">
                  <p class="text ">
                    <span class="text-first">{{$t('content.tech.minerBus.content02.first')}}</span> {{$t('content.tech.minerBus.content02.text')}}</p>
                </div>
              </div>
              <div class="right mt-55 mb-50">
                <div class="mobile text-line"></div>
                <p class="right-text text">
                  <span class="text-first">{{$t('content.tech.minerBus.content03.first')}}</span> {{$t('content.tech.minerBus.content03.text')}}</p>
              </div>
            </div>
            <p class="seeMore clear-both" @click="goPage($t('content.tech.minerBus.url'))">{{$t('content.tech.minerBus.more')}} >></p>
          </div>
        </div>
      </div>
      <div class="floor" id="floor2">
        <div class="baby-sitte">
          <div class="item compute">
            <div class="left left-img">
              <img v-lazy="require('../../assets/img/tech03.png')" alt />
            </div>
            <div class="baby-content right">
              <div class="bg-text ">
                SERVICE
                <div class="bg-line"></div>
                <div class="main-text">
                  {{$t('content.tech.minerHost.title[0]')}}
                  <span class="text-ju">{{$t('content.tech.minerHost.title[1]')}}</span>
                  <div class="main-line"></div>
                </div>
              </div>
              <div class="box-content">
                <p class="text">
                  <span class="text-first">{{$t('content.tech.minerHost.content01.first')}}</span> {{$t('content.tech.minerHost.content01.text')}}
                </p>
                <p class="text" style="margin-top:40px;">
                  <span class="text-first">{{$t('content.tech.minerHost.content02.first')}}</span> {{$t('content.tech.minerHost.content02.text')}}
                </p>
              </div>
            </div>
            <div class="baby-box clear-both">
              <div class="text-first text-list">{{$t('content.tech.minerHost.advantage.title')}}:</div>
              <div class="adv-list">
                <div class="adv-li">
                  <div class="imgarea">
                    <img v-lazy="require('../../assets/img/toppic1.png')" alt="" class="top">
                    <img v-lazy="require('../../assets/img/bottompic.png')" alt="" class="bottom">
                  </div>
                  <p class="adv-tit">{{$t('content.tech.minerHost.advantage.item[0].title')}}</p>
                  <p class="blueline"></p>
                  <p class="adv-info">{{$t('content.tech.minerHost.advantage.item[0].info')}}</p>
                </div>
                <div class="adv-li">
                  <div class="imgarea">
                    <img v-lazy="require('../../assets/img/toppic2.png')" alt="" class="top">
                    <img v-lazy="require('../../assets/img/bottompic.png')" alt="" class="bottom">
                  </div>
                  <p class="adv-tit">{{$t('content.tech.minerHost.advantage.item[1].title')}}</p>
                  <p class="blueline"></p>
                  <p class="adv-info">{{$t('content.tech.minerHost.advantage.item[1].info')}}</p>
                </div>
                <div class="adv-li">
                  <div class="imgarea">
                    <img v-lazy="require('../../assets/img/toppic3.png')" alt="" class="top">
                    <img v-lazy="require('../../assets/img/bottompic.png')" alt="" class="bottom">
                  </div>
                  <p class="adv-tit">{{$t('content.tech.minerHost.advantage.item[2].title')}}</p>
                  <p class="blueline"></p>
                  <p class="adv-info">{{$t('content.tech.minerHost.advantage.item[2].info')}}</p>
                </div>
                <div class="adv-li">
                  <div class="imgarea">
                    <img v-lazy="require('../../assets/img/toppic4.png')" alt="" class="top">
                    <img v-lazy="require('../../assets/img/bottompic.png')" alt="" class="bottom">
                  </div>
                  <p class="adv-tit">{{$t('content.tech.minerHost.advantage.item[3].title')}}</p>
                  <p class="blueline"></p>
                  <p class="adv-info">{{$t('content.tech.minerHost.advantage.item[3].info')}}</p>
                </div>
                <div class="adv-li">
                  <div class="imgarea">
                    <img v-lazy="require('../../assets/img/toppic5.png')" alt="" class="top">
                    <img v-lazy="require('../../assets/img/bottompic.png')" alt="" class="bottom">
                  </div>
                  <p class="adv-tit">{{$t('content.tech.minerHost.advantage.item[4].title')}}</p>
                  <p class="blueline"></p>
                  <p class="adv-info">{{$t('content.tech.minerHost.advantage.item[4].info')}}</p>
                </div>
              </div>
            </div>
          </div>
          <div class="mobile">
            <div class="mobile-title">
              {{$t('content.tech.minerHost.title[0]')}}<span class="text-ju">{{$t('content.tech.minerHost.title[1]')}}</span>
              <div class="mobile-line"></div>
            </div>
            <div class="mobile-body">
              <!-- <div class="bg-img"> -->
                <!-- <img v-lazy="require('../../../static/img/tech03h5.png')" alt /> -->
              <!-- </div> -->
              <div class="mobile-content">
                <div class="box-content">
                  <p class="text">
                    <span class="text-first">{{$t('content.tech.minerHost.content01.first')}}</span> {{$t('content.tech.minerHost.content01.text')}}
                  </p>
                  <div class="text-line"></div>
                  <p class="text">
                    <span class="text-first">{{$t('content.tech.minerHost.content02.first')}}</span> {{$t('content.tech.minerHost.content02.text')}}
                  </p>
                </div>
                <div class="baby-box">
                  <div class="text-first text-list">{{$t('content.tech.minerHost.advantage.title')}}:</div>
                  <div class="adv-list">
                    <div class="adv-li">
                      <div class="imgarea" style="float:left;">
                        <img v-lazy="require('../../assets/img/h5pic1.png')" alt="" class="h5pic" style="float:left;">
                      </div>
                      <div class="adv-wen" style="float:right;">
                        <p class="adv-tit">{{$t('content.tech.minerHost.advantage.item[0].title')}}</p>
                        <p class="blueline"></p>
                        <p class="adv-info">{{$t('content.tech.minerHost.advantage.item[0].info')}}</p>
                      </div>
                    </div>
                    <div class="adv-li">
                      <div class="imgarea" style="float:right;">
                        <img v-lazy="require('../../assets/img/h5pic2.png')" alt="" class="h5pic" style="float:right;">
                      </div>
                      <div class="adv-wen" style="float:left;">
                        <p class="adv-tit">{{$t('content.tech.minerHost.advantage.item[1].title')}}</p>
                        <p class="blueline"></p>
                        <p class="adv-info">{{$t('content.tech.minerHost.advantage.item[1].info')}}</p>
                      </div>
                    </div>
                    <div class="adv-li">
                      <div class="imgarea" style="float:left;">
                        <img v-lazy="require('../../assets/img/h5pic3.png')" alt="" class="h5pic" style="float:left;">
                      </div>
                      <div class="adv-wen" style="float:right;">
                        <p class="adv-tit">{{$t('content.tech.minerHost.advantage.item[2].title')}}</p>
                        <p class="blueline"></p>
                        <p class="adv-info">{{$t('content.tech.minerHost.advantage.item[2].info')}}</p>
                      </div>
                    </div>
                    <div class="adv-li">
                      <div class="imgarea" style="float:right;">
                        <img v-lazy="require('../../assets/img/h5pic4.png')" alt="" class="h5pic" style="float:right;">
                      </div>
                      <div class="adv-wen" style="float:left;">
                        <p class="adv-tit">{{$t('content.tech.minerHost.advantage.item[3].title')}}</p>
                        <p class="blueline"></p>
                        <p class="adv-info">{{$t('content.tech.minerHost.advantage.item[3].info')}}</p>
                      </div>
                    </div>
                    <div class="adv-li">
                      <div class="imgarea" style="float:left;">
                        <img v-lazy="require('../../assets/img/h5pic5.png')" alt="" class="h5pic" style="float:left;">
                      </div>
                      <div class="adv-wen" style="float:right;">
                        <p class="adv-tit">{{$t('content.tech.minerHost.advantage.item[4].title')}}</p>
                        <p class="blueline"></p>
                        <p class="adv-info">{{$t('content.tech.minerHost.advantage.item[4].info')}}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="floor" id="floor3">
        <div class="comm-business">
          <div class="comm-inner">
            <div class="compute bg-text">
              BUSINESS
              <div class="bg-line"></div>
              <div class="main-text">
                {{$t('content.tech.comBus.title[0]')}}
                <span class="text-ju">{{$t('content.tech.comBus.title[1]')}}</span>
                <div class="main-line"></div>
              </div>
            </div>
            <div class="mobile mobile-title">
              {{$t('content.tech.comBus.title[0]')}} <span class="text-ju">{{$t('content.tech.comBus.title[1]')}}</span>
              <div class="mobile-line"></div>
            </div>
            <div class="content-left left">
              <p><span class="text-first">{{$t('content.tech.comBus.content01.first')}}</span> {{$t('content.tech.comBus.content01.text')}}</p>
              <p><span class="text-first">{{$t('content.tech.comBus.content02.first')}}</span> {{$t('content.tech.comBus.content02.text')}}</p>
              <p><span class="text-first">{{$t('content.tech.comBus.content03.first')}}</span> {{$t('content.tech.comBus.content03.text')}}</p>
            </div>
            <div class="content-right right">
              <div class="product" @click="showdialog(0)">
                <img v-lazy="require('../../assets/img/product01.jpg')" alt="">
                <span>{{$t('content.tech.comBus.productName[0]')}} >></span>
              </div>
              <div class="product" @click="showdialog(1)">
                <img v-lazy="require('../../assets/img/product02.jpg')" alt="">
                <span>{{$t('content.tech.comBus.productName[1]')}} >></span>
              </div>
              <div class="product" @click="showdialog(2)">
                <img v-lazy="require('../../assets/img/product03.jpg')" alt="">
                <span>{{$t('content.tech.comBus.productName[2]')}} >></span>
              </div>
            </div>
            <div class="dialog" v-show="ifshow">
              <div class="showarea">
                <div class="close" @click="close">×</div>
                <div class="dialog-body">
                  <div class="title">{{$t('content.tech.comBus.product['+showNum+'].classify')}}</div>
                  <div class="introduce">{{$t('content.tech.comBus.product['+showNum+'].intro')}}</div>
                  <div class="imgList">
                    <div v-for="(item,index) in $t('content.tech.comBus.product['+showNum+'].prod')" :key="index" class="imgBox">
                      <img v-lazy="item.img" :alt="item.name" />
                      <p>{{item.name}}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <p class="seeMore clear-both" @click="goPage($t('content.tech.comBus.url'))">{{$t('content.tech.comBus.more')}} >></p>
          </div>
        </div>
      </div>
      <div class="floor" id="floor4">
        <div class="design">
          <div class="design-inner">
            <div class="compute bg-text">
              DESIGN
              <div class="bg-line"></div>
              <div class="main-text">
                {{$t('content.tech.icDesign.title[0]')}}
                <span class="text-ju">{{$t('content.tech.icDesign.title[1]')}}</span>
                <div class="main-line"></div>
              </div>
            </div>
            <div class="mobile mobile-title">
              {{$t('content.tech.icDesign.title[0]')}}<span class="text-ju">{{$t('content.tech.icDesign.title[1]')}}</span>
              <div class="mobile-line"></div>
            </div>
            <div class="text-list">
              <p class="text">
                <span class="text-first">{{$t('content.tech.icDesign.content01.first')}}</span> {{$t('content.tech.icDesign.content01.text')}}
              </p>
              <p class="text" >{{$t('content.tech.icDesign.content02.text')}}</p>
              <div class="img-text">
                <div class="text-line compute"></div>
                <div class="mobile-line mobile"></div>
                <div class="text">
                  <span class="text-first">{{$t('content.tech.icDesign.content03.first')}}</span> {{$t('content.tech.icDesign.content03.text')}}
                </div>
                <div class="text-line line-bottom  compute"></div>
                <img v-lazy="require('../../assets/img/tech04.jpg')" alt />
              </div>
              <p class="text">
                <span class="text-first">{{$t('content.tech.icDesign.content04.first')}}</span> {{$t('content.tech.icDesign.content04.text')}}
              </p>
              <p class="text" >{{$t('content.tech.icDesign.content05.text')}}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="floor" id="floor5">
        <div class="mining-001">
        </div>
      </div>
      <div class="floor" id="floor6">
        <div class="digital">
        </div>
      </div>
      <div class="floor" id="floor7">
        <div class="fintech">
            <img v-lazy="require('../../assets/img/coming.png')" alt="" class="coming">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import leaderbar from "@/components/leader/leaderbar";
export default {
  components: { leaderbar },
  data() {
    return {
      ifshow: false,
      showNum: "0",
      isPC: true,
      blank: "",
      barheight: 0,
    };
  },
  mounted() {
    if (this.$router.currentRoute.query.guid != null) {
      let index = this.$router.currentRoute.query.guid;
      this.gundong(index);
    }
    this.ispc();
  },
  methods: {
    gundong(index) {
      const targetOffsetTop =
      this.$refs.allfloor.children[index].offsetTop - this.barheight;
      this.$gomove.move(targetOffsetTop);
    },
    showdialog(index) {
      this.ifshow = true;
      this.showNum = index;
    },
    close() {
      this.ifshow = false;
    },
    ispc() {
      let type = this.$client.clientchoose();
      this.isPC = type;
    },
    clickblank(e) {
      if (this.isPC == false) {
        let choose = this.$client.clickblank(e);
        this.blank = choose;
      }
    },
    getbarheight(data) {
      this.barheight = data;
    },
    goPage(url){
      window.open(url, '_blank');
    }
  }
};
</script>

<style lang="scss" scoped>
@-webkit-keyframes bounce {
  25% {
    -webkit-transform: translateY(10px);
  }
  50%,
  100% {
    -webkit-transform: translateY(0px);
  }
  75% {
    -webkit-transform: translateY(5px);
  }
}

@keyframes bounce {
  25% {
    transform: translateY(10px);
  }
  50%,
  100% {
    transform: translateY(0px);
  }
  75% {
    transform: translateY(5px);
  }
}
.dialog { position: fixed; z-index: 100; left: 0; top: 0; right: 0; bottom: 0; background: rgba($color: #000, $alpha: 0.6);
  .showarea { position: absolute; width: 900px; background: #fff; padding: 30px 30px; left: 50%; top: 25%; min-height: 400px; margin-left: -400px;
    .close { position: absolute; right: 0; top: 0; color:$color-005; cursor: pointer; height: 40px; width: 40px; font-size: 32px; text-align: center; line-height: 30px; overflow: hidden;transition:all .5s;
      &:hover{ transform: scale(1.2); }
    }
    .dialog-body{
      .title{text-align: center;font-weight: bold;font-size: 22px;color:$color-005;}
      .introduce{color: $text-777;line-height: 29px;margin-top: 10px;}
      .imgList{width:100%;margin-top:20px;
        .imgBox{width:20%;display: inline-block;text-align:center;color: $text-777;
          img{width:100%;}
        }
      }
    }
  }
}
.seeMore{text-align: center;color:$color-005;cursor: pointer;}
.floor{overflow: hidden;}
.mobile{display: none!important;}.compute{display:block!important;}
.tech {overflow: hidden; 
  .banner {margin-top: 80px;height: 600px;background-repeat: no-repeat;background-position:center center;overflow: hidden;}
  .floor {overflow: hidden;}#floor1{height:auto;}#floor3{height:735px;}#floor5{height:1px; background: #fff;}#floor6{height:1px; background: #f3f3f3;}#floor7{height:auto; background: #fff;}
  .item {max-width: 1200px;margin:60px auto;overflow: hidden;}
  .left {float: left;}
  .right {float: right;}
  .text{color:$text-777;font-size: 16px;line-height: 35px;}
  .mining{
    .mining-box{
      .box{
        .content-title{width:510px;
          .bg-text{font-size:80px;position: relative;font-weight: 800; font-style: italic; color: #ffe8d9; letter-spacing: 16px;padding-left:15%;margin-bottom:30px;
            .bg-line{width:50%;border:6px solid #ffe8d9;margin-top:20px;}
            .main-text{position: absolute;color:$color-005;font-size: 28px;font-weight: 500; font-style: italic;letter-spacing: 3px;z-index: 10;top:34%;left:0;
              .main-line{width:50%;border:2px solid $color-005;margin-top:10px;}
            }
          }
        }
        .right{width:630px;}
        .mb-50{margin-bottom: 50px;}
      }
    }
  }
  .baby-sitte{position: relative;width:100%;background-color:#f3f3f3;padding:50px 0;
    .item{
      .left-img{width:512px;height:716px;background-color:#ffe8d9;
        img{width:100%;height:100%;}
      }
    }
    .baby-content{
      .bg-text{font-size:80px;position: relative;font-weight: 800; font-style: italic; color: #ffe8d9; letter-spacing: 16px;margin-bottom:30px;width:660px;padding-left: 12%;
        .bg-line{width:30%;border:6px solid #ffe8d9;margin-top:20px;}
        .main-text{position: absolute;color:$color-005;font-size: 28px;font-weight: 500; font-style: italic;letter-spacing: 3px;z-index: 10;top:34%;left:0;
          .main-line{width:15%;border:2px solid $color-005;margin-top:10px;}
          .text-ju{font-size: 28px;font-weight: 600; font-style: italic;letter-spacing: 3px;}
        }
      }
      .box-content{width:780px;height:488px;position: absolute;background-color: #fff;left:40%;padding:19px 10px 36px 36px; }
    }
    .baby-box{
      .text-list{padding:30px 0;}
      .adv-list{overflow: hidden;
        .adv-li{float: left; width: 20%; overflow: hidden;
          .imgarea{height: 213px; overflow: hidden; position: relative; width: 172px; margin: 0 auto;
            .top{position: absolute; top: 0; display: block; width:72px; z-index: 2; left: 50%; margin-left:-36px;}
            .bottom{position: absolute; bottom: 0; width:100%; left: 0;}
          }
          .adv-tit{line-height:36px; font-size: 18px; color:#151515; text-align: center; overflow: hidden; height: 40px;}
          .blueline{ width: 40px; margin:0 auto; height: 4px; background: #374DE5; margin-bottom: 10px;}
          .adv-info{
            line-height: 20px; font-size: 14px; color: #777; overflow: hidden; padding: 0 10px; text-align: center;
          }
        }
        .adv-li:hover{
          .top{
            -webkit-animation: bounce 1.5s linear infinite;
            animation: bounce 1.5s linear infinite;
          }
        }
      }
      p{font-style: normal!important;letter-spacing: 1px;}
    }
  }
  .comm-business{width:100%;height:623px;//background-image: url('/static/img/bg-design.png');
    .comm-inner{max-width:1200px;margin:auto;padding:50px 0 120px 0;height:600px;
    .bg-text{font-size:80px;position: relative;font-weight: 800; font-style: italic; color: #ffe8d9; letter-spacing: 16px;margin:0 auto 30px auto;width:660px;padding-left: 10%;
      .bg-line{width:30%;border:6px solid #ffe8d9;margin-top:20px;}
      .main-text{position: absolute;color:$color-005;font-size: 28px;font-weight: 500; font-style: italic;letter-spacing: 3px;z-index: 10;top:34%;left:0;
        .main-line{width:15%;border:2px solid $color-005;margin-top:10px;}
        .text-ju{font-size: 28px;font-weight: 600; font-style: italic;letter-spacing: 3px;}
      }
    }
      .main-title{color:$color-005;font-size: 28px;font-weight: 500; font-style: italic;letter-spacing: 3px;width:500px;margin: auto;
        .main-line{width: 10%;border:2px solid $color-005;margin-top:10px;}
      }
      .content-left,.content-right{color:$text-777;font-size:16px;margin:40px 0;line-height: 40px;
        p{
          span{font-style: italic;font-size:24px;margin-right:6px;}
        }
      }
      .content-left{text-align: right;width:760px;}
      .content-right{text-align: left;padding-top: 13px;
        .product{width:400px;margin-right: 10px;cursor: pointer;
          &:nth-child(2){margin: 10px 0px;}
          img{width:160px;height:110px;vertical-align: middle;}
          span{font-size:10px;}
        }
      }
    }
  }
  .design{background-color: #f3f3f3;height:900px;padding:60px 0;
    .design-inner{max-width:1200px;margin:0 auto;}
    .bg-text{font-size:80px;position: relative;font-weight: 800; font-style: italic; color: #ffe8d9; letter-spacing: 16px;margin:0 auto 30px auto;width:660px;padding-left: 10%;
      .bg-line{width:30%;border:6px solid #ffe8d9;margin-top:20px;}
      .main-text{position: absolute;color:$color-005;font-size: 28px;font-weight: 500; font-style: italic;letter-spacing: 3px;z-index: 10;top:34%;left:0;
        .main-line{width:15%;border:2px solid $color-005;margin-top:10px;}
        .text-ju{font-size: 28px;font-weight: 600; font-style: italic;letter-spacing: 3px;}
      }
    }
    .text-list{
      p{letter-spacing: 1px;}
      .img-text{position: relative;margin:20px 0; padding-right: 20px;
        .text-line{width:50px;height:2px;background-color: $color-ff6;position: absolute;}
        .line-bottom{bottom: 0;left:0;}
        div{display: inline-block;width: 570px; vertical-align: middle;padding-right:10px;}
        img{vertical-align: middle;}
      }
    }
  }
  .mining-001{  height: 100%; padding-top: 50px; max-width: 1200px;margin:0 auto; 
    .bg-text{font-size:80px;position: relative;margin:0 auto; font-weight: 800; font-style: italic; color: #ffe8d9; letter-spacing: 16px;width:400px;padding-left: 12%;
      .bg-line{width:30%;border:6px solid #ffe8d9;margin-top:20px;}
      .main-text{position: absolute;color:$color-005;font-size: 28px;font-weight: 500; font-style: italic;letter-spacing: 3px;z-index: 10;top:34%;left:0;
        .main-line{width:15%;border:2px solid $color-005;margin-top:10px;}
        .text-ju{font-size: 28px;font-weight: 600; font-style: italic;letter-spacing: 3px;}
      }
    }
    .coming{ display: block; height: 500px; margin: 0 auto;}
  }
  .digital{ height: 100%; padding-top: 50px; max-width: 1200px;margin:0 auto; 
    .bg-text{font-size:80px;position: relative;margin:0 auto; font-weight: 800; font-style: italic; color: #ffe8d9; letter-spacing: 16px;width:700px;padding-left: 12%;
      .bg-line{width:30%;border:6px solid #ffe8d9;margin-top:20px;}
      .main-text{position: absolute;color:$color-005;font-size: 28px;font-weight: 500; font-style: italic;letter-spacing: 3px;z-index: 10;top:34%;left:0;
        .main-line{width:15%;border:2px solid $color-005;margin-top:10px;}
        .text-ju{font-size: 28px;font-weight: 600; font-style: italic;letter-spacing: 3px;}
      }
    }
    .coming{ display: block;height: 500px; margin: 0 auto;}
  }
  .fintech{ height: 100%; padding-top: 50px; max-width: 1200px;margin:0 auto; 
    .bg-text{font-size:80px;position: relative;margin:0 auto; font-weight: 800; font-style: italic; color: #ffe8d9; letter-spacing: 16px;width:400px;padding-left: 7%;
      .bg-line{width:30%;border:6px solid #ffe8d9;margin-top:20px;}
      .main-text{position: absolute;color:$color-005;font-size: 28px;font-weight: 500; font-style: italic;letter-spacing: 3px;z-index: 10;top:34%;left:0;
        .main-line{width:15%;border:2px solid $color-005;margin-top:10px;}
        .text-ju{font-size: 28px;font-weight: 600; font-style: italic;letter-spacing: 3px;}
      }
    }
    .coming{ display: block;width: 100%; }
  }
}

@media screen and (max-width: 1200px) {
  .compute{display:none!important;}.mobile{display: block!important;}
  .dialog {
    .showarea { position: absolute; width: 90%; background: #fff; padding: 0.3rem 0.3rem; left: 50%; top: 15%; margin-left: -45%;
      .close { position: absolute; right: 4px; top: 4px; color:$color-005; cursor: pointer; height: 0.4rem; width: 0.4rem; font-size: 0.4rem; text-align: center; line-height: 0.3rem; overflow: hidden;transition:all .5s;
        &:hover{ transform: scale(1.2); }
      }
      .dialog-body{
        .title{font-size: .3rem;}
        .introduce{line-height: .4rem;font-size: .14rem;max-height: 4rem;overflow-y: scroll;}
        .imgList{width:100%;margin-top:.2rem;
          .imgBox{width:20%;
            img{width:100%;}
            p{font-size: .14rem;}
          }
        }
      }
    }
  }
  .tech {
    #floor1{height:auto;}#floor2{height:auto;}#floor3{height:auto;}
    .banner {margin-top: 1rem;height: 4rem;background-image: url("../../../static/img/tech01h5.jpg") !important;}
    .item {max-width: 12rem;margin:.6rem auto;} .text{font-size: .16rem;line-height: .35rem;} .left{float: none;}.right{float: none;}
    .mining{padding-top: 0;margin-top:0.25rem;margin-bottom: 0;
      .mining-box{
        .box{
          .content-title{width:6.6rem;margin:0 auto;
            .mobile-title{font-size:.24rem;letter-spacing:.03rem;text-align: center;font-weight: bold;color:$color-005;font-style: italic;margin:.25rem auto;
              .mobile-line{height:0.02rem;background-color:$color-005;margin: .1rem auto;width: 10%;}
            }
            .left-text{
              .mt-55{margin-top:0;}
              .text{
                .text-first{color:inherit;font-size: .16rem;font-style:inherit;margin-right:0;}
              }
            }
          }
          .right{width:6.6rem;margin:.5rem auto;
            .text-line{height:0.02rem;background-color:$color-005;margin: .5rem auto;width: 10%;}
            img{width:100%;}
            .mt-45{margin-top:.5rem;}
            .right-text{.text-first{color:inherit;font-size: .16rem;font-style:inherit;margin-right:0;}}
          }
        }
      }
    }
    .baby-sitte{padding:.5rem 0;
      .mobile{
        .mobile-title{font-size:.24rem;letter-spacing:.03rem;text-align: center;font-weight: bold;color:$color-005;font-style: italic;margin:.25rem auto;
          .text-ju{font-size: .28rem;letter-spacing: .03rem;margin-left:.1rem;}
          .mobile-line{height:0.02rem;background-color:$color-005;margin: .1rem auto;width: 10%;}
        }
        .mobile-body{background-image:url('../../../static/img/tech03h5.png');background-repeat:no-repeat;background-size:6.6rem 2rem;background-position:top center;padding-top:1.5rem;
          .mobile-content{width:6.3rem;margin:0 auto;
            .box-content{background-color: #fff;padding:.25rem; 
              .text{
                .text-first{color:inherit;font-size: .16rem;font-style:inherit;margin-right:0;}
              }
              .text-line{height:0.02rem;background-color:$color-005;margin: .5rem auto;width: 10%;}
            }
            .baby-box{
              .text-list{padding:.3rem 0;}
              .adv-list{overflow: hidden;
                .adv-li{float: left; width: 100%; overflow: hidden; margin-bottom: 0.2rem;
                  .imgarea{height: 1.24rem; overflow: hidden; position: relative; width: 50%;
                    .h5pic{display: block; width:1rem;}
                  }
                  .adv-wen{ width: 50%;
                    .adv-tit{line-height:0.36rem; font-size: 0.18rem; color:#151515; text-align: left; overflow: hidden; height: 0.4rem;}
                    .blueline{ width: 0.4rem; margin:0 0; height:0.04rem; background: #374DE5; margin-bottom: 0.1rem;}
                    .adv-info{
                      line-height: 0.3rem; font-size: 0.14rem; color: #777; overflow: hidden; padding: 0 0px; text-align: left;
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    .comm-business{height:auto;//background-image: url('/static/img/bg-design.png');
      .comm-inner{width:6.6rem;margin:auto;padding:.27rem 0 .3rem 0;height:auto;
        .mobile-title{font-size:.24rem;letter-spacing:.03rem;text-align: center;font-weight: bold;color:$color-005;font-style: italic;margin:.25rem auto;
          .text-ju{font-size: .28rem;letter-spacing: .03rem;margin-left:.1rem;}
          .mobile-line{height:0.02rem;background-color:$color-005;margin: .1rem auto;width: 10%;}
        }
        
      .bg-text{font-size:.8rem;letter-spacing: .16rem;margin:0 auto .3rem auto;width:6.6rem;
        .bg-line{border:.06rem solid #ffe8d9;margin-top:.20rem;}
        .main-text{font-size: .28rem;letter-spacing: .03rem;
          .main-line{border:.02rem solid $color-005;margin-top:.1rem;}
          .text-ju{font-size: .28rem;letter-spacing: .03rem;}
        }
      }
        .main-title{font-size: .28rem;letter-spacing: .03rem;width:5rem;
          .main-line{border:2rem solid $color-005;margin-top:10rem;}
        }
        .content-left,.content-right{font-size:.16rem;margin:0;line-height: .4rem;text-align:center;display:block;
          p{font-size: .16rem;
            span{font-size:inherit;margin-right:0;color:inherit;font-style: inherit;}
          }
        }
        .content-left{width:100%;padding: 0 .2rem;}
        .content-right{padding-top: .4rem;
          .product{width:30%;margin-right: .1rem;display: inline-block;overflow: hidden;height:auto;vertical-align: top;
            &:nth-child(2){margin:0;}
            img{width:1.6rem;height:1.1rem;}
            span{font-size:.1rem;display: block;}
          }
        }
      }
    }
    .design{height:auto;margin-top:.25rem;padding: .25rem 0;
      .design-inner{max-width:12rem;
        .mobile-title{font-size:.24rem;letter-spacing:.03rem;text-align: center;font-weight: bold;color:$color-005;font-style: italic;margin:.25rem auto;
          .text-ju{font-size: .28rem;letter-spacing: .03rem;margin-left:.1rem;}
          .mobile-line{height:0.02rem;background-color:$color-005;margin: .1rem auto;width: 10%;}
        }
      }
      .bg-text{font-size:.80rem;font-weight: 800;letter-spacing: .16rem;margin:0 auto .30rem auto;width:6.60rem;
        .bg-line{border:.06rem solid #ffe8d9;margin-top:.20rem;}
        .main-text{font-size: .28rem;letter-spacing: .03rem;
          .main-line{border:.02rem solid $color-005;margin-top:.10rem;}
          .text-ju{font-size: .28rem;letter-spacing: .03rem;}
        }
      }
      .text-list{ width: 6.6rem;margin: 0 auto;
        p{letter-spacing: .01rem;text-align:center;
            &:nth-child(2){margin-top:.2rem}
          .text-first{font-size:inherit;margin-right:0;color:inherit;font-style: inherit;}
        }
        .img-text{margin:.20rem 0; padding-right:0;position: static;
          .text-line{display: none;}
          .mobile-line{height:0.02rem;background-color:$color-005;margin: .1rem auto;width: 10%;display: block;}
          div{ text-align:center;width: 100%;padding-right: 0;}
          .text{
            .text-first{font-size:inherit;margin-right:0;color:inherit;font-style: inherit;}
          }
          img{width: 6.6rem;margin: .5rem auto;display: block;}
        }
      }
    }
    .digital{ padding:0;margin:.25rem auto 0 auto; width:6.6rem; 
      .bg-text{font-size:.80rem;  letter-spacing: .16rem;width:7rem;
        .bg-line{border:.06rem solid #ffe8d9;margin-top:.20rem;}
        .main-text{font-size: .28rem;letter-spacing: .03rem;
          .main-line{border:.02rem solid $color-005;margin-top:.10rem;}
          .text-ju{font-size: .28rem;letter-spacing: .03rem;}
        }
      }
      .coming{ height: 5rem;}
    }
    .fintech{ padding:0;margin-top:.25rem; max-width: 12rem; 
      .bg-text{font-size:.80rem;  letter-spacing: .16rem;width:4rem;
        .bg-line{border:.06rem solid #ffe8d9;margin-top:.20rem;}
        .main-text{font-size: .28rem;letter-spacing: .03rem;
          .main-line{border:.02rem solid $color-005;margin-top:.10rem;}
          .text-ju{font-size: .28rem;letter-spacing: .03rem;}
        }
      }
    }
  }
}

@media screen and (max-width: 1200px) and (min-width: 1024px) {
  .tech {
    .banner {background-size: 100% 100%;}
  }
}

@media screen and (max-width: 991.98px) and (min-width: 768px) {
  .seeMore{font-size: .16rem;}
  .tech {
    #floor1{height:auto;}#floor3{height:auto;}
    .mining{
      .mining-box{
        .box{
          .content-title{
            .mobile-title{
              .mobile-line{}
            }
            .left-text{
              .text-line{}
              .mt-55{}
              .text{
                .text-first{}
              }
            }
          }
          .right{
            .mt-45{}
            .right-text{.text-first{}}
          }
        .mb-50{margin-bottom: .5rem;}
        }
      }
    }

    .comm-business{height:auto;//background-image: url('/static/img/bg-design.png');
      .comm-inner{max-width:12rem;margin:auto;padding:.50rem 0 0 0;height:auto;
        .mobile-title{font-size:.24rem;letter-spacing:.03rem;text-align: center;font-weight: bold;color:$color-005;font-style: italic;margin:.25rem auto;
          .text-ju{font-size: .28rem;letter-spacing: .03rem;margin-left:.1rem;}
          .mobile-line{height:0.02rem;background-color:$color-005;margin: .1rem auto;width: 10%;}
        }
        
      .bg-text{font-size:.8rem;letter-spacing: .16rem;margin:0 auto .3rem auto;width:6.6rem;
        .bg-line{border:.06rem solid #ffe8d9;margin-top:.20rem;}
        .main-text{font-size: .28rem;letter-spacing: .03rem;
          .main-line{border:.02rem solid $color-005;margin-top:.1rem;}
          .text-ju{font-size: .28rem;letter-spacing: .03rem;}
        }
      }
        .main-title{font-size: .28rem;letter-spacing: .03rem;width:5rem;
          .main-line{border:2rem solid $color-005;margin-top:10rem;}
        }
        .content-left,.content-right{font-size:.16rem;margin:.4rem 0;line-height: .4rem;text-align:center;display:block;
          p{font-size: .16rem;
            span{font-size:inherit;margin-right:0;color:inherit;font-style: inherit;}
          }
        }
        .content-left{width:100%;padding: 0 .2rem;}
        .content-right{padding-top: .13rem;
          .product{width:30%;margin-right: .1rem;display: inline-block;overflow: hidden;height:auto;vertical-align: top;
            &:nth-child(2){margin:0;}
            img{width:1.6rem;height:1.1rem;}
            span{font-size:.1rem;display: block;}
          }
        }
      }
    }
    .design{height:auto;padding:.60rem 0;
      .design-inner{max-width:12rem;
        .mobile-title{font-size:.24rem;letter-spacing:.03rem;text-align: center;font-weight: bold;color:$color-005;font-style: italic;margin:.25rem auto;
          .text-ju{font-size: .28rem;letter-spacing: .03rem;margin-left:.1rem;}
          .mobile-line{height:0.02rem;background-color:$color-005;margin: .1rem auto;width: 10%;}
        }
      }
      .bg-text{font-size:.80rem;font-weight: 800;letter-spacing: .16rem;margin:0 auto .30rem auto;width:6.60rem;
        .bg-line{border:.06rem solid #ffe8d9;margin-top:.20rem;}
        .main-text{font-size: .28rem;letter-spacing: .03rem;
          .main-line{border:.02rem solid $color-005;margin-top:.10rem;}
          .text-ju{font-size: .28rem;letter-spacing: .03rem;}
        }
      }
      .text-list{
        p{letter-spacing: .01rem;text-align:center;
            &:nth-child(2){margin-top:.2rem}
          .text-first{font-size:inherit;margin-right:0;color:inherit;font-style: inherit;}
        }
        .img-text{margin:.20rem 0; padding-right: 0rem;
          .text-line{display: none;}
          div{ text-align:center;width: 100%;padding-right: 0;}
          .text{
            .text-first{font-size:inherit;margin-right:0;color:inherit;font-style: inherit;}
          }
          img{margin-top:.5rem}
        }
      }
    }
    .digital{ padding-top: .50rem; max-width: 12rem; 
      .bg-text{font-size:.80rem;  letter-spacing: .16rem;width:7rem;
        .bg-line{border:.06rem solid #ffe8d9;margin-top:.20rem;}
        .main-text{font-size: .28rem;letter-spacing: .03rem;
          .main-line{border:.02rem solid $color-005;margin-top:.10rem;}
          .text-ju{font-size: .28rem;letter-spacing: .03rem;}
        }
      }
      .coming{ height: 5rem;}
    }
    .fintech{ padding-top: .50rem; max-width: 12rem; 
      .bg-text{font-size:.80rem;  letter-spacing: .16rem;width:4rem;
        .bg-line{border:.06rem solid #ffe8d9;margin-top:.20rem;}
        .main-text{font-size: .28rem;letter-spacing: .03rem;
          .main-line{border:.02rem solid $color-005;margin-top:.10rem;}
          .text-ju{font-size: .28rem;letter-spacing: .03rem;}
        }
      }
    }
  }
}

@media screen and (max-width: 767.98px) {
  .seeMore{font-size: .16rem;}
  .mining .seeMore{margin-bottom: .5rem;}
  .tech {
    .banner {background-image: url("../../../static/img/tech01h5.jpg") !important;background-size: 7.5rem 4rem;}
  }
}



</style>
