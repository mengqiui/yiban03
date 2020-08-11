<template>
  <div class="leaderbar" ref="leader">
    <div class="leaderbar-inner" :class="fixed">
      <div class="text-inner" v-if="isPC == true">
        <div
          class="leaderli"
          :class="{active: active===index}"
          @click="scrollTo(index)"
          v-for="(list,index) in leadertext"
          :key="index"
        >{{list.text}}</div>
      </div>
      <div class="text-inner" v-else>
        <div class="defalutshow" @click="showbox">{{leadertext[active].text}}</div>
        <div class="showbox" ref="boxheight" :style="{height: boxheight + 'px'}">
          <div
            class="leaderli"
            :class="{active: active===index}"
            @click="scrollTo(index)"
            v-for="(list,index) in leadertext"
            :key="index"
          >{{list.text}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    leadertext: {},
    clickwhere: {}
  },
  data() {
    return {
      active: 0,
      fixed: "",
      navbartop: "",
      isPC: true,
      boxheight: 0,
      open: false,
      navheight: 0
    };
  },
  mounted() {
    this.navheight = this.$refs.leader.offsetHeight;
    this.navbartop = this.$refs.leader.offsetTop;
    const scrollTop =
      document.documentElement.scrollTop || document.body.scrollTop;
    if (scrollTop > this.navbartop) {
      this.fixed = "fixed";
    }
    window.addEventListener("scroll", this.onScroll, true);
    window.addEventListener("resize", this.ispc, true);
    this.ispc();

    this.$emit('barheight', this.$refs.leader.offsetHeight);
  },
  destroy() {
    window.removeEventListener("scroll", this.onScroll);
    window.removeEventListener("resize", this.ispc);
  },
  watch: {
    clickwhere: {
      handler: function(val, oldval) {
        if (val == "blank") {
          this.boxheight = 0;
          this.open = ! this.open;
        }
      },
      deep: true
    }
  },
  methods: {
    onScroll() {
      const top = this.navbartop;
      const scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop;
      if (scrollTop <= top) {
        this.fixed = "";
      } else {
        this.fixed = "fixed";
      }
      const navContents = document.querySelectorAll(".floor");
      const offsetTopArr = [];
      for (let i = 0; i < navContents.length; i++) {
        offsetTopArr.push(navContents[i].offsetTop);
      }
      let navIndex = 0;
      for (let n = 0; n < offsetTopArr.length; n++) {
        if (scrollTop + this.navheight >= offsetTopArr[n]) {
          navIndex = n;
        }
      }
      let num = $(".floor").length;
      let clientHeight =
        document.documentElement.clientHeight || document.body.clientHeight;
      let scrollHeight =
        document.documentElement.scrollHeight || document.body.scrollHeight;
      if (
        scrollHeight > clientHeight &&
        scrollTop + clientHeight === scrollHeight
      ) {
        if (navIndex != num) {
          this.active = num - 1;
        }
      } else {
        this.active = navIndex;
      }

      this.$emit('scrollnum', this.active);  //滚动位置
    },
    scrollTo(index) {
      this.$router.push({
        query: { guid: index }
      });
      const targetOffsetTop =
        document.querySelector(`.allfloor .floor:nth-child(${index + 1})`)
          .offsetTop - this.$refs.leader.offsetHeight;
      this.$gomove.move(targetOffsetTop);
      this.boxheight = 0;
      this.open = ! this.open;
    },
    ispc() {
      const clientwidth =
        document.documentElement.offsetWidth || document.body.offsetWidth;
      if (clientwidth < 1200) {
        this.isPC = false;
      } else {
        this.isPC = true;
      }
    },
    showbox() {
      let num = this.leadertext.length;
      this.boxheight = num * 40;
      this.open = ! this.open;
      if(this.open == true){
        this.boxheight = num * 40;
      }else{
        this.boxheight = 0;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.leaderbar {
  width: 100%;
  height: 44px;
  background: #f3f3f3;
  .leaderbar-inner {
    width: 100%;
    height: 44px;
    font-size: 0;
    background: #f3f3f3;
    box-shadow: 0px 15px 10px -15px #999;
    .text-inner {
      max-width: 1200px;
      margin: 0 auto;
      overflow: hidden;
      position: relative;
      .leaderli {
        display: inline-block;
        height: 44px;
        line-height: 44px;
        margin-right: 30px;
        overflow: hidden;
        font-size: 16px;
        color: #333;
        cursor: pointer;
      }
      .active {
        color: #0075c1;
      }
    }
  }
  .fixed {
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 90;
    overflow: hidden;
  }
}

@media (max-width: 1200px) {
  .leaderbar {
    height: 0.6rem;
    overflow: unset;
    .leaderbar-inner {
      height: 0.6rem;
      .text-inner {
        max-width: unset;
        width: 100%;
        margin: 0 auto;
        overflow: unset;
        position: relative;
        .defalutshow {
          height: 0.6rem;
          line-height: 0.6rem;
          text-align: center;
          font-size: 0.24rem;
          color: #0075c1;
          overflow: hidden;
          background: url("../../assets/img/jiantou.png") no-repeat right 20px
            center;
          background-size: auto 10px;
        }
        .showbox {
          position: absolute;
          top: 0.6rem;
          left: 0;
          width: 100%;
          height: 0;
          overflow: hidden;
          transition: 0.3s all;
          background: #efefef;
          font-size: 0;
          z-index: 10;
          .leaderli {
            width: 100%;
            height: 20px;
            line-height: 20px;
            margin: 10px 0;
            text-align: center;
            overflow: hidden;
            font-size: 0.22rem;
            color: #333;
          }
          .active {
            color: #0075c1;
          }
        }
      }
    }
    .fixed {
      position: fixed;
      top: 0;
      width: 100%;
      z-index: 90;
      overflow: unset;
    }
  }
}
</style>
