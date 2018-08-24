<template>
  <div class="hi">
    <h1>{{ msg }}</h1>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "hi",
  data() {
    return {
      msg: "hi page"
    }
  }
}
</script>

<style scoped>

</style>
