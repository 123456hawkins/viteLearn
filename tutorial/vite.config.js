import { defineConfig } from 'vite' //用了这个就有语法提示
import viteBaseConfig from './vite.base.config'
import viteDevConfig from './vite.dev.config'
import viteProdConfig from './vite.prod.config'
// 策略模式
const envResolver = {
  // build: () => Object.assign(viteBaseConfig, viteProdConfig),//这种写法会将 viteProdConfig 对象的属性合并到 viteBaseConfig 对象中。它会修改 viteBaseConfig 对象，将 viteProdConfig 的属性添加到它身上，同时返回修改后的 viteBaseConfig 对象。
  // serve: () => Object.assign(viteBaseConfig, viteDevConfig),
  // build: () => Object.assign({}, viteBaseConfig, viteProdConfig), //新建一个空对象，然后将 viteBaseConfig 和 viteProdConfig 的属性合并到这个新对象中。
  // serve: () => Object.assign({}, viteBaseConfig, viteDevConfig),
  "build": () =>{
    console.log('生产环境');
    return ({...viteBaseConfig,...viteProdConfig})
  },
  "serve": () =>{
    console.log('开发环境');
    return ({...viteBaseConfig,...viteDevConfig})
  } 
}
export default defineConfig(({ command }) => {
  console.log('command', command)
  return envResolver[command]()
})
// vite解决了3个问题
// 1.不同的第三方包会有不同的导出格式
// 2.对路径的处理上可以直接使用.vite/deps,方便路径重写
// 3.解决网络多包传输的新能问题,有了依赖与构建以后无论有多少个额外的export和import，vite都会尽可能的将他们进行集成只生成一个或者几个模块
