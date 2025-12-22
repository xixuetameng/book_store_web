import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  server: {
    proxy: {
      // 把 /api 的请求代理到后端
      '/api': {
        target: 'http://localhost:5022', // 你的后端地址
        changeOrigin: true,               // 伪装成同源
        rewrite: (path) => path.replace(/^\/api/, '/api') // 保持路径不变
      }
    }
  }
})
