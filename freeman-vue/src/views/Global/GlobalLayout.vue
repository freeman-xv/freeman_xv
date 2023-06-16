<script setup lang='ts'>
import GlobalHeader from '@/views/Global/GlobalHeader.vue'
import GlobalMenu from '@/views/Global/GlobalMenu.vue'
import GlobalView from '@/views/Global/GlobalView.vue'


</script>
<template>
  <div class="global-layout">
    <GlobalMenu></GlobalMenu>
    <div class="global-body">
      <GlobalHeader></GlobalHeader>
      <GlobalView></GlobalView>
    </div>
  </div>
</template>
<style scoped lang="scss">
.global-layout{
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  overflow-y: auto;
  display: flex;

  .global-body{
    height: 100%;
    flex: 1;
    display: flex;
    flex-direction: column;
  }
}
</style>