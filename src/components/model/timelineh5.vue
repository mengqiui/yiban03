<template>
  <div class="timelinearea">
    <div class="picbox">
      <img v-lazy="require('../../assets/img/titlogo.png')" alt class="tit" />
    </div>
    <div class="timeline">
      <div
        class="timelineli"
        :class="[{showactive:value == index}]"
        v-for="(list,index) in $t('content.about.timeline.timelist')"
        :key="index"
      >
        <div class="line"></div>
        <div class="point">
          <div class="point-inner"></div>
        </div>
        <div class="blueline"></div>
        <div class="time">
          <img v-lazy="list.time" alt class="timepic" />
        </div>
        <div class="info">
          <div class="infoinner" v-html="list.info"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      timer: "",
      value: 0,
      listNum: 8
    };
  },
  mounted() {
    this.timer = setInterval(this.isshowactive, 3000);
  },
  beforeDestroy() {
    clearInterval(this.timer);
  },
  methods: {
    isshowactive() {
      if (this.value < this.listNum - 1) {
        this.value++;
      } else {
        this.value = 0;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.timelinearea {
  width: 100%;
  overflow: hidden;
  padding: 0.4rem 0;
  .picbox {
    height: 0.24rem;
    overflow: hidden;
    margin-bottom: 0.3rem;
    .tit {
      display: block;
      margin: 0 auto;
      height: 0.24rem;
    }
  }
  .timeline {
    overflow: hidden;
    position: relative;
    padding: 0 0.45rem;
    .timelineli {
      overflow: hidden;
      align-items: center;
      position: relative;
      font-size: 0;
      .line {
        position: absolute;
        width: 1px;
        background: #bbb;
        height: 100%;
        left: 0.9rem;
        top: 0;
        bottom: 0;
      }
      .point {
        position: absolute;
        z-index: 2;
        width: 0.2rem;
        height: 0.2rem;
        top: 50%;
        margin-top: -0.1rem;
        left: 0.8rem;
        border-radius: 50%;
        background: #0075c1;
        padding: 0.04rem 0.04rem;
        .point-inner {
          border-radius: 50%;
          border: 0.01rem #fff solid;
          height: 0.12rem;
        }
      }
      .blueline {
        position: absolute;
        width: 0.6rem;
        height: 1px;
        left: 0.6rem;
        top: 50%;
        background: #0075c1;
        display: none;
      }
      .time {
        position: absolute;
        display: block;
        width: 0.67rem;
        height: 0.18rem;
        left: 0;
        top: 50%;
        margin-top: -0.09rem;
        font-size: 0;
        overflow: hidden;
        .timepic {
          display: block;
          height: 0.18rem;
        }
      }
      .info {
        margin: 0.1rem 0;
        margin-left: 1.2rem;
        .infoinner {
          text-align: left;
          background: #eee;
          padding: 0.2rem 0.2rem;
          line-height: 0.3rem;
          font-size: 0.16rem;
          color: #777;
          word-wrap: break-word;
          border-left: 2px transparent solid;
          /deep/ span {
            color: #0075c1;
            font-size: 0.16rem;
          }
        }
      }
    }
    .showactive {
      .info {
        .infoinner {
          border-color: #0075c1;
        }
      }
      .point {
        background: #0075c1;
      }
      .blueline {
        display: block;
      }
    }
  }
}
</style>
