import { defineConfig } from 'vite'
const postcssPresetEnv = require('postcss-preset-env')
const path = require('path')
export default defineConfig({
  resolve: {
    alias: {
      //配置全局路径
      '@': path.resolve(__dirname, './src'),
      '@assets': path.resolve(__dirname, './src/assets'),
    },
  },
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
    preprocessorOptions: {
      // 配置命令去看less官网
      //key+config key代表预处理器名
      less: {
        math: 'always', //永远计算less中的表达式
        globalVars: {
          //这样设置就代替了在less设置全局变量
          mainColor: 'red',
        },
      },
      sass: {},
    },
    devSourcemap: true,
    postcss: {
      plugins: [
        postcssPresetEnv({
          importFrom: path.resolve(__dirname, './variables.css'), //让postcss知道一些全局变量它需要记下来
        }),
      ],
    },
  },
  build: {
    rollupOptions: {
      //rollup的一些构建策略
      output: {
        assetFileNames: 'hawkins_[hash].[name].[ext]', //hash代表将文件名和文件内容就进行组合计算
      },
    },
    assetsInlineLimit: 4096000, //图片小于4kb，就转换为base64
    outDir: 'testDist', //打包目录
    assetsDir: 'static', //静态资源目录
    emptyOutDir: true, //清除构建目录
  },
})
