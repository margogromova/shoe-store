<template>
  <div class="main-wrapper container-md">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: "MainWrapper",
  props: {},
  data() {
    return {}
  },
  computed: { //свойства вычесляются

  },
  methods: {},
  watch: {},
  mounted() {  //отрабатывает при загрузке стр
  }
}
</script>

<style scoped>
.main-wrapper {

}
</style>