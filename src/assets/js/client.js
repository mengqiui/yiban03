let client = {
  clientchoose() {
    const clientwidth =
      document.documentElement.offsetWidth || document.body.offsetWidth;
    if (clientwidth < 1200) {
      return false
    } else {
      return true
    }
  },
  clickblank(e) {
    const arr = [];
    for (let i = 0; i < e.path.length; i++) {
      if (e.path[i].className == "leaderbar") {
        arr.push(e.path[i].className);
      }
    }
    if (arr.length > 0) {
      return 'leaderbar'
    } else {
      return 'blank'
    }
  }
}


export default client;
