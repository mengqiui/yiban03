<template>
  <div class="navbar">
    <div class="nav-inner">
      <div class="leftarea">
        <img src="../../assets/img/logo.png" alt class="logo" />
      </div>
      <div class="rightarea">
        <div
          class="navlist"
          ref="dropwidth"
          v-for="(item, ind) in $t('navbar.navname')"
          :key="ind"
          @mouseenter="showlist(ind)"
          @mouseleave="closelist"
        >
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
          >{{item.text}}</router-link>
          <div
            class="droplist"
            :style="{height: (shownum === ind ? hei + 'px' : '0'), minWidth: (wid[ind] +'px')}"
          >
            <div class="droplist-inner" ref="dropheight">
              <div
                class="droplist-li"
                @click="golink(item.path, a)"
                v-for="(list, a) in item.maolink"
                :key="a"
              >{{list.text}}</div>
            </div>
          </div>
        </div>
        <div class="lan-choose">
          <div class="lan" :class="lan == 'zh' ? 'on' : ''" @click="lanchange('zh')">中文</div>
          <div class="fen">/</div>
          <div class="lan" :class="lan == 'en' ? 'on' : ''" @click="lanchange('en')">English</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getPageTitle } from '../../assets/js/title';
export default {
  data() {
    return {
      shownum: "",
      hei: 0,
      wid: [],
      scrollTop: 0,
      lan: "en"
    };
  },
  mounted() {
    this.lan = this.$i18n.locale;
    this.getWidth();
    window.addEventListener("scroll", this.onscroll, true);
  },
  destroy() {
    window.removeEventListener("scroll", this.onscroll);
  },
  methods: {
    onscroll() {
      const scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop;
      this.scrollTop = scrollTop;
    },
    showlist(num) {
      this.shownum = num;
      this.hei = this.$refs.dropheight[num].offsetHeight;
    },
    closelist() {
      this.shownum = "";
    },
    getWidth() {
      const widthArray = [];
      let len = this.$refs.dropwidth.length;
      for (let i = 0; i < len; i++) {
        let wid = this.$refs.dropwidth[i].offsetWidth;
        widthArray.push(wid);
      }
      this.wid = widthArray;
    },
    golink(link, index) {
      if (this.$route.path == link) {
        this.$router.push({
          query: { guid: index }
        });
        const targetOffsetTop =
          document.querySelector(`.allfloor .floor:nth-child(${index + 1})`)
            .offsetTop - 44;
        this.$gomove.move(targetOffsetTop);
      } else {
        this.$router.push({
          path: link,
          query: { guid: index }
        });
      }
    },
    ifotherlink(path) {
      if (path[0] != "/") {
        window.location.href = path;
      }
    },
    lanchange(type) {
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
  height: 80px;
  background: #fff;
  .nav-inner {
    max-width: 1200px;
    margin: 0 auto;
    height: 80px;
    .leftarea {
      float: left;
      width: 24%;
      height: 80px;
      overflow: hidden;
      .logo {
        display: block;
        height: 80px;
      }
    }
    .rightarea {
      float: left;
      width: 76%;
      height: 80px;
      font-size: 0;
      position: relative;
      .navlist {
        display: inline-block;
        height: 80px;
        margin-right: 40px;
        position: relative;
        .show {
          display: block;
          height: 80px;
          line-height: 80px;
          cursor: pointer;
          color: #333;
          font-size: 16px;
          text-decoration: none;
          border-bottom: 4px transparent solid;
        }
        .hoveron {
          color: #0075c1;
          border-bottom: 4px #0075c1 solid;
        }
        .droplist {
          position: absolute;
          left: 0;
          font-size: 0;
          height: 0;
          transition: 0.3s all;
          background: #fff;
          overflow: hidden;
          .droplist-li {
            padding: 10px 10px;
            white-space: nowrap;
            line-height: 16px;
            overflow: hidden;
            font-size: 14px;
            color: #333;
            cursor: pointer;
          }
          .droplist-li:hover {
            background: #eee;
            color: $color-005;
          }
        }
        .on {
          height: auto;
        }
        .router-link-active {
          color: #0075c1;
          border-bottom: 4px #0075c1 solid;
        }
      }
      .lan-choose {
        position: absolute;
        right: 0;
        top: 0;
        height: 80px;
        .lan {
          display: inline-block;
          height: 80px;
          line-height: 80px;
          color: #999;
          font-size: 16px;
          cursor: pointer;
          text-decoration: none;
        }
        .on {
          color: #ff6600;
        }
        .fen {
          display: inline-block;
          height: 80px;
          line-height: 80px;
          color: #333;
          font-size: 16px;
        }
      }
    }
  }
}
</style>
