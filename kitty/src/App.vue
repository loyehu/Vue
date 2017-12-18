<template>
  <div id="app">
    <!-- 不可取，每次更改很麻烦 -->
    <!-- <a href="#/work">工作</a>
    <a href="#/study">学习</a> -->
    <router-link to="/work" tag="li">工作</router-link>
    <router-link to="/work">工作</router-link>
    <router-link active-class="lala" to="/study">学习</router-link>
    <router-link to="/" exact>啦啦</router-link>
    <router-link to="/article">文章</router-link>
    <img src="./assets/logo.png">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.router-link-active{
  color: plum; 
}
.lala{
  font-size: 30px;
  color: red;
}
</style>
