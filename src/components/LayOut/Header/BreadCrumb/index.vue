<template>
  <el-breadcrumb class="container" separator="/">
    <el-breadcrumb-item :to="{ name: item.name }" v-for="item in match.list">
      {{ item.meta.title }}

    </el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script setup>
import {useRoute} from 'vue-router'
import {reactive} from "vue";

const route = useRoute()
let match = reactive({
  list: route.matched.filter(item => item.meta.title)
})

function changeRoute(newValue) {
  match.list = newValue.matched.filter(item => item.meta.title)
  let first = newValue.matched[0]
  if (first.path !== '/Layout') {
    match.list = [{path: '/Layout', name: 'home', meta: {title: '首页', push: true}}].concat(match.list)
  }
}


watch(route, (newValue, oldValue) => {
  changeRoute(newValue)
}, {immediate: true})


</script>

<style scoped>
.container {


}
</style>
