<template>
  <div class="talents" @click="clickblank($event)">
    <div class="banner" v-lazy:background-image="require('../../assets/img/staff.jpg')"></div>
    <leaderbar :leadertext="$t('leader.talents')" :clickwhere="blank" @barheight="getbarheight"></leaderbar>
    <div class="allfloor" ref="allfloor">
      <div class="floor" id="floor1">
        <div class="talentDevelopment">
          <div class="talentDevelopment-inner">
            <div class="box">
              <div class="left">
                <img v-lazy="require('../../assets/img/td1.png')" alt class="pic" />
              </div>
              <div class="right">
                <p class="text" v-html="$t('content.talents.text')"></p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="floor" id="floor2">
        <div class="workingEnvironment">
          <div class="workingEnvironment-inner">
            <p class="tit" v-html="$t('content.talents.title')"></p>
            <div class="box">
              <div class="left" v-lazy:background-image="require('../../assets/img/work1.png')"></div>
              <div class="right" v-lazy:background-image="require('../../assets/img/work2.png')"></div>
            </div>
          </div>
        </div>
      </div>
      <div class="floor" id="floor3">
        <div class="employeeActivity">
          <div class="employeeActivity-inner">
            <p class="tit" v-html="$t('content.talents.title1')"></p>
            <div class="box">
              <div class="right" v-lazy:background-image="require('../../assets/img/activity1.png')"></div>
              <div class="left" v-lazy:background-image="require('../../assets/img/activity2.png')"></div>
            </div>
          </div>
        </div>
      </div>
      <div class="floor" id="floor4">
        <div class="recruitment">
          <div class="recruitment-inner">
            <p class="tit" v-html="$t('content.talents.title2')"></p>
            <div class="box">
              <div class="right">
                <img v-lazy="require('../../assets/img/US1.png')" alt class="pic" />
              </div>
              <div class="left">
                <div class="bao">
                  <img v-lazy="require('../../assets/img/join.png')" alt class="join" />
                  <p class="line"></p>
                  <p class="text" v-html="$t('content.talents.text1')"></p>
                </div>
              </div>
            </div>
          </div>
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
      isPC: true,
      barheight: 0,
      blank: ""
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
    }
  }
};
</script>

