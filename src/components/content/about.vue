<template>
  <div class="about" @click="clickblank($event)">
    <div class="banner" v-if="isPC == true" v-lazy:background-image="require('../../assets/img/banner.jpg')" ></div>
    <div class="banner" v-else v-lazy:background-image="require('../../assets/img/indexbgh5.png')"></div>
    <leaderbar :leadertext="$t('leader.about')" :clickwhere="blank" @barheight="getbarheight" @scrollnum="getnum"></leaderbar>
    <div class="allfloor" ref="allfloor">
      <div class="floor" id="floor1">
        <!-- 公司介绍 -->
        <div class="companyIntro">
          <div class="title">
            <span class="title-left">{{$t('content.about.companyIntro.titleLeft')}}</span>
            <span class="title-right">{{$t('content.about.companyIntro.titleRight')}}</span>
            <div class="line"></div>
          </div>
          <div class="company">
            <div class="picbox">
              <img v-lazy="require('../../../static/img/intro.png')" alt="company introduction" />
            </div>
            <div class="company-box">
              <div class="company-text" v-html="$t('content.about.companyIntro.infotext')"></div>
            </div>
          </div>
        </div>
      </div>
      <div class="floor" id="floor2">
        <!-- 愿景使命 -->
        <div class="mission">
          <div class="title">
            <span class="title-left">{{$t('content.about.mission.titleLeft')}}</span>
            <span class="title-right">{{$t('content.about.mission.titleRight')}}</span>
            <div class="line"></div>
          </div>
          <div class="mission-text">{{$t('content.about.mission.infotext')}}</div>
        </div>
      </div>
      <div class="floor" id="floor3">
        <!-- 时间轴 -->
        <timeline v-if="isPC == true"></timeline>
        <timelineh5 v-else></timelineh5>
      </div>
      <div class="floor" id="floor4">
        <!-- 管理团队 -->
        <slider :ifautoplay="num"></slider>
      </div>
      <div class="floor" id="floor5">
        <!-- 企业文化 -->
        <culture v-if="isPC == true"></culture>
        <cultureh5 v-else></cultureh5>
      </div>
      <div class="floor" id="floor6">
        <!-- 联系我们 -->
        <div
          class="contact"
          v-if="isPC == true"
          v-lazy:background-image="require('../../../static/img/bg-us.png')"
        >
          <dot class="point" :isShow="isShow" @isShow="usInfo($event)"></dot>
          <div class="contact-info" v-show="isShow">
            <img v-lazy="require('../../../static/img/icon-company.png')" alt="company" />
            <div class="contact-line"></div>
            <img v-lazy="require('../../../static/img/ebon-text.png')" alt="EBON" />
            <div class="contact-us">
              <p>{{$t('content.about.contact.text')}}</p>
            </div>
          </div>
          <div class="us-title">{{$t('content.about.contact.title')}}</div>
        </div>
        <div
          class="contact"
          v-else
          v-lazy:background-image="require('../../assets/img/maph5.png')"
        >
          <dot class="point" :isShow="isShow" @isShow="usInfo($event)"></dot>
          <div class="contact-info">
            <img v-lazy="require('../../../static/img/icon-company.png')" alt="company" />
            <div class="contact-line"></div>
            <img v-lazy="require('../../../static/img/ebon-text.png')" alt="EBON" />
            <div class="contact-us">
              <p>{{$t('content.about.contact.text')}}</p>
              <!-- <p style="margin-top:10px;">Sales：+86-571-123456789</p> -->
            </div>
          </div>
          <div class="us-title">{{$t('content.about.contact.title')}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import leaderbar from "@/components/leader/leaderbar";
import dot from "@/components/tool/dot";
import timeline from "@/components/model/timeline";
import timelineh5 from "@/components/model/timelineh5";
import slider from "@/components/model/slider";
import culture from "@/components/model/culture";
import cultureh5 from "@/components/model/cultureh5";

export default {
  components: {
    leaderbar,
    dot,
    timeline,
    slider,
    culture,
    timelineh5,
    cultureh5
  },
  data() {
    return {
      isShow: false,
      defalutshow: 0,
      isPC: true,
      blank: "",
      barheight: 0,
      num:'0' //滚动位置
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
    usInfo(flag) {
      this.isShow = flag;
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
    getnum(data){
      this.num = data;
    }
  }
};
</script>

<style lang="scss" scoped>
.about {
  overflow: hidden;
  .banner {
    margin-top: 80px;
    height: 600px;
    background-color: #eee;
    background-repeat: no-repeat;
    background-position: center center;
    overflow: hidden;
  }
  .floor {
    overflow: hidden;
    // 每个模块标题样式
    .title {
      margin: 0 auto;
      text-align: center;
      span {
        text-transform: uppercase;
        font-size: 24px;
        font-weight: 400;
        letter-spacing: 2px;
      }
      .title-left {
        color: $color-005;
        margin-right: 10px;
      }
      .title-right {
        color: $color-ff6;
      }
      .line {
        background-image: url("/static/img/icon-line.png");
        width: 62px;
        height: 2px;
        margin: 10px auto;
        position: relative;
      }
    }
    .companyIntro {
      overflow: hidden;
      padding: 60px 0;
      .company {
        max-width: 1200px;
        margin: 50px auto;
        .picbox {
          display: inline-block;
          vertical-align: top;
          height: 250px;
          img {
            display: block;
            height: 250px;
          }
        }
        .company-box {
          display: inline-block;
          width: 610px;
          //height: 250px;
          margin-left: 40px;
          .company-text {
            display: table-cell;
            font-size: 18px;
            font-weight: 400;
            color: rgba(119, 119, 119, 1);
            padding: 20px 0;
            line-height: 40px;
            letter-spacing: 1px;
          }
        }
      }
    }
    .mission {
      background-image: url("/static/img/bg-mission.png");
      width: 100%;
      height: 260px;
      padding: 60px 0;
      .title {
        margin: 0 auto;
      }
      .mission-text {
        width: 1175px;
        text-align: center;
        margin: 0 auto;
        font-size: 36px;
        font-weight: 400;
        font-style: italic;
        color: #fff;
        line-height: 48px;
      }
    }
    .contact {
      width: 100%;
      height: 513px;
      position: relative;
      background-repeat: no-repeat;
      background-size: 100% 100%;
      .contact-info {
        text-align: center;
        width: 265px;
        position: absolute;
        top: 53%;
        left: 45%;
        .contact-line {
          width: 197px;
          height: 1px;
          border: 1px solid #8f9292;
          margin: auto;
        }
        .contact-us {
          background-image: url("/static/img/bg-info.png");
          height: 88px;
          color: #fff;line-height: 60px;
          padding: 20px 0;
        }
      }
      .us-title {
        font-size: 48px;
        font-weight: bold;
        color: rgba(21, 21, 21, 1);
        text-align: center;
        opacity: 0.35;
        padding-top: 160px;
      }
    }
  }
  .point {
    cursor: pointer;
    position: absolute;
    left: 45%;
    top: 55%;
  }
}

@media (max-width: 1200px) {
  .about {
    .banner {
      margin-top: 1rem;
      height: 4rem;
      background-size: cover;
    }
    .floor {
      overflow: hidden;
      // 每个模块标题样式
      .title {
        span {
          font-size: 0.24rem;
          letter-spacing: 2px;
        }
        .title-left {
          color: $color-005;
          margin-right: 0.12rem;
        }
        .title-right {
          color: $color-ff6;
        }
        .line {
          background-size: 100% 100%;
          width: 0.62rem;
          height: 2px;
          margin: 0.12rem auto;
        }
      }
      .companyIntro {
        padding: 0.4rem 0;
        .company {
          max-width: unset;
          margin: 0.25rem 0.45rem 0 0.45rem;
          .picbox {
            display: block;
            height: 2.8rem;
            margin-bottom: 0.4rem;
            img {
              display: block;
              width: 100%;
              height: 2.8rem;
            }
          }
          .company-box {
            display: block;
            width: 100%;
            height: auto;
            margin-left: 0;
            .company-text {
              font-size: 0.18rem;
              padding: 0 0;
              line-height: 0.34rem;
              letter-spacing: 1px;
            }
          }
        }
      }
      .mission {
        background-image: url("/static/img/bg-mission.png");
        background-size: cover;
        width: 100%;
        height: 2rem;
        padding: 0.2rem 0;
        .title {
          margin: 0 auto;
        }
        .mission-text {
          width: 100%;
          font-size: 0.24rem;
          line-height: 0.36rem;
        }
      }
      .contact {
        width: 100%;
        height: 4.62rem;
        position: relative;
        background-repeat: no-repeat;
        background-position: center center;
        background-size: 100% 100%;
        .contact-info {
          text-align: center;
          width: 4rem;
          position: absolute;
          top: 34%;
          left: 45%;
          .contact-line {
            width: 1.97rem;
            height: 1px;
            border: 1px solid #8f9292;
            margin: auto;
          }
          .contact-us {
            background-image: url("/static/img/bg-info.png");
            background-size: 100% 100%;
            height: 1.1rem;
            color: #fff;
            padding: 0.2rem 0;
            padding-top: 0.2rem;
            p{
              font-size: 0.2rem;    line-height: .8rem;
            }
          }
        }
        .us-title {
          font-size: 0.48rem;
          font-weight: bold;
          color: rgba(21, 21, 21, 1);
          text-align: center;
          opacity: 0.35;
          padding-top: 0.8rem;
        }
      }
    }
    .point {
      cursor: pointer;
      position: absolute;
      left: 37%;
      top: 46%;
    }
  }
}
</style>
