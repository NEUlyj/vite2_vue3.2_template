<template>
  <div class="aside">
    <h5 class="title" v-text="isCollapse ?'配置':'默认配置' "></h5>
    <el-menu
        :default-active="route.path"
        router
        :collapse="isCollapse"
    >

      <!--    无二级菜单-->
      <el-menu-item :index="item.redirect" v-for=" (item,index) in noChildren" :key="item.path">
        <el-icon>
          <component :is="item.meta.icon"></component>
        </el-icon>
        <span>{{ item.meta.title }}</span>
      </el-menu-item>
      <!--    有二级菜单-->
      <el-sub-menu :index="item.path" v-for="item in hasChildren" :key="item.path">
        <template #title>
          <el-icon>
            <component :is="item.meta.icon"></component>
          </el-icon>
          <span>{{ item.meta.title }}</span>
        </template>
        <el-menu-item :index="item.path +'/'+p.path" v-for="p in item.children" :key="p.path">{{ p.meta.title }}

        </el-menu-item>
      </el-sub-menu>
    </el-menu>
  </div>
</template>

<script setup>
import {routes} from "@/router";
import {useStore} from "vuex";
import {useRoute} from "vue-router";
const route=useRoute()
const store = useStore()
const noChildren = computed(() => {
  return routes.filter(item => !item.hidden && !item.meta.child)
})
const hasChildren = computed(() => {
  return routes.filter(item => !item.hidden && item.meta.child)
})
const isCollapse = computed(() => {
  return store.state.layout.isCollapse
})
watch(route,(newValue,oldValue)=>{
  // console.log(route.path)
})
</script>

<style lang="less" scoped>
.aside {
  height: 100%;
  width: 100%;
  overflow: hidden;

  .el-menu {
    height: 100%;
    width: 100%;
  }

  .title {
    text-align: center;
    font-size: 20px;
    letter-spacing: 10px;
    margin: 20px 0;
  }
}

</style>