<style lang="scss" scoped>
.talents {overflow: hidden;
  .banner {
    margin-top: 80px;
    height: 600px;
    background-position: center center;
    background-repeat: no-repeat;
    overflow: hidden;
  }
  .floor {
    overflow: hidden;
  }
  .talentDevelopment {
    width: 100%;
    overflow: hidden;
    height: 520px;
    .talentDevelopment-inner {
      max-width: 1200px;
      margin: 0 auto;
      padding-top: 96px;
      overflow: hidden;
      .box {
        height: 350px;
        overflow: hidden;
        position: relative;
        padding-right: 518px;
        .right {
          position: absolute;
          right: 0;
          top: 0;
          width: 518px;
          height: 350px;
          overflow: hidden;
          background: url("../../assets/img/talentbg.png") no-repeat right
            bottom;
          background-size: 498px 326px;
          .text {
            margin: 43px 0 0 52px;
            font-size: 28px;
            font-weight: 400;
            color: #777;
            line-height: 36px;
            overflow: hidden;
          }
        }
        .left {
          width: 100%;
          overflow: hidden;
          .pic {
            display: block;
            width: 100%;
            height: 350px;
            overflow: hidden;
          }
        }
      }
    }
  }
  .workingEnvironment {
    overflow: hidden;
    background: #f3f3f3;
    height: 580px;
    .workingEnvironment-inner {
      padding-top: 60px;
      max-width: 1200px;
      margin: 0 auto;
      overflow: hidden;
      .tit {
        height: 40px;
        line-height: 40px;
        border-left: 6px #0075c2 solid;
        padding-left: 22px;
        font-size: 24px;
        color: #0075c2;
        margin-bottom: 40px;
        /deep/ span {
          font-size: 24px;
          color: #ff6600;
        }
      }
      .box {
        height: 350px;
        overflow: hidden;
        .left {
          width: 44%;
          float: left;
          height: 350px;
          overflow: hidden;
          background-position: center center;
          background-repeat: no-repeat;
          background-size: cover;
        }
        .right {
          width: 56%;
          float: left;
          height: 350px;
          overflow: hidden;
          background-position: center center;
          background-repeat: no-repeat;
          background-size: cover;
        }
      }
    }
  }
  .employeeActivity {
    overflow: hidden;
    background: #fff;
    height: 580px;
    .employeeActivity-inner {
      padding-top: 60px;
      max-width: 1200px;
      margin: 0 auto;
      overflow: hidden;
      .tit {
        height: 40px;
        line-height: 40px;
        border-left: 6px #0075c2 solid;
        padding-left: 22px;
        font-size: 24px;
        color: #0075c2;
        margin-bottom: 40px;
        /deep/ span {
          font-size: 24px;
          color: #ff6600;
        }
      }
      .box {
        height: 350px;
        overflow: hidden;
        .left {
          width: 44%;
          float: left;
          height: 350px;
          overflow: hidden;
          background-position: center center;
          background-repeat: no-repeat;
          background-size: cover;
        }
        .right {
          width: 56%;
          float: left;
          height: 350px;
          overflow: hidden;
          background-position: center center;
          background-repeat: no-repeat;
          background-size: cover;
        }
      }
    }
  }
  .recruitment {
    height: 580px;
    overflow: hidden;
    background: #f3f3f3;
    .recruitment-inner {
      padding-top: 60px;
      max-width: 1200px;
      margin: 0 auto;
      overflow: hidden;
      .tit {
        height: 40px;
        line-height: 40px;
        border-left: 6px #0075c2 solid;
        padding-left: 22px;
        font-size: 24px;
        color: #0075c2;
        margin-bottom: 40px;
        /deep/ span {
          font-size: 24px;
          color: #ff6600;
        }
      }
      .box {
        height: 350px;
        overflow: hidden;
        position: relative;
        padding-left: 470px;
        .left {
          position: absolute;
          left: 0;
          top: 0;
          width: 470px;
          height: 350px;
          display: table;
          overflow: hidden;
          background: #fff url("../../assets/img/eb.png") no-repeat left bottom;
          background-size: 377px 68px;
          .bao {
            display: table-cell;
            vertical-align: middle;
            overflow: hidden;
            .join {
              display: block;
              height: 26px;
              margin: 0 auto;
              margin-bottom: 22px;
            }
            .line {
              width: 213px;
              margin: 0 auto;
              height: 1px;
              background: #666;
              overflow: hidden;
              margin-bottom: 22px;
            }
            .text {
              text-align: center;
              overflow: hidden;
              font-size: 28px;
              font-weight: 400;
              color: #777;
              line-height: 28px;
            }
          }
        }
        .right {
          width: 100%;
          overflow: hidden;
          .pic {
            display: block;
            width: 100%;
            height: 350px;
            overflow: hidden;
          }
        }
      }
    }
  }
}
@media screen and (max-width: 1023.98px) and (min-width: 992px) {
  .talents {
    .banner { margin-top: 1rem; height: 5rem;}
    .talentDevelopment { height: 3.2rem;
      .talentDevelopment-inner { padding-top: .56rem;margin: 0 0.1rem;
        .box {height: 3rem;padding-right: 5.18rem;background:rgba(243,243,243,1);bottom: .3rem;
          .right {width: 5rem;height: 3rem;background-size: 5rem 3rem;
            .text { margin: .34rem 0 0 .4rem; font-size: .24rem; line-height: .4rem;}
          }
          .left {width:4.3rem;
            .pic {
              height: 3rem;
            }
          }
        }
      }
    }
    .workingEnvironment { 
      .workingEnvironment-inner {
        .box { padding: 0 .1rem; }
      }
    }
    .employeeActivity {
      .employeeActivity-inner {
        .box {padding: 0 .1rem; }
      }
    }
    .recruitment {height: 4.2rem;
      .recruitment-inner {padding-top: .4rem;
        .tit {height: .4rem;line-height: .4rem;padding-left: .22rem;font-size: .24rem;margin-bottom: .4rem;border-left: .06rem #0075c2 solid;margin-left: .1rem;
          /deep/ span { font-size: .24rem; }
        }
        .box { height: 2rem; padding-left: 4.5rem;left:.1rem;
          .left { width: 4.5rem; height: 2.1rem; background-size: 3.4rem .6rem;
            .bao {
              .join { height: .26rem; margin-bottom: .22rem; }
              .line { width: 2.13rem; margin-bottom: .22rem; }
              .text { font-size: .28rem; line-height: .28rem; }
            }
          }
          .right {width: 6.1rem;
            .pic { width: 5.1rem; height: 2rem; }
          }
        }
      }
    }
  }
}
@media screen and (max-width: 991.98px) and (min-width: 768px) { 
  .talents {
    .banner { margin-top: .8rem; height: 4rem;}
    .talentDevelopment { height: 3.2rem;
      .talentDevelopment-inner { padding-top: .56rem;margin: 0 0.1rem;
        .box {height: 2rem;padding-right: 5.18rem;background:rgba(243,243,243,1);
          .right {width: 3.8rem;height: 2rem;background-size: 3.8rem 2rem;
            .text {margin: .14rem 0 0 .4rem;font-size: .22rem;line-height: .36rem;}
          }
          .left {width: 3.4rem;
            .pic {
              height: 2rem;
            }
          }
        }
      }
    }
    .workingEnvironment { height: 3.5rem;
      .workingEnvironment-inner { padding-top: .3rem;
        .tit {height: .4rem;line-height: .4rem;padding-left: .22rem;font-size: .24rem;margin-bottom: .4rem;border-left: .06rem #0075c2 solid;margin-left: .1rem;
          /deep/ span { font-size: .24rem; }
        }
        .box { height: 2rem;margin-left:.1rem;
          .left { height: 2rem;width:3rem; }
          .right {height: 2rem;width:4.1rem; }
        }
      }
    }
    .employeeActivity {height: 3.5rem;
      .employeeActivity-inner { padding-top: .3rem;
        .tit { height: .4rem; line-height: .4rem; padding-left: .22rem; font-size: .24rem;margin-bottom: .4rem;border-left: .06rem #0075c2 solid;margin-left: .1rem;
          /deep/ span { font-size: .24rem; }
        }
        .box {height: 2rem;margin-left:.1rem;
        .left {height: 2rem;}
        .right {height: 2rem;width:3.92rem;}
        }
      }
    }
    .recruitment {height: 4.2rem;
      .recruitment-inner {padding-top: .4rem;
        .tit {height: .4rem;line-height: .4rem;padding-left: .22rem;font-size: .24rem;margin-bottom: .4rem;border-left: .06rem #0075c2 solid;margin-left: .1rem;
          /deep/ span { font-size: .24rem; }
        }
        .box { height: 2rem; padding-left: 3rem;left:.1rem;
          .left { width: 3.4rem; height: 2.1rem; background-size: 3rem .6rem;
            .bao {
              .join { height: .26rem; margin-bottom: .22rem; }
              .line { width: 2.13rem; margin-bottom: .22rem; }
              .text { font-size: .26rem; line-height: .3rem; }
            }
          }
          .right {width: 4.1rem;
            .pic { width: 4.1rem; height: 2rem; }
          }
        }
      }
    }
  }
 }

