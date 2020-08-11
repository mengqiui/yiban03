<template>
  <div class="backtop" @click="back">
    <img src="../../assets/img/back.png" alt class="toppic" />
    <p class="wen">TOP</p>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    back() {
      document.documentElement.scrollTop = document.body.scrollTop = 0;
    }
  }
};
</script>

<style lang="scss" scoped>
@-webkit-keyframes bounce {
  25% {
    -webkit-transform: translateY(-5px);
  }
  50%,
  100% {
    -webkit-transform: translateY(0);
  }
  75% {
    -webkit-transform: translateY(5px);
  }
}

@keyframes bounce {
  25% {
    transform: translateY(-5px);
  }
  50%,
  100% {
    transform: translateY(0);
  }
  75% {
    transform: translateY(5px);
  }
}
.backtop {
  position: fixed;
  z-index: 100;
  bottom: 30px;
  right: 10px;
  width: 90px;
  height: 90px;
  border-radius: 50%;
  background: #0075c1;
  cursor: pointer;
  overflow: hidden;
  padding-top: 20px;
  .toppic {
    display: block;
    width: 40px;
    height: 30px;
    overflow: hidden;
    margin: 0 auto;
    margin-bottom: 14px;
    -webkit-animation: bounce 1.5s linear infinite;
    animation: bounce 1.5s linear infinite;
  }
  .wen {
    line-height: 16px;
    font-size: 14px;
    font-weight: bold;
    text-align: center;
    overflow: hidden;
    color: #fff;
  }
}

@media (max-width: 768px) {
  .backtop {
    position: fixed;
    z-index: 100;
    bottom: 0.3rem;
    right: 0.1rem;
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    background: #0075c1;
    opacity: 0.6;
    cursor: pointer;
    overflow: hidden;
    padding-top: 0.2rem;
    .toppic {
      display: block;
      width: 0.4rem;
      height: 0.3rem;
      overflow: hidden;
      margin: 0 auto;
      margin-bottom: 0.14rem;
      -webkit-animation: bounce 1.5s linear infinite;
      animation: bounce 1.5s linear infinite;
    }
    .wen {
      line-height: 0.2rem;
      font-size: 0.14rem;
      font-weight: bold;
      text-align: center;
      overflow: hidden;
      color: #fff;
    }
  }
}
</style>
