<template>
  <div id="app">
    <img src="./assets/logo.png">
    <!-- 路由name传过来的参数 -->
    <p>{{$route.name}}</p>
    <div>
      <button @click="goBack">后退</button>
      <button @click="goAhead">前进</button>
      <button @click="goHome">返回首页</button>
    </div>
    <p>
      <router-link to="/">首页</router-link> | 
      <router-link to="/hi">Hi页面</router-link> |
      <router-link to="/hiAlias">hiAlias</router-link> |
      <!-- name值与路由配置中的name一致 -->
      <router-link :to="{name: 'hi1', params: {username: 'control', id: '99'} }">Hi子页面1</router-link> |
      <router-link to="/hi/hi2">Hi子页面2</router-link> |
      <router-link to="/params/00/你好">params</router-link> |
      <router-link to="/goHome">goHome</router-link> |
      <router-link to="/goParams/90/redirectToParamsPage">goParams</router-link> |
    </p>
    <!-- 单页面多路由区域操作 -->
    <transition name="fade" mode="out-in">
      <router-view/>    
    </transition>
    <router-view name="left" style="float: left; width: 50%; height: 300px; background: #06c19d;"/>
    <router-view name="right" style="float: right; width: 50%; height: 300px; background: #555;"/>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    goBack(){
      this.$router.go(-1)
    },
    goAhead(){
      this.$router.go(1)
    },
    goHome(){
      this.$router.push('/')
    }
  }
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
.fade-enter{
  opacity: 0;
}
.fade-enter-active{
  transition: opacity .5s;
}
.fade-leave{
  opacity: 1;
}
.fade-leave-active{
  transition: opacity .5s;
}
</style>
