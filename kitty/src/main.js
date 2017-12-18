import Vue from 'vue'
import App from './App'
import router from './router'   // ./router/index.js 找这个文件 index默认，可以不写

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components:{ App }
})