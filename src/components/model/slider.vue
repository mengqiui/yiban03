<template>
  <div class="manageTeam" ref="man">
    <div class="team-inner">
      <div class="title">
        <span class="title-left" style="margin-right:0;">{{$t('content.about.team.titleLeft')}}</span>
        <span class="title-right">{{$t('content.about.team.titleRight')}}</span>
        <div class="line"></div>
      </div>
      <div class="slider">
        <div
          class="slider-li team-card"
          v-for="(item,index) in $t('content.about.team.teamlist')"
          :key="index"
        >
          <div class="slider-inner">
            <div class="team-body">
              <div class="team-body-inner">
                <div class="team-img">
                  <img :data-lazy="item.pic" alt class="people-pic" />
                </div>
                <div class="team-text">
                  <p class="text-blue team-name">{{item.name}}</p>
                  <p class="team-post">{{item.post}}</p>
                </div>
              </div>
              <div class="team-intro" v-html="item.intro"></div>
              <div class="more">MORE+</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="allinfo">
      <div class="peo-list" v-for="(item,index) in $t('content.about.team.teamlist')" :key="index">
        <img v-lazy="item.pic" alt class="pic" />
        <div class="name">{{item.name}}</div>
        <div class="post">{{item.post}}</div>
        <div class="info" v-html="item.info"></div>
        <div class="exp">
          <div
            class="show-exp"
            v-show="item.exp"
            v-for="(i,k) in item.exp"
            :key="'exp' + k"
          >{{i.expli}}</div>
        </div>
        <img class="un" v-show="item.un" v-lazy="item.un" alt />
      </div>
    </div>
    <div class="dialog" id="dialog">
      <div class="showarea">
        <div class="close" id="close">×</div>
        <div class="show-left">
          <img src alt class="show-people" />
        </div>
        <div class="show-right">
          <div class="show-name"></div>
          <div class="show-post"></div>
          <div class="show-info"></div>
          <div class="show-exp-box"></div>
          <img src alt class="show-un" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "../../assets/js/slick";
import "../../assets/css/slick.css";

export default {
  props: {
    ifautoplay: {}
  },
  watch: {
    ifautoplay: {
      handler: function(val, oldval) {
        if (val == 3) {
          $(".slider").slick("slickPlay");
        }
      },
      deep: true
    },
    languageType: {
      handler: function(val, oldval) {
        $(".slider").slick("unslick");
        this.$nextTick(function() {
          this.goslider();
          this.godialog();
        });
      },
      deep: true
    }
  },
  data() {
    return {
      auto: false,
      goauto: true
    };
  },
  computed: {
    languageType() {
      return this.$i18n.locale;
    }
  },
  mounted() {
    this.goslider();
    this.godialog();
  },
  methods: {
    goslider() {
      let picl = require("../../assets/img/icon-left.jpg");
      let picr = require("../../assets/img/icon-right.jpg");
      $(".slider").slick({
        lazyLoad: "ondemand",
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        prevArrow:
          "<button type='button' class='slick-prev slick-arrow'><img src='" +
          picl +
          "' alt=''></button>",
        nextArrow:
          "<button type='button' class='slick-next slick-arrow'><img src='" +
          picr +
          "' alt=''></button>",
        responsive: [
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 2,
              centerMode: true
            }
          },
          {
            breakpoint: 1000,
            settings: {
              slidesToShow: 1,
              centerMode: true
            }
          }
        ]
      });
    },
    godialog() {
      $(".slick-slide .more").on("click", function() {
        let num = $(this)
          .parents(".slick-slide")
          .attr("data-slick-index");
        if (num > 5) {
          num = num - 6;
        }
        $("#dialog").show();

        let pic = $(".peo-list")
          .eq(num)
          .find(".pic")
          .attr("data-src");
        let name = $(".peo-list")
          .eq(num)
          .find(".name")
          .html();
        let post = $(".peo-list")
          .eq(num)
          .find(".post")
          .html();
        let info = $(".peo-list")
          .eq(num)
          .find(".info")
          .html();
        let exp = $(".peo-list")
          .eq(num)
          .find(".exp")
          .html();
        let un = $(".peo-list")
          .eq(num)
          .find(".un")
          .attr("data-src");
        $("#dialog")
          .find(".show-people")
          .attr("src", pic);
        $("#dialog")
          .find(".show-name")
          .html(name);
        $("#dialog")
          .find(".show-post")
          .html(post);
        $("#dialog")
          .find(".show-info")
          .html(info);
        $("#dialog")
          .find(".show-exp-box")
          .html(exp);
        if (un == "undefined") {
          $("#dialog")
            .find(".show-un")
            .hide();
        } else {
          $("#dialog")
            .find(".show-un")
            .attr("src", un);
        }
      });
      $("#close").on("click", function() {
        $("#dialog").hide();
      });
    }
  }
};
</script>

