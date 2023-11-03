import { defineConfig } from 'vite'
export default defineConfig({
  optimizeDeps: {
    // 当遇到lodash-es时不做依赖预构建
    exclude: ['lodash-es'], //将指定数组中的依赖排除预购建
  },
  envPrefix: 'ENV_', //配置vite注入客户端环境变量校验的env前缀
  css:{//对css的行为进行配置
    

  }
})
