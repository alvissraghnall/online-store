import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { URL, fileURLToPath } from "url";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  optimizeDeps: {
    exclude: ["oh-vue-icons/icons"]
  },
  resolve: {
    alias: [{
      find: "@",
      replacement: fileURLToPath(new URL( "./src", import.meta.url))
    }, {
      find: "@util",
      replacement: fileURLToPath(new URL( "./src/util", import.meta.url))
    }, {
      find: "@components",
      replacement: fileURLToPath(new URL( "./src/components", import.meta.url))
    }, {
      find: "@assets",
      replacement: fileURLToPath(new URL( "./src/assets", import.meta.url))
    },]
  }
})
