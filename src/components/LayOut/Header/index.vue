<template>
  <div class="top-container">
    <div class="top-left">
      <el-icon @click="changeCollapse" v-show="isCollapse">
        <Expand/>
      </el-icon>
      <el-icon @click="changeCollapse" v-show="!isCollapse">
        <Fold/>
      </el-icon>
      <bread-crumb style="margin-left: 30px"/>
    </div>
    <div class="top-right">
      <el-dropdown>
        <img src="../../../assets/head.jpg">
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item @click="exit">退出</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script setup>
import BreadCrumb from "@/components/LayOut/Header/BreadCrumb/index.vue";
import {useStore} from 'vuex'
import {useRouter} from "vue-router";

const store = useStore()
const router =useRouter()
const isCollapse = computed(() => {
  return store.state.layout.isCollapse
})

function changeCollapse() {
  store.commit('layout/CHANGECOLLAPSE')
}
function exit(){
  store.dispatch('Login/exitSystem').then(()=>{
    router.push({
      name:'login'
    })
  })
}
</script>

<style lang="less" scoped>
.top-container {
  height: 100%;
  font-size: 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .top-left {
    display: flex;
    align-items: center;
  }

  .top-right {
    margin-right: 10px;

    img {
      height: 40px;
    }
  }
}
</style>
