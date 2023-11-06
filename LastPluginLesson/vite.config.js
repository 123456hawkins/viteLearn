import { defineConfig } from 'vite'
export default defineConfig({
  plugins: [
    {
      config(option) {
        console.log('config option执行', option)
      },
      configureServer(server) {
        server.middlewares.use((req, res, next) => {})
      },
      transformIndexHtml(html) {},
      configResolved(options) {
        // 整个配置文件的解析流程完全完毕后会走的钩子
      },
      configurePreviewServer(server) {},
      options(rollupOptions) {
        console.log(rollupOptions)
      },
      buildStart(full){
        
      }
    },
  ],
})
