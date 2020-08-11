<template>
  <div class="news" @click="clickblank($event)">
    <div class="banner" v-lazy:background-image="require('../../assets/img/newsbg.png')"></div>
    <leaderbar :leadertext="$t('leader.news')" :clickwhere="blank" @barheight="getbarheight"></leaderbar>
    <div class="allfloor" ref="allfloor">
      <div class="floor" id="floor1">
        <div class="newlist">
          <div class="newlist-inner">
            <div
              class="news-li"
              v-for="(nlist,a) in newslist"
              :key="a"
              @click="goNew(nlist.id)"
              v-lazy:background-image="nlist.newsThumbnail"
            >
              <p class="tit">{{nlist.newsTitle}}</p>
              <p class="time">{{nlist.newsTime}}</p>
              <p class="info">{{nlist.newsInfo}}</p>
            </div>
            <router-link class="more" to="/allnews">{{$t('content.news.more')}}</router-link>
          </div>
        </div>
      </div>
      <div class="floor" id="floor2">
        <div class="database">
          <div class="database-inner">
            <p class="tit">
              {{$t('content.news.titleLeft')}}
              <span>{{$t('content.news.titleRight')}}</span>
            </p>
            <div class="box">
              <div class="box-inner">
                <div class="video-li" v-for="(list,ind) in piclist" :key="ind">
                  <div
                    class="video-inner"
                    @click="showvideo(list.video)"
                    v-lazy:background-image="list.img"
                  >
                    <img v-lazy="require('../../assets/img/btn.png')" alt class="btn" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="mask" v-show="show">
            <div class="showarea">
              <div class="close" @click="close">×</div>
              <div class="prism-player" id="player-con"></div>
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
      newslist: {},
      language: "",
      show: false,
      newlist: "",
      videolink: "",
      isPC: true,
      blank: "",
      barheight: 0,
      piclist: [
        {
          img: require("../../assets/img/newlist2.png"),
          video: require("../../assets/img/video1.mp4"),
        },
        {
          img: require("../../assets/img/newlist3.png"),
          video: require("../../assets/img/video2.mp4"),
        },
        {
          img: require("../../assets/img/newlist1.png"),
          video: require("../../assets/img/video.mp4"),
        },
      ],
      player: "",
    };
  },
  watch: {
    languageType: {
      handler: function (val, oldval) {
        if (val == "zh") {
          this.language = "cn";
        } else {
          this.language = "en";
        }
        this.$nextTick(function () {
          this.getnews();
        });
      },
      deep: true,
    },
  },
  computed: {
    languageType() {
      return this.$i18n.locale;
    },
  },
  created() {
    if (this.$i18n.locale == "zh") {
      this.language = "cn";
    } else {
      this.language = "en";
    }
    this.getnews();
  },
  mounted() {
    if (this.$router.currentRoute.query.guid != null) {
      let index = this.$router.currentRoute.query.guid;
      this.gundong(index);
    }
    this.ispc();
  },
  methods: {
    getnews() {
      let that = this;
      that.$axios
        .get("/ebang/news/listNews/" + that.language + "?curPage=1&pageSize=10")
        .then(function (response) {
          if (response.status === 200) {
            const data = response.data.content.slice(0, 3);
            that.newslist = data;
            that.changepic();
          }
        })
        .catch(function (error) {});
    },
    showvideo(link) {
      this.show = true;
      this.videolink = link;
      this.player = new Aliplayer({
        id: "player-con", // 容器id
        source: this.videolink,
        autoplay: true, // 是否自动播放
        width: "100%", // 播放器宽度
        height: "5rem", // 播放器高度
        isLive: false,
        rePlay: false,
        playsinline: true,
        preload: true,
        controlBarVisibility: "hover",
        useH5Prism: true,
        x5_video_position:'top', //指定视频在上部显示
        x5_type:'h5'
      });
    },
    close() {
      this.show = false;
      this.videolink = "";
      this.player.dispose();
    },
    gundong(index) {
      const targetOffsetTop =
        this.$refs.allfloor.children[index].offsetTop - this.barheight;
      this.$gomove.move(targetOffsetTop);
    },
    goNew(index) {
      let routerJump = this.$router.resolve({
        path: "/newDetail",
        query: { id: index, lan: this.language },
      });
      window.open(routerJump.href, "_blank");
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
    changepic() {
      for (let i = 0; i < this.newslist.length; i++) {
        let arr = [];
        if (typeof this.newslist[i].newsThumbnail == "string") {
          this.newslist[i].newsThumbnail = JSON.parse(
            this.newslist[i].newsThumbnail
          ).url;
        }
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.news {
  overflow: hidden;
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
  .newlist {
    width: 100%;
    height: 680px;
    transition: all 0.5s;
    overflow: hidden;
    cursor: pointer;
    .newlist-inner {
      max-width: 1200px;
      margin: 0 auto;
      padding-top: 60px;
      overflow: hidden;
      .news-li {
        height: 140px;
        margin-bottom: 30px;
        background-position: left center;
        background-repeat: no-repeat;
        background-size: 210px 140px;
        overflow: hidden;
        padding-left: 236px;
        .tit {
          line-height: 36px;
          font-size: 28px;
          color: #444;
          overflow: hidden;
          margin-bottom: 11px;
        }
        .time {
          line-height: 20px;
          font-size: 18px;
          color: #999;
          overflow: hidden;
          margin-bottom: 11px;
        }
        .info {
          line-height: 24px;
          font-size: 18px;
          color: #444;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;
        }
        &:hover {
          .tit {
            color: $color-005;
          }
        }
      }
      .more {
        width: 110px;
        display: block;
        margin: 0 auto;
        overflow: hidden;
        background: url("../../assets/img/more.png") no-repeat right center;
        background-size: 17px 17px;
        line-height: 20px;
        font-size: 18px;
        color: #999;
        margin: 60px auto;
      }
    }
  }
  .database {
    overflow: hidden;
    background: #f3f3f3;
    height: 500px;
    .database-inner {
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
        margin-bottom: 80px;
        span {
          font-size: 24px;
          color: #ff6600;
        }
      }
      .box {
        height: 220px;
        overflow: hidden;
        width: 100%;
        .box-inner {
          width: 1260px;
          overflow: hidden;
          .video-li {
            width: 33.3%;
            float: left;
            padding-right: 60px;
            overflow: hidden;
            .video-inner {
              height: 220px;
              overflow: hidden;
              background-position: center center;
              background-repeat: no-repeat;
              background-size: cover;
              position: relative;
              cursor: pointer;
              .btn {
                position: absolute;
                left: 50%;
                margin-left: -22px;
                top: 90px;
                display: block;
                width: 44px;
                height: 46px;
              }
            }
          }
        }
      }
    }
    .mask {
      position: fixed;
      z-index: 100;
      left: 0;
      top: 0;
      right: 0;
      bottom: 0;
      background: rgba($color: #000000, $alpha: 0.6);
      .showarea {
        position: absolute;
        width: 800px;
        left: 50%;
        top: 20%;
        margin-left: -400px;
        font-size: 0;
        .close {
          position: absolute;
          z-index: 10;
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
      }
    }
  }
}

@media screen and (max-width: 1200px) and (min-width: 1024px) {
  .news {
    .banner {
      margin-top: 1rem;
      height: 6rem;
    }
    .newlist {
      width: 100%;
      height: 6.8rem;
      .newlist-inner {
        max-width: 12rem;
        padding-top: 0.6rem;
        margin: 0 0.6rem;
        .news-li {
          height: 1.6rem;
          margin-bottom: 0.3rem;
          background-size: 2rem 1.6rem;
          padding-left: 2.85rem;
          .tit {
            line-height: 0.36rem;
            font-size: 0.28rem;
            margin-bottom: 0.11rem;
          }
          .time {
            line-height: 0.2rem;
            font-size: 0.18rem;
            margin-bottom: 0.11rem;
          }
          .info {
            line-height: 0.24rem;
            font-size: 0.18rem;
          }
        }
        .more {
          width: 1.1rem;
          background-size: 0.17rem 0.17rem;
          line-height: 0.2rem;
          font-size: 0.18rem;
          margin: 0 auto;
        }
      }
    }
    .database {
      height: 5rem;
      padding: 0 0.45rem;
      .database-inner {
        padding-top: 0.6rem;
        max-width: 12rem;
        .tit {
          height: 0.4rem;
          line-height: 0.4rem;
          border-left: 0.06rem #0075c2 solid;
          padding-left: 0.22rem;
          font-size: 0.24rem;
          margin-bottom: 0.8rem;
          margin-left: 0.1rem;
          span {
            font-size: 0.24rem;
          }
        }
        .box {
          height: 2.2rem;
          width: 100%;
          .box-inner {
            width: 100%;
            .video-li {
              width: 33.3%;
              padding-right: 0.6rem;
              .video-inner {
                height: 2.2rem;
                .btn {
                  left: 50%;
                  margin-left: -0.22rem;
                  top: 0.9rem;
                  width: 0.44rem;
                  height: 0.46rem;
                }
              }
            }
          }
        }
      }
      .mask {
        z-index: 100;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        background: rgba($color: #000000, $alpha: 0.6);
        .showarea {
          width: 800rem;
          left: 50%;
          top: 20%;
          margin-left: -400rem;
          font-size: 0;
          .close {
            z-index: 10;
            right: 0;
            top: 0;
            height: 40rem;
            width: 40rem;
            font-size: 40rem;
            line-height: 30rem;
          }
        }
      }
    }
  }
}

@media screen and (max-width: 1023.98px) and (min-width: 992px) {
  .news {
    .banner {
      margin-top: 1rem;
      height: 6rem;
    }
    .newlist {
      width: 100%;
      .newlist-inner {
        max-width: 12rem;
        padding-top: 0.6rem;
        .news-li {
          height: 1.4rem;
          margin-bottom: 0.3rem;
          background-size: 2.1rem 1.4rem;
          padding-left: 2.36rem;
          .tit {
            line-height: 0.36rem;
            font-size: 0.28rem;
            margin-bottom: 0.11rem;
          }
          .time {
            line-height: 0.2rem;
            font-size: 0.18rem;
            margin-bottom: 0.11rem;
          }
          .info {
            line-height: 0.24rem;
            font-size: 0.18rem;
          }
        }
        .more {
          width: 1.1rem;
          background-size: 0.17rem 0.17rem;
          line-height: 0.2rem;
          font-size: 0.18rem;
          margin: 0 auto;
        }
      }
    }
    .database {
      height: 5rem;
      .database-inner {
        padding-top: 0.4rem;
        max-width: 12rem;
        .tit {
          height: 0.4rem;
          line-height: 0.4rem;
          border-left: 0.06rem #0075c2 solid;
          padding-left: 0.22rem;
          font-size: 0.24rem;
          margin-bottom: 0.4rem;
          margin-left: 0.1rem;
          span {
            font-size: 0.24rem;
          }
        }
        .box {
          height: 2.2rem;
          width: 100%;
          .box-inner {
            width: 100%;
            .video-li {
              width: 30%;
              padding-right: 0;
              &:nth-child(2) {
                margin: 0 0.1rem;
              }
              .video-inner {
                height: 2.2rem;
                .btn {
                  margin-left: -0.22rem;
                  top: 0.9rem;
                  width: 0.44rem;
                  height: 0.46rem;
                }
              }
            }
          }
        }
      }
      .mask {
        .showarea {
          width: 8rem;
          margin-left: -4rem;
          .close {
            height: 0.4rem;
            width: 0.4rem;
            font-size: 0.4rem;
            line-height: 0.3rem;
          }
        }
      }
    }
  }
}

@media screen and (max-width: 991.98px) and (min-width: 768px) {
  .news {
    .banner {
      margin-top: 1rem;
      height: 4rem;
      width: 7.5rem;
      background-image: url("../../assets/img/newsbgh5.png") !important;
      background-size: 7.5rem 4rem;
    }
    .newlist {
      width: 100%;
      .newlist-inner {
        max-width: 12rem;
        padding: 0.6rem 0.2rem;
        .news-li {
          height: 1.4rem;
          margin-bottom: 0.3rem;
          background-size: 2.1rem 1.4rem;
          padding-left: 2.36rem;
          .tit {
            line-height: 0.36rem;
            font-size: 0.28rem;
            margin-bottom: 0.11rem;
          }
          .time {
            line-height: 0.2rem;
            font-size: 0.18rem;
            margin-bottom: 0.11rem;
          }
          .info {
            line-height: 0.24rem;
            font-size: 0.18rem;
          }
        }
        .more {
          width: 1.1rem;
          background-size: 0.17rem 0.17rem;
          line-height: 0.2rem;
          font-size: 0.18rem;
          margin: 0 auto;
        }
      }
    }
    .database {
      height: 5rem;
      .database-inner {
        padding-top: 0.4rem;
        max-width: 12rem;
        margin: 0 3%;
        .tit {
          height: 0.4rem;
          line-height: 0.4rem;
          border-left: 0.06rem #0075c2 solid;
          padding-left: 0.22rem;
          font-size: 0.24rem;
          margin-bottom: 0.4rem;
          span {
            font-size: 0.24rem;
          }
        }
        .box {
          height: 2.2rem;
          width: 100%;
          .box-inner {
            width: 100%;
            .video-li {
              width: 30%;
              padding-right: 0;
              &:nth-child(2) {
                margin: 0 3%;
              }
              .video-inner {
                height: 2.2rem;
                .btn {
                  margin-left: -0.22rem;
                  top: 0.9rem;
                  width: 0.44rem;
                  height: 0.46rem;
                }
              }
            }
          }
        }
      }
      .mask {
        .showarea {
          width: 8rem;
          margin-left: -4rem;
          .close {
            height: 0.4rem;
            width: 0.4rem;
            font-size: 0.4rem;
            line-height: 0.3rem;
          }
        }
      }
    }
  }
}

@media screen and (max-width: 767.98px) {
  .news {
    .banner {
      margin-top: 1rem;
      height: 4rem;
      width: 7.5rem;
      background-image: url("../../assets/img/newsbgh5.png") !important;
      background-size: 7.5rem 4rem;
    }
    .newlist {
      width: auto;
      margin: 0 0.6rem;
      height: 8.6rem;
      .newlist-inner {
        max-width: 12rem;
        padding-top: 0.6rem;
        .news-li {
          height: 2rem;
          margin-bottom: 0.3rem;
          background-size: 2.1rem 2rem;
          padding-left: 2.36rem;
          position: relative;
          .tit {
            line-height: 0.36rem;
            font-size: 0.26rem;
            margin-bottom: 0.11rem;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
          }
          .time {
            line-height: 0.2rem;
            font-size: 0.18rem;
            margin-bottom: 0.11rem;
            bottom: -5px;
            right: 0;
            position: absolute;
          }
          .info {
            line-height: 0.3rem;
            font-size: 0.24rem;
          }
        }
        .more {
          width: 1.1rem;
          background-size: 0.17rem 0.17rem;
          line-height: 0.2rem;
          font-size: 0.18rem;
          margin: 0.6rem auto;
        }
      }
    }
    .database {
      height: 5rem;
      .database-inner {
        padding-top: 0.6rem;
        max-width: 12rem;
        margin: 0 3%;
        .tit {
          height: 0.4rem;
          line-height: 0.4rem;
          border-left: 0.06rem #0075c2 solid;
          padding-left: 0.22rem;
          font-size: 0.24rem;
          margin-bottom: 0.8rem;
          span {
            font-size: 0.24rem;
          }
        }
        .box {
          height: 2.2rem;
          width: 100%;
          .box-inner {
            width: 100%;
            .video-li {
              width: 30%;
              padding: 0;
              &:nth-child(2) {
                margin: 0 3%;
              }
              .video-inner {
                height: 2.2rem;
                .btn {
                  left: 50%;
                  margin-left: -22rem;
                  top: 90rem;
                  width: 44rem;
                  height: 46rem;
                }
              }
            }
          }
        }
      }
      .mask {
        .showarea {
          width: 7rem;
          left: 57%;
          top: 20%;
          margin-left: -4rem;
          font-size: 0;
          .close {
            height: 0.4rem;
            width: 0.4rem;
            font-size: 0.4rem;
            line-height: 0.3rem;
          }
        }
      }
    }
  }
}
</style>
