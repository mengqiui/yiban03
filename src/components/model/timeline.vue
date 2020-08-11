<template>
  <div class="timelinearea">
    <img v-lazy="require('../../assets/img/titlogo.png')" alt class="tit" />
    <div class="timeline">
      <div class="line"></div>
      <div
        class="timelineli"
        :class="[{sp:index%2 != 0},{showactive:value == index}]"
        v-for="(list,index) in $t('content.about.timeline.timelist')"
        @mouseenter="enter(index)"
        @mouseleave="leave()"
        :key="index"
      >
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
    },
    enter(index) {
      clearInterval(this.timer);
      this.value = index;
    },
    leave() {
      this.timer = setInterval(this.isshowactive, 3000);
    }
  }
};
</script>

<style lang="scss" scoped>
.timelinearea {
  height: 994px;
  max-width: 1200px;
  margin: 0 auto;
  overflow: hidden;
  padding-top: 60px;
  .tit {
    display: block;
    margin: 0 auto;
    height: 24px;
    margin-bottom: 20px;
  }
  .timeline {
    overflow: hidden;
    position: relative;
    margin-bottom: 60px;
    .line {
      position: absolute;
      width: 1px;
      background: #bbb;
      height: 100%;
      left: 50%;
      top: 0;
      bottom: 0;
    }
    .timelineli {
      overflow: hidden;
      align-items: center;
      margin: 10px 0;
      position: relative;
      font-size: 0;
      .point {
        position: absolute;
        z-index: 2;
        width: 14px;
        height: 14px;
        top: 50%;
        margin-top: -7px;
        left: 50%;
        margin-left: -7px;
        border-radius: 50%;
        background: #0075c1;
        padding: 2px 2px;
        .point-inner {
          border-radius: 50%;
          border: 2px #fff solid;
          height: 10px;
        }
      }
      .blueline {
        position: absolute;
        width: 76px;
        height: 1px;
        left: 50%;
        top: 50%;
        margin-left: -38px;
        background: #0075c1;
        display: none;
      }
      .time {
        position: absolute;
        display: block;
        width: 50%;
        left: 0;
        right: auto;
        top: 50%;
        margin-top: -9px;
        padding: 0 50px;
        text-align: right;
        font-size: 0;
        .timepic {
          display: inline-block;
          height: 18px;
        }
      }
      .info {
        width: 50%;
        float: right;
        padding: 0 40px;
        margin: 10px 0;
        .infoinner {
          text-align: left;
          background: #eee;
          padding: 10px 10px;
          line-height: 30px;
          font-size: 16px;
          color: #777;
          word-wrap: break-word;
          border-left: 4px transparent solid;
          border-right: 0;
          /deep/ span {
            color: #0075c1;
          }
        }
      }
    }
    .sp {
      .time {
        right: 0;
        left: auto;
        text-align: left;
      }
      .info {
        float: left;
        .infoinner {
          border-right: 4px transparent solid;
          border-left: 0;
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
