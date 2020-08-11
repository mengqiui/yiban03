<template>
  <div class="navbar">
    <div class="nav-inner">
      <div class="toparea">
        <img @click="openlist" src="../../assets/img/openh5.png" alt class="open" />
        <img src="../../assets/img/logoh5.png" alt class="logo" />
      </div>
      <div class="leftarea" :class="{'openlist': close == false}">
        <img src="../../assets/img/closeicon.jpg" @click="closelist" alt class="closeicon" />
        <div class="list">
          <div class="navlist" v-for="(item, ind) in $t('navbar.navname')" :key="ind">
            <a
              class="show"
              :class="{'hoveron': shownum === ind}"
              v-if="item.path && item.path[0] !== '/'"
              :href="item.path"
              target="_blank"
            >{{item.text}}</a>
            <router-link
              v-else
              class="show"
              :class="{'hoveron': shownum === ind}"
              :to="item.path"
              @click.native="closelist"
            >{{item.text}}</router-link>
          </div>
          <div class="lan-choose">
            <div class="lan" :class="lan == 'zh' ? 'on' : ''" @click="lanchange('zh')">中文</div>
            <div class="fen">/</div>
            <div class="lan" :class="lan == 'en' ? 'on' : ''" @click="lanchange('en')">English</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getPageTitle } from '../../assets/js/title';
export default {
  props: {
    clickwhere: {}
  },
  data() {
    return {
      shownum: "",
      close: true,
      lan: 'en'
    };
  },
  watch: {
    clickwhere: {
      handler: function(val, oldval) {
        if (val == "nav") {
          this.close = false;
        } else {
          this.close = true;
        }
      },
      deep: true
    }
  },
  mounted(){
    this.lan = this.$i18n.locale;
  },
  methods: {
    openlist() {
      this.close = false;
    },
    closelist() {
      this.close = true;
    },
    lanchange(type){
      this.lan = type;
      this.$i18n.locale = type;
      document.title = getPageTitle(this.$i18n,this.$route.meta.title)
      if (type == "zh") {
        window.localStorage.setItem("languagechoose", JSON.stringify("zh-CN"));
      }else{
        window.localStorage.setItem("languagechoose", JSON.stringify("en"));
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.navbar {
  position: absolute;
  z-index: 100;
  top: 0;
  width: 100%;
  height: 1rem;
  background: #fff;
  .nav-inner {
    width: 100%;
    height: 1rem;
    .toparea {
      width: 100%;
      height: 1rem;
      overflow: hidden;
      position: relative;
      padding-top: 0.325rem;
      .logo {
        display: block;
        height: 0.35rem;
        margin: 0 auto;
        overflow: hidden;
      }
      .open {
        position: absolute;
        display: block;
        width: 0.4rem;
        height: 0.3rem;
        left: 0.42rem;
        height: 0.34rem;
        overflow: hidden;
      }
    }
    .leftarea {
      background: #fff;
      position: fixed;
      transition: 0.3s all;
      overflow: hidden;
      width: 0;
      left: 0;
      top: 0;
      bottom: 0;
      font-size: 0;
      .closeicon {
        position: absolute;
        z-index: 10;
        left: 0.4rem;
        top: 0.4rem;
        width: 0.4rem;
        height: 0.4rem;
        overflow: hidden;
      }
      .list {
        width: 4.6rem;
        padding: 2rem 0.7rem 0 0.7rem;
        position: relative;
        height: 100%;
        .navlist {
          display: block;
          .show {
            display: block;
            height: 0.4rem;
            line-height: 0.4rem;
            cursor: pointer;
            color: #333;
            font-size: 0.4rem;
            text-decoration: none;
            margin-bottom: 0.9rem;
          }
          .hoveron {
            color: #0075c1;
          }
          .router-link-active {
            color: #0075c1;
          }
        }
        .lan-choose {
          position: absolute;
          right: 0.7rem;
          top: unset;
          bottom: 0.7rem;
          width: 100%;
          height: 0.4rem;
          text-align: right;
          .lan {
            display: inline-block;
            height: 0.4rem;
            line-height: 0.4rem;
            color: #999;
            font-size: 0.4rem;
            cursor: pointer;
            text-decoration: none;
          }
          .on {
            color: #ff6600;
          }
          .fen {
            display: inline-block;
            height: 0.4rem;
            line-height: 0.4rem;
            color: #333;
            font-size: 0.4rem;
          }
        }
      }
    }
    .openlist {
      width: 4.6rem;
    }
  }
}
</style>
