<template>
  <div class="params">
    <h1>{{ msg }}</h1>
    <h3>url传过来的参数</h3>
    <p>{{$route.params.newsId}}</p>
    <p>{{$route.params.newsTitle}}</p>
  </div>
</template>

<script>
export default {
  name: "left",
  data() {
    return {
      msg: "params page"
    }
  }
}
</script>

<style scoped>

</style>
