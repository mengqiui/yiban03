import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const originalPush = Router.prototype.push;
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
};

export default new Router({
  mode: 'history',
  routes: [
    { path: '/about', name: 'about',meta: { title: 'about' }, component: resolve => require(['@/components/content/about'], resolve) },
    { path: '/tech', name: 'tech',meta: { title: 'tech' }, component: resolve => require(['@/components/content/tech'], resolve) },
    { path: '/talents', name: 'talents',meta: { title: 'tal' }, component: resolve => require(['@/components/content/talents'], resolve) },
    { path: '/news', name: 'news',meta: { title: 'news' }, component: resolve => require(['@/components/content/news'], resolve) },
    { path: '/allnews', name: 'allnews',meta: { title: 'allNews' }, component: resolve => require(['@/components/content/allnews'], resolve) },
    { path: '/newDetail', name: 'newDetail',meta: { title: 'detail' }, component: resolve => require(['@/components/content/newDetail'], resolve) },
    { path: '*', redirect: '/about' }
  ]
})