@media screen and (max-width: 767.98px) {
  .talents {
    .banner { margin-top: .8rem; height: 4rem; background-size: 7.5rem 4rem;background-image:url('../../assets/img/staffh5.png')!important; }
    .talentDevelopment { height: 3.2rem;
      .talentDevelopment-inner { padding-top: .56rem;margin: 0 0.1rem;
        .box {height: 2rem;padding-right: 5.18rem;background:rgba(243,243,243,1);
          .right {width: 3.3rem;height: 2rem;background-size: 3.3rem 1.87rem;
            .text {margin: .14rem 0 0 .14rem;font-size: .22rem;line-height: .36rem;}
          }
          .left {width: 3.6rem;
            .pic {
              height: 2rem;
            }
          }
        }
      }
    }
    .workingEnvironment { height: 3.5rem;
      .workingEnvironment-inner { padding-top: .3rem;
        .tit {height: .4rem;line-height: .4rem;padding-left: .22rem;font-size: .24rem;margin-bottom: .4rem;border-left: .06rem #0075c2 solid;margin-left: .1rem;
          /deep/ span { font-size: .24rem; }
        }
        .box { height: 2rem;margin-left:.1rem;
          .left { height: 2rem;width:3rem; }
          .right {height: 2rem;width:4.1rem; }
        }
      }
    }
    .employeeActivity {height: 3.5rem;
      .employeeActivity-inner { padding-top: .3rem;
        .tit { height: .4rem; line-height: .4rem; padding-left: .22rem; font-size: .24rem;margin-bottom: .4rem;border-left: .06rem #0075c2 solid;margin-left: .1rem;
          /deep/ span { font-size: .24rem; }
        }
        .box {height: 2rem;margin-left:.1rem;
        .left {height: 2rem;}
        .right {height: 2rem;width:3.92rem;}
        }
      }
    }
    .recruitment {height: 4.2rem;
      .recruitment-inner {padding-top: .4rem;
        .tit {height: .4rem;line-height: .4rem;padding-left: .22rem;font-size: .24rem;margin-bottom: .4rem;border-left: .06rem #0075c2 solid;margin-left: .1rem;
          /deep/ span { font-size: .24rem; }
        }
        .box { height: 2rem; padding-left: 3rem;left:.1rem;
          .left { width: 3.4rem; height: 2.1rem; background-size: 3rem .6rem;
            .bao {
              .join { height: .26rem; margin-bottom: .22rem; }
              .line { width: 2.13rem; margin-bottom: .22rem; }
              .text { font-size: .26rem; line-height: .3rem; }
            }
          }
          .right {width: 4.1rem;
            .pic { width: 4.1rem; height: 2rem; }
          }
        }
      }
    }
  }
}
</style>
