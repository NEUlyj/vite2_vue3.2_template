<template>
  <div class="common-layout">
    <el-container>
      <el-aside :width="isCollapse ?  'auto' : '200px'">
        <Aside/>
      </el-aside>
      <el-container>
        <el-header>
          <Header/>
        </el-header>
        <el-main>
          <router-view/>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup>
import {useStore} from "vuex";
const isCollapse=computed(()=>{
  return useStore().state.layout.isCollapse
})
</script>

<style scoped>
.common-layout {
  height: 100%;
  width: 100%;
}

.el-container {
  height: 100%;
  width: 100%;
}
</style>
