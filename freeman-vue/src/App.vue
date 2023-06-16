<script setup lang="ts">
import useStyleStore from '@/stores/style'
import { useDark, useToggle } from '@vueuse/core'
const styleStore = useStyleStore()

// 加载主题
if(styleStore.themeColor){
  styleStore.changeTheme(styleStore.themeColor)
}

// 切换暗黑模式
const isDark = useDark()
const toggleDark = useToggle(isDark)
toggleDark(styleStore.dark)

</script>

<template>
  <router-view></router-view>
</template>

<style scoped lang="scss">

</style>
