import { defineConfig } from 'vite'
export default defineConfig({
  optimizeDeps: {
    // 当遇到lodash-es时不做依赖预构建
    exclude: ['lodash-es'], //将指定数组中的依赖排除预购建
  },
  envPrefix: 'ENV_', //配置vite注入客户端环境变量校验的env前缀
  css: {
    //对css的行为进行配置
    // module配置最终会爹给postcss modules
    modules: {
      localsConvention: 'camelCaseOnly', //控制命名规则，此处将所有命名改为驼峰命名法，dash代表有横线
      scopeBehaviour: 'local', //配置当前模块化行为是模块化还是全局化
      // generateScopedName: 'hawkins_[name]_[module]_[hash:5]', //生成名字的规则类名
      generateScopedName: (name, filename, css) => {
        // name->代表此刻css文件中的类名
        // filename->当前css文件的绝对路径
        // css->给的是当前样式
        console.log('name:', name, 'filename:', filename, 'css:', css)
        return `${name}-${Math.random().toString().substr(3, 8)}`
      },
    },
  },
})
