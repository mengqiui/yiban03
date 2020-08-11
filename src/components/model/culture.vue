<template>
  <div class="culture" v-lazy:background-image="require('../../assets/img/bgpic.png')">
    <div class="culture-inner">
      <div class="title">
        <span class="title-left">{{$t('content.about.culture.titleLeft')}}</span>
        <span class="title-right">{{$t('content.about.culture.titleRight')}}</span>
        <div class="line"></div>
      </div>
      <div class="culturelist">
        <div
          class="culturelist-li"
          :class="{showbig:defalutshow == ind}"
          v-lazy:background-image="item.background"
          v-for="(item,ind) in $t('content.about.culture.culturelist')"
          :key="ind"
          @mouseenter="getact(ind)"
        >
          <div class="mask"></div>
          <img v-lazy="item.img" alt class="logo" />
          <p class="line"></p>
          <p class="wen">{{item.text}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      defalutshow: 0
    };
  },
  methods: {
    getact(ind) {
      this.defalutshow = ind;
    }
  }
};
</script>

<style lang="scss" scoped>
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
.culture {
  background-color: #151515;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 1920px 700px;
  height: 700px;
  overflow: hidden;
  .culture-inner {
    max-width: 1200px;
    margin: 0 auto;
    overflow: hidden;
    padding-top: 70px;
    .culturelist {
      margin-top: 60px;
      overflow: hidden;
      height: 450px;
      font-size: 0;
      .culturelist-li {
        float: left;
        width: 20%;
        overflow: hidden;
        height: 450px;
        transition: 0.1s all;
        background-position: center center;
        background-size: cover !important;
        position: relative;
        .mask {
          position: absolute;
          z-index: 1;
          left: 0;
          right: 0;
          top: 165px;
          bottom: 165px;
          background: rgba($color: #000000, $alpha: 0.5);
        }
        .logo {
          display: block;
          height: 50px;
          margin: 0 auto;
          margin-top: 180px;
          margin-bottom: 8px;
          position: relative;
          z-index: 2;
        }
        .line {
          width: 52px;
          height: 3px;
          margin: 0 auto;
          background: #ff6600;
          overflow: hidden;
          position: relative;
          z-index: 2;
        }
        .wen {
          line-height: 40px;
          font-size: 24px;
          color: #fff;
          overflow: hidden;
          text-align: center;
          font-style: oblique;
          position: relative;
          z-index: 2;
        }
      }
      .showbig {
        width: 40%;
        .mask {
          left: 0;
          right: 0;
          top: 0;
          bottom: 0;
        }
      }
    }
  }
}
</style>
