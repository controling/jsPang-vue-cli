<template>
  <div class="hi">
    <h1>{{ msg }}</h1>
    <!-- 路由传过来的数据 -->
    <p>{{ $route.params.username }}</p>
    <p>{{ $route.params.id }}</p>
  </div>
</template>

<script>
export default {
  name: "hi1",
  data() {
    return {
      msg: "hi1 page"
    }
  }
}
</script>

<style scoped>

</style>