<style lang="scss" scoped>
/deep/ {
  .slick-arrow {
    background: transparent !important;
    border: none !important;
    cursor: pointer !important;
    position: absolute;
    bottom: -20px;
  }
  .slick-prev {
    left: 45%;
  }
  .slick-next {
    right: 45%;
  }
  .slick-slide {
    height: 420px;
    margin: 0 20px;
  }
}
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
.allinfo {
  display: none;
  height: 0;
  overflow: hidden;
  position: relative;
  z-index: -10;
  .peo-list {
    .pic {
      display: block;
      height: 20px;
    }
    .un {
      display: block;
      height: 20px;
    }
  }
}
.manageTeam {
  height: 671px;
  background: #f3f3f3;
  padding: 60px 0;
  width: 100%;
  .team-inner {
    max-width: 1200px;
    margin: 0 auto;
    .slider {
      margin-top: 50px;
      .team-card {
        .slider-inner {
          background: #fff;
          padding: 15px;
        }
        .team-body {
          border: 1px solid #e5e5e5;
          padding: 20px;
          .team-body-inner {
            height: 110px;
            margin-bottom: 20px;
          }
          .team-img {
            width: 110px;
            height: 110px;
            border-radius: 50%;
            overflow: hidden;
            display: inline-block;
            vertical-align: top;
            background: #fff;
            img {
              width: 100%;
              height: 100%;
            }
          }
          .team-text {
            display: inline-block;
            width: 160px;
            margin: 15px 0 10px 10px;
            .team-name {
              font-size: 21px;
              font-weight: 400;
              color: rgba(0, 117, 193, 1);
              line-height: 24px;
            }
            .team-post {
              font-size: 14px;
              font-weight: 400;
              margin-top: 10px;
              color: #222;
              line-height: 24px;
            }
          }
          .team-intro {
            color: #777;
            line-height: 24px;
            margin-top: 10px;
            letter-spacing: 1px;
            height: 120px;
            overflow: hidden;
          }
          .more {
            margin: 20px auto;
            font-size: 16px;
            font-weight: 400;
            color: $color-ff6;
            text-align: center;
            cursor: pointer;
            transition: color 1s;
            &:hover {
              color: $color-005;
            }
          }
        }
      }
    }
  }
  .dialog {
    display: none;
    position: fixed;
    z-index: 100;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background: rgba($color: #000, $alpha: 0.6);
    .showarea {
      position: absolute;
      width: 800px;
      background: #fff;
      padding: 30px 30px;
      left: 50%;
      top: 25%;
      margin-left: -400px;
      .close {
        position: absolute;
        right: 0;
        top: 0;
        background: #00c1de;
        cursor: pointer;
        color: #fff;
        height: 40px;
        width: 40px;
        font-size: 40px;
        text-align: center;
        line-height: 30px;
        overflow: hidden;
      }
      .show-left {
        width: 30%;
        float: left;
        overflow: hidden;
        .show-people {
          display: block;
          width: 100%;
        }
      }
      .show-right {
        width: 70%;
        float: left;
        overflow: hidden;
        padding-left: 30px;
        .show-name {
          line-height: 30px;
          color: #000;
          font-size: 24px;
          font-weight: bold;
          margin-bottom: 20px;
        }
        .show-post {
          line-height: 30px;
          color: #000;
          font-size: 24px;
          margin-bottom: 20px;
        }
        .show-info {
          height: 150px;
          overflow-y: auto;
          line-height: 30px;
          color: #000;
          font-size: 20px;
          margin-bottom: 20px;
        }
        .show-exp {
          background: url("../../assets/img/member.png") no-repeat left top;
          background-size: 30px 30px;
          padding-left: 36px;
          line-height: 30px;
          color: #000;
          font-size: 18px;
          margin-top: 20px;
          margin-bottom: 20px;
        }
        .show-un {
          display: block;
          height: 60px;
          overflow: hidden;
        }
      }
    }
  }
}

@media (max-width: 768px) {
  /deep/ {
    .slick-arrow {
      background: transparent !important;
      border: none !important;
      cursor: pointer !important;
      position: absolute;
      bottom: -0.8rem;
    }
    .slick-prev {
      left: 30%;
    }
    .slick-next {
      right: 30%;
    }
    .slick-slide {
      height: 4.2rem;
      margin: 0 0.2rem;
    }
  }
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
  .manageTeam {
    height: auto;
    background: #f3f3f3;
    padding: 0.4rem 0 1.3rem;
    .team-inner {
      max-width: unset;
      margin: 0 auto;
      .slider {
        margin-top: 0.4rem;
        .team-card {
          .slider-inner {
            background: #fff;
            padding: 0.15rem;
          }
          .team-body {
            border: 1px solid #e5e5e5;
            padding: 0.2rem;
            .team-body-inner {
              height: 1.4rem;
              margin-bottom: 0.1rem;
              overflow: hidden;
              padding-top: 0.2rem;
            }
            .team-img {
              width: 1.1rem;
              height: 1.1rem;
              border-radius: 50%;
            }
            .team-text {
              display: inline-block;
              width: 2.9rem;
              margin: 0rem 0 0.1rem 0.1rem;
              .team-name {
                font-size: 0.21rem;
                line-height: 0.24rem;
              }
              .team-post {
                font-size: 0.14rem;
                margin-top: 0.1rem;
                line-height: 0.24rem;
              }
            }
            .team-intro {
              line-height: 0.3rem;
              margin-top: 0.1rem;
              height: 1.5rem;
              /deep/ p {
                font-size: 0.2rem;
              }
            }
            .more {
              margin: 0.1rem auto 0;
              font-size: 0.16rem;
            }
          }
        }
      }
    }
    .dialog {
      .showarea {
        position: absolute;
        width: 90%;
        background: #fff;
        padding: 0.3rem 0.3rem;
        left: 50%;
        top: 25%;
        margin-left: -45%;
        .close {
          position: absolute;
          right: 0;
          top: 0;
          background: #00c1de;
          cursor: pointer;
          color: #fff;
          height: 0.4rem;
          width: 0.4rem;
          font-size: 0.4rem;
          text-align: center;
          line-height: 0.3rem;
          overflow: hidden;
        }
        .show-left {
          width: 20%;
          float: left;
          overflow: hidden;
          .show-people {
            display: block;
            width: 100%;
          }
        }
        .show-right {
          width: 80%;
          float: left;
          overflow: hidden;
          padding-left: 0.3rem;
          .show-name {
            line-height: 0.3rem;
            color: #000;
            font-size: 0.24rem;
            font-weight: bold;
            margin-bottom: 0.2rem;
          }
          .show-post {
            line-height: 0.3rem;
            color: #000;
            font-size: 0.24rem;
            margin-bottom: 0.2rem;
          }
          .show-info {
            height: 1.5rem;
            overflow-y: auto;
            line-height: 0.3rem;
            color: #000;
            font-size: 0.2rem;
            margin-bottom: 0.2rem;
          }
          .show-exp {
            background: url("../../assets/img/member.png") no-repeat left top;
            background-size: 0.3rem 0.3rem;
            padding-left: 0.36rem;
            line-height: 0.3rem;
            color: #000;
            font-size: 0.18rem;
            margin-top: 0.2rem;
            margin-bottom: 0.2rem;
          }
          .show-un {
            display: block;
            height: 0.6rem;
            overflow: hidden;
          }
        }
      }
    }
  }
}
</style>
