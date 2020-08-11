// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vue18n from 'vue-i18n'
import $ from 'jquery'
import axios from 'axios'
import qs from 'qs'
import VueLazyload from 'vue-lazyload' //引入这个懒加载插件
import gomove from './assets/js/move'
import client from './assets/js/client'
import { getPageTitle } from './assets/js/title';
import apiConfig from '../config/api.config'

Vue.use(VueLazyload)

Vue.use(Vue18n);

Vue.use(VueLazyload, {
  preLoad: 1.3,
  attempt: 1
})

Vue.prototype.$qs = qs
Vue.prototype.$axios = axios
Vue.prototype.$gomove = gomove
Vue.prototype.$client = client
axios.defaults.baseURL = apiConfig.baseUrl;


let lan = '';
if (window.localStorage.getItem("languagechoose")) {
  if(window.localStorage.getItem("languagechoose") == '"zh-CN"'){
    lan = 'zh';
  }else{
    lan = 'en';
  }
} else {
  let language = window.navigator.userLanguage || window.navigator.language;
  window.localStorage.setItem("languagechoose", JSON.stringify(language));
  if(language == 'zh-CN'){
    lan = 'zh';
  }else{
    lan = 'en';
  }
}

const i18n = new Vue18n({
  locale: lan,
  messages: {
    zh: require("./assets/i18n/zh"),
    en: require("./assets/i18n/en")
  },
  silentTranslationWarn: true
})


router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = getPageTitle(i18n,to.meta.title)
  }
  next()
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  i18n,
  components: {
    App
  },  
  template: '<App/>'
})
