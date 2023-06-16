import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import AutoImport from 'unplugin-auto-import/vite'


// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  return {
    plugins: [
      vue(), 
      vueJsx(),
      Components({
        resolvers: [
          ElementPlusResolver({
            importStyle: "sass",
          }),
        ],
      }),
      AutoImport({
        resolvers: [
          ElementPlusResolver({
            importStyle: "sass",
          }),
        ],
      })
    ],
    server:{
      port: 8080,
      strictPort: true,
      open: true
    },
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    },
    css:{
      preprocessorOptions:{
        scss:{
          additionalData: `@use "@/style/element/theme.scss" as *;`,
        }
      }  
    }
  }
})
