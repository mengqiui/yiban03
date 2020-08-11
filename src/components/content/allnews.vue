<template>
  <div class="allnews">
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
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newslist: {},
      language:''
    };
  },
  watch: {
    languageType: {
      handler: function(val, oldval) {
        if (val == "zh") {
          this.language = "cn";
        } else {
          this.language = "en";
        }
        this.$nextTick(function() {
          this.getnews();
        });
      },
      deep: true
    }
  },
  computed: {
    languageType() {
      return this.$i18n.locale;
    }
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
    const height =
      document.documentElement.scrollTop || document.body.scrollTop;
    if (height != 0) {
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    }
  },
  methods: {
    getnews() {
      let that = this;
      that.$axios
        .get("/ebang/news/listNews/" + that.language + "?curPage=1&pageSize=10")
        .then(function(response) {
          if (response.status === 200) {
            const data = response.data.content;
            that.newslist = data;
            that.changepic();
          }
        })
        .catch(function(error) {});
    },
    goNew(index) {
      let routerJump = this.$router.resolve({
        path: "/newDetail",
        query: { id: index , lan: this.language}
      });
      window.open(routerJump.href, "_blank");
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
    }
  }
};
</script>

<style lang="scss" scoped>
.allnews {
  padding-top: 80px;
  padding-bottom: 60px;
  .newlist {
    width: 100%;
    overflow: hidden;
    border-top: 1px #bbb solid;
    .newlist-inner {
      max-width: 1200px;
      margin: 0 auto;
      padding-top: 60px;
      overflow: hidden;
      .news-li {
        height: 140px;
        background-repeat: no-repeat;
        cursor: pointer;
        background-position: top left;
        margin-bottom: 30px;
        transition: all 0.5s;
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
        margin-top: 100px;
      }
    }
  }
}
@media screen and (max-width: 1200px) {
  .allnews {
    padding-top: 1rem;
    padding-bottom: 0.6rem;
    .newlist {
      border-top: 0.01rem #bbb solid;
      .newlist-inner {
        max-width: 12rem;
        padding-top: 0.6rem;
        .news-li {
          height: 1.8rem;
          margin: 0.3rem 0.4rem;
          background-size: 2.4rem 1.8rem;
          padding-left: 2.6rem;
          .tit {
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
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
            line-height: 0.3rem;
            font-size: 0.2rem;
          }
        }
        .more {
          width: 1.1rem;
          background-size: 0.17rem 0.17rem;
          line-height: 0.2rem;
          font-size: 0.18rem;
          margin-top: 1rem;
        }
      }
    }
  }
}
</style>
