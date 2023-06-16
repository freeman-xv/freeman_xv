<script setup lang="ts">
import useStyleStore from '@/stores/style';
import { ref, watch } from 'vue';
const styleStore = useStyleStore();
const showTile = ref(styleStore.expend)
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};

watch(() => styleStore.$state.expend,(newVal)=>{
  console.log(newVal)
  if(newVal){
    showTile.value = newVal
  }else{
    setTimeout(()=>{
      showTile.value = newVal
    },300)
  }
})


</script>
<template>
  <div class="global-menu">
    <div class="logo">
      <div class="logo-img"><img src="@/assets/Global/Img/Logo.png" alt="" /></div>
      <div class="logo-title" v-if="!showTile">流云管理系统</div>
    </div>
    <div class="menu">
      <el-menu
        default-active="2"
        class="el-menu-vertical-demo"
        :collapse="styleStore.expend"
        @open="handleOpen"
        @close="handleClose"
      >
        <el-sub-menu index="1">
          <template #title>
            <el-icon><location /></el-icon>
            <span>Navigator One</span>
          </template>
          <el-menu-item-group title="Group One">
            <el-menu-item index="1-1">item one</el-menu-item>
            <el-menu-item index="1-2">item two</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="Group Two">
            <el-menu-item index="1-3">item three</el-menu-item>
          </el-menu-item-group>
          <el-sub-menu index="1-4">
            <template #title>item four</template>
            <el-menu-item index="1-4-1">item one</el-menu-item>
            <el-menu-item index="1-4-2">item one</el-menu-item>
            <el-menu-item index="1-4-3">item one</el-menu-item>
            <el-menu-item index="1-4-4">item one</el-menu-item>
            <el-menu-item index="1-4-5">item one</el-menu-item>
            <el-menu-item index="1-4-6">item one</el-menu-item>
            <el-menu-item index="1-4-7">item one</el-menu-item>
            <el-menu-item index="1-4-8">item one</el-menu-item>
            <el-menu-item index="1-4-9">item one</el-menu-item>
            <el-menu-item index="1-4-10">item one</el-menu-item>
            <el-menu-item index="1-4-11">item one</el-menu-item>
            <el-menu-item index="1-4-12">item one</el-menu-item>
            <el-menu-item index="1-4-13">item one</el-menu-item>
            <el-menu-item index="1-4-14">item one</el-menu-item>
            <el-menu-item index="1-4-15">item one</el-menu-item>
            <el-menu-item index="1-4-16">item one</el-menu-item>
            <el-menu-item index="1-4-17">item one</el-menu-item>
            <el-menu-item index="1-4-18">item one</el-menu-item>
            <el-menu-item index="1-4-19">item one</el-menu-item>
          </el-sub-menu>
        </el-sub-menu>
        <el-menu-item index="2">
          <el-icon><icon-menu /></el-icon>
          <span>Navigator Two</span>
        </el-menu-item>
        <el-menu-item index="3">
          <el-icon><document /></el-icon>
          <span>Navigator Three</span>
        </el-menu-item>
        <el-menu-item index="4">
          <el-icon><setting /></el-icon>
          <span>Navigator Four</span>
        </el-menu-item>
      </el-menu>
    </div>
  </div>
</template>
<style scoped lang="scss">
.global-menu {
  height: 100%;

  .logo {
    line-height: 50px;
    /* text-align: center; */
    display: flex;
    background-color: var(--el-color-primary);

    .logo-img{
      width: 50px;
      height: 50px;
      display: inline-block;
      
      img {
        height: 40px;
        width: 40px;
        margin: 5px;
        vertical-align: middle;
      }
    }

    .logo-title{
      display: inline-block;
      color: #ffffff;
      margin-left: 5px;
      font-size: 20px;
    }
  }

  .menu{
    height: calc(100% - 50px);
    overflow: hidden;
    overflow-y: auto;

    :deep(.el-menu){
      min-height: 100%;
    }
  }

  .menu::-webkit-scrollbar {
    display: none;
  }
}
</style>
