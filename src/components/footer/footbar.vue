<template>
  <div class="footbar">
    <div class="footbar-inner">
      <div class="box">
        <div class="left">
          <img v-lazy="require('../../assets/img/er.jpg')" alt class="er" />
          <p class="wen">{{$t('footbar.wen')}}</p>
        </div>
        <div class="right">
          <p class="text">{{$t('footbar.company')}}</p>
          <p class="text">{{$t('footbar.address')}}</p>
          <p class="text">{{$t('footbar.copyright')}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
</script>

<style lang="scss" scoped>
.footbar {
  width: 100%;
  height: 338px;
  overflow: hidden;
  background: #151515;
  .footbar-inner {
    max-width: 1200px;
    margin: 0 auto;
    overflow: hidden;
    padding-top: 57px;
    .box {
      overflow: hidden;
      position: relative;
      padding-left: 280px;
      .left {
        position: absolute;
        left: 0;
        top: 0;
        width: 200px;
        overflow: hidden;
        .er {
          display: block;
          width: 200px;
          height: 200px;
          overflow: hidden;
          margin-bottom: 10px;
        }
        .wen {
          height: 24px;
          text-align: center;
          font-size: 16px;
          color: #fff;
          line-height: 24px;
        }
      }
      .right {
        overflow: hidden;
        padding-top: 31px;
        .text {
          font-size: 16px;
          color: #fff;
          line-height: 24px;
          margin-bottom: 35px;
          overflow: hidden;
        }
      }
    }
  }
}
@media screen and (max-width: 1200px) {
  .footbar {height: 3.38rem;
    .footbar-inner {padding-top: .57rem;
      .box {padding-left: 2.8rem;margin: 0 .3rem;
        .left {width: 1.5rem;
          .er {width: 1.5rem;height: 1.5rem;margin-bottom: .1rem;}
          .wen {height: .5rem;font-size: .16rem;line-height: .24rem;}
        }
        .right {padding-top: 0;
          .text {font-size: .16rem;line-height: .3rem;margin-bottom: .2rem;}
        }
      }
    }
  }
}
@media screen and (max-width: 1023.98px) and (min-width: 992px) {
  .footbar {
    .footbar-inner {
      .box {margin: 0 .3rem;
        .left {width: 1.4rem;
          .er {width: 1.4rem;height: 1.4rem;}
        }
      }
    }
  }
}
@media screen and (max-width: 991.98px) and (min-width: 768px) { 
  .footbar {
    .footbar-inner {
      .box {margin: 0 .3rem;
        .left {width: 1.6rem;
          .er {width: 1.6rem;height: 1.4rem;}
        }
      }
    }
  }
}
@media screen and (max-width: 767.98px) { 
  .footbar {
    .footbar-inner {
      .box { margin: 0 .3rem;
        .left {width: 1.4rem;
          .er {width: 1.4rem;height: 1.4rem;}
        }
      }
    }
  }
}
</style>
