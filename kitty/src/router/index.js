import Vue from 'vue'
import Router from 'vue-router'
import Loye from '@/components/Loye'
import Article from '@/components/Article'

const Study = {template: '<div>this study page</div>'};
const Work = {template: '<div>this work page</div>'}

Vue.config.productionTip = false;
Vue.use(Router)

export default new Router({
  linkActiveClass: 'lala',
  mode: 'history',
  // mode: 'hash',
  routes: [{
    path: '/',
    name: "hello",
    component: Loye
  },
  {
    path: '/article/:page?',   // 传参 ? 表示0次或者1次匹配，也就表示可以不匹配page参数
    name: "article",
    component: Article
  },
  {
    path: '/study',
    name: "study",
    component: Study
  },{
    path: '/work',
    name: "work",
    component: Work
  }]
})