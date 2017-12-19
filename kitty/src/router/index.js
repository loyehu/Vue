import Vue from 'vue'
import Router from 'vue-router'
import Loye from '@/components/Loye'
import Article from '@/components/Article'
import User from '@/components/User'
import Daily from '@/components/Daily'

const Study = {template: '<div>this study page</div>'};
const Work = {template: '<div>this work page</div>'}
const About = {template: `<div>this about page<router-view></router-view></div>`}
const Blog = {template: '<div>this Blog page</div>'}
const Info = { template:`<div>this Info page</div>`}

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
    // 传递一个参数
    path: '/article/:page?',   // 传参 ? 表示0次或者1次匹配，也就表示可以不匹配page参数
    name: "article",
    component: Article
  },
  {
    // 传递一个参数
    path: '/daily',   // 传参 ? 表示0次或者1次匹配，也就表示可以不匹配page参数
    name: "daily",
    component: Daily
  },
  {
    path: '/user/:id?',
    name: 'user',
    component: User
  },
  {
    path: '/study',
    name: "study",
    component: Study
  },{
    path: '/work',
    name: "work",
    component: Work
  },
  {
      path: '/about',  // 这是一级路由
      component: About,
      children: [{  // 里面是嵌套路由
              path: 'blog',  //如果在这个嵌套
              name: 'blog',
              component: Blog
          },
          {
            path: '/info',
            name: 'info',
            component: Info
          }
      ]
  }
]
})