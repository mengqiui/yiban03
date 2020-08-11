let gomove = {
  move(targetOffsetTop) {
    let scrollTop =
      document.documentElement.scrollTop || document.body.scrollTop;
    const STEP = 50;
    if (scrollTop > targetOffsetTop) {
      smoothUp();
    } else {
      smoothDown();
    }

    function smoothDown() {
      if (scrollTop < targetOffsetTop) {
        if (targetOffsetTop - scrollTop >= STEP) {
          scrollTop += STEP;
        } else {
          scrollTop = targetOffsetTop;
        }
        document.body.scrollTop = scrollTop;
        document.documentElement.scrollTop = scrollTop;
        window.requestAnimationFrame =
          window.requestAnimationFrame ||
          function (a) {
            return setTimeout(a, 1000 / 60);
          }; //时间刻自行设置
        window.cancelAnimationFrame =
          window.cancelAnimationFrame || clearTimeout;
        requestAnimationFrame(smoothDown);
      }
    }

    function smoothUp() {
      if (scrollTop > targetOffsetTop) {
        if (scrollTop - targetOffsetTop >= STEP) {
          scrollTop -= STEP;
        } else {
          scrollTop = targetOffsetTop;
        }
        document.body.scrollTop = scrollTop;
        document.documentElement.scrollTop = scrollTop;
        window.requestAnimationFrame =
          window.requestAnimationFrame ||
          function (a) {
            return setTimeout(a, 1000 / 60);
          }; //时间刻自行设置
        window.cancelAnimationFrame =
          window.cancelAnimationFrame || clearTimeout;
        requestAnimationFrame(smoothUp);
      }
    }
  }
}


export default gomove;
