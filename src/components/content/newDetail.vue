<template>
  <div class="newsDetail">
    <div class="bar">
      <div class="bar-inner">
        <div class="left">
          <img src="../../assets/img/logo.png" alt class="logo" />
        </div>
        <div class="right">{{$t('detail.text')}}</div>
      </div>
    </div>
    <div class="newinner">
      <div class="newcontent">
        <p class="title">{{newcontent.newsTitle}}</p>
        <p class="time">Release time:{{newcontent.newsTime}}</p>
        <div class="allwen">
          <div class="text" v-for="(list,ind) in newtext" :key="ind" v-html="list"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      idnum: 0,
      newcontent: {},
      newtext: {}
    };
  },
  created() {
    var that = this;
    if (that.$router.currentRoute.query.lan == "cn") {
      that.$i18n.locale = "zh";document.title = this.$t('meta.base')
      document.title = '亿邦国际';
    } else {
      that.$i18n.locale = "en";document.title = this.$t('meta.base')
      document.title = 'EBON INTERNATIONAL';
    }
    that.idnum = that.$router.currentRoute.query.id;
    that.$axios
      .get(
        "/ebang/news/listNews/" +
          that.$router.currentRoute.query.lan +
          "?curPage=1&pageSize=10"
      )
      .then(function(response) {
        if (response.status === 200) {
          const data = response.data.content;
          that.showtext(data);
        }
      })
      .catch(function(error) {});
  },
  mounted() {},
  methods: {
    showtext(data) {
      for (let i = 0; i < data.length; i++) {
        if (this.idnum == data[i].id) {
          this.newcontent = data[i];
          this.newtext = JSON.parse(this.newcontent.newsContent);
          let newtpic = JSON.parse(this.newcontent.newsImage);
          let num = 0;
          for (let a = 0; a < this.newtext.length; a++) {
            if (this.newtext[a] == "<p>PIC</p>") {
              this.newtext[a] = '<img src="' + newtpic[num].url + '" alt />';
              num++;
            }
          }
        }
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.newsDetail {
  overflow: hidden;
  .bar {
    width: 100%;
    height: 80px;
    background: #fff;
    overflow: hidden;
    border-bottom: 1px #ccc solid;
    .bar-inner {
      max-width: 1200px;
      margin: 0 auto;
      height: 80px;
      .left {
        float: left;
        width: 24%;
        height: 80px;
        overflow: hidden;
        .logo {
          display: block;
          height: 80px;
        }
      }
      .right {
        float: left;
        width: 76%;
        height: 80px;
        text-align: center;
        line-height: 80px;
        font-size: 24px;
        color: #000;
        overflow: hidden;
      }
    }
  }
  .newinner {
    max-width: 1200px;
    margin: 0 auto;
    overflow: hidden;
    padding: 20px 0 40px 0;
    .newcontent {
      font-size: 0;
      text-align: left;
      color: #000;
      overflow: hidden;
      .title {
        line-height: 30px;
        font-size: 20px;
        font-weight: bold;
        text-align: center;
        margin-bottom: 30px;
      }
      .time {
        line-height: 20px;
        font-size: 14px;
        color: #777;
        font-weight: bold;
        text-align: center;
        padding-bottom: 20px;
        border-bottom: 1px #333 solid;
        margin-bottom: 30px;
      }
      .text {
        padding: 0 10%;
        line-height: 20px;
        overflow: hidden;
        text-align: center;
        /deep/ p {
          margin-bottom: 20px;
          overflow: hidden;
          text-align: left;
        }
        /deep/ img {
          display: inline-block;
          overflow: hidden;
          width: 100%;
          margin-bottom: 20px;
        }
      }
    }
  }
}

@media screen and (max-width: 767.98px) {
  .newsDetail {
    padding-top: 0rem;
    .bar {
      width: 100%;
      height: 1rem;
      background: #fff;
      overflow: hidden;
      border-bottom: 1px #ccc solid;
      .bar-inner {
        max-width: unset;
        margin: 0 auto;
        height: 1rem;
        .left {
          float: left;
          width: 40%;
          height: 1rem;
          padding-left: 5%;
          overflow: hidden;
          .logo {
            display: block;
            margin-top: 0.2rem;
            height: 0.6rem;
          }
        }
        .right {
          float: left;
          width: 60%;
          height: 1rem;
          text-align: center;
          line-height: 1rem;
          font-size: 0.24rem;
          color: #000;
          overflow: hidden;
        }
      }
    }
    .newinner {
      max-width: 12rem;
      padding: 0.2rem 0 0.4rem 0;
      .newcontent {
        .title {
          line-height: 0.3rem;
          font-size: 0.2rem;
          margin-bottom: 0.3rem;
        }
        .time {
          line-height: 0.2rem;
          font-size: 0.14rem;
          padding-bottom: 0.2rem;
          border-bottom: 0.01rem #333 solid;
          margin-bottom: 0.3rem;
        }
        .text {
          line-height: 0.3rem;
          font-size: 0.16rem;
          padding: 0 5%;
          /deep/ p {
            margin-bottom: 0.2rem;
            overflow: hidden;
            text-align: left;
            span{
              font-size: 0.16rem !important;
            }
          }
          /deep/ img {
            display: inline-block;
            overflow: hidden;
            width: 100%;
            margin-bottom: 0.2rem;
          }
        }
      }
    }
  }
}
</style>
