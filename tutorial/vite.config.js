export default {
  // vite解决了3个问题
  // 1.不同的第三方包会有不同的导出格式
  // 2.对路径的处理上可以直接使用.vite/deps,方便路径重写
  // 3.解决网络多包传输的新能问题,有了依赖与构建以后无论有多少个额外的export和import，vite都会尽可能的将他们进行集成只生成一个或者几个模块
  optimizeDeps: {
    // 当遇到lodash-es时不做依赖预构建
    exclude: ['lodash-es'],
  },
}
