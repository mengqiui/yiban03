<template>
  <div class="culture" style="background:#fff;">
    <div class="culture-inner">
      <div class="title">
        <span class="title-left">{{$t('content.about.culture.titleLeft')}}</span>
        <span class="title-right">{{$t('content.about.culture.titleRight')}}</span>
        <div class="line1"></div>
      </div>
      <div class="culturelist">
        <div
          class="culturelist-li"
          v-lazy:background-image="item.background"
          v-for="(item,ind) in $t('content.about.culture.culturelist')"
          :key="ind"
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
    };
  }
};
</script>

<style lang="scss" scoped>
.culture {
  padding: 0.4rem 0;
  overflow: hidden;
  .title {
    text-align: center;
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
    .line1 {
      background-image: url("/static/img/icon-line.png");
      background-size: 100% 100%;
      width: 0.62rem;
      height: 2px;
      margin: 0.12rem auto;
    }
  }
  .culture-inner {
    margin: 0 0.45rem;
    overflow: hidden;
    .culturelist {
      margin-top: 0.3rem;
      overflow: hidden;
      font-size: 0;
      .culturelist-li {
        float: left;
        width: 50%;
        overflow: hidden;
        height: 3.24rem;
        transition: 0.1s all;
        background-position: center center;
        background-size: cover !important;
        position: relative;
        .mask {
          position: absolute;
          z-index: 1;
          left: 0;
          right: 0;
          top: 0;
          bottom: 0;
          background: rgba($color: #000000, $alpha: 0.5);
        }
        .logo {
          display: block;
          height: 0.5rem;
          margin: 0 auto;
          margin-top: 1.2rem;
          margin-bottom: 0.08rem;
          position: relative;
          z-index: 2;
        }
        .line {
          width: 0.52rem;
          height: 0.03rem;
          margin: 0 auto;
          background: #ff6600;
          overflow: hidden;
          position: relative;
          z-index: 2;
        }
        .wen {
          line-height: 0.4rem;
          font-size: 0.24rem;
          color: #fff;
          overflow: hidden;
          text-align: center;
          font-style: oblique;
          position: relative;
          z-index: 2;
        }
      }
    }
  }
}
</style>
