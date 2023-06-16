import { defineStore } from 'pinia'
import themeColor from '@/enum/piniaEnum'
import { changeColor } from '@/utils/themeSettings'
import { useDark, useToggle } from '@vueuse/core'

const useStyleStore = defineStore({
  id: themeColor.style, 
  // 开启数据持久化
  persist: true,
  state: () => ({
    dark: false,
    themeColor: '#1890ff',
    menuMode: 'vertical', // horizontal
    expend: false,
  }),
  actions: {
    changeTheme(color:string) {
      changeColor(color)
      this.themeColor = color
    },
    changeDark(isDark:boolean){
      const toggleDark = useToggle(useDark())
      toggleDark(isDark)
      this.dark = isDark
    }
  },
})

export { useStyleStore as default } 