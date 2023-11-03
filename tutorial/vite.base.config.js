import { defineConfig } from 'vite'
export default defineConfig({
  optimizeDeps: {
    // 当遇到lodash-es时不做依赖预构建
    exclude: ['lodash-es'], //将指定数组中的依赖排除预购建
  },
})
