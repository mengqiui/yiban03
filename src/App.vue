<template>
  <div id="app" @click="clickblank($event)">
    <navbar v-if="isPC == true" v-show="detail == false"></navbar>
    <navbarh5 v-else :clickwhere="blank" v-show="detail == false"></navbarh5>
    <div class="inner">
      <transition name="fade" mode="out-in">
        <router-view />
      </transition>
    </div>
    <gotop></gotop>
    <footbar></footbar>
  </div>
</template>

<script>
import navbar from "@/components/header/navbar";
import footbar from "@/components/footer/footbar";
import gotop from "@/components/header/gotop";
import navbarh5 from "@/components/header/navbarh5";

export default {
  name: "App",
  components: {
    navbar,
    footbar,
    gotop,
    navbarh5
  },
  data() {
    return {
      isPC: true,
      blank: "",
      detail: false
    };
  },
  watch: {
    isdetail: {
      handler: function(val, oldval) {
        if (val == "/newDetail") {
          this.detail = true;
        }
      },
      deep: true
    }
  },
  computed: {
    isdetail() {
      return this.$route.path;
    }
  },
  mounted() {
    window.addEventListener("resize", this.ispc, true);
    this.ispc();
  },
  destroy() {
    window.removeEventListener("resize", this.ispc);
  },
  methods: {
    clickblank(e) {
      const arr = [];
      for (let i = 0; i < e.path.length; i++) {
        if (e.path[i].className == "navbar") {
          arr.push(e.path[i].className);
        }
      }
      if (arr.length > 0) {
        this.blank = "nav";
      } else {
        this.blank = "blank";
      }
    },
    ispc() {
      const clientwidth =
        document.documentElement.offsetWidth || document.body.offsetWidth;
      if (clientwidth < 1200) {
        this.isPC = false;
      } else {
        this.isPC = true;
      }
    }
  }
};
</script>

<style lang="scss">
#app {
  position: relative;
  .inner {
    min-height: calc(100vh);
  }
}
</style>
