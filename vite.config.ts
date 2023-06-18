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
    }]
  }
})
