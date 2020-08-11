<template>
  <div class="dot">
    <div id="box"></div>
    <div class="small"></div>
    <div class="mask" @mouseenter="showInfo()" @mouseleave="hideInfo()"></div>
  </div>
</template>

<script>
export default {
 props:["isShow"],
 data(){
   return {
     index:3,move:''
   }
 },
 mounted(){
   this.move = setInterval(this.moveDot,200)
 },
  beforeDestroy() {
    clearInterval(this.move);
  },
 methods:{
    showInfo(){clearInterval(this.move);this.$emit("isShow",true)},
    hideInfo(){this.move = setInterval(this.moveDot,200);this.$emit("isShow",false)},
    moveDot(){
      if (parseInt(this.index) <= 1){this.index = 3;}
      this.index -= 0.1;
      $('#box').css({ "transform": "scale("+this.index+")" });
    }
 }
};
</script>

<style lang="scss" scoped>
.dot{position: relative;height: 10px; width: 10px;
  #box{position: relative; cursor: pointer;width:10px;height:10px; border-radius: 50%; background-color: $color-005; opacity:.5;top:50%;left:50%;}
  .small{position: absolute;width:10px;height:10px;border-radius: 50%; background-color: $color-005; z-index: 999;top:50%;left:50%;}
  .mask{position: absolute;width:24px;height:24px;background-color:transparent;z-index: 999;top: 0;}
}
</style>
