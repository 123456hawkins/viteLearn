const Koa = require('koa')
const fs = require('fs')
const path = require('path')

// 不同的宿主换进会给予js一些不同的能力

const app = new Koa()
// 当请求来临以后会直接进入到use注册的回调函数中
app.use(async (ctx) => {
  console.log('ctx', ctx.request, ctx.response)
  if (ctx.request.url === '/') {
    // 意味着要根路径
    const indexContent = await fs.promises.readFile(
      path.resolve(__dirname, './index.html')
    )
    console.log('indexContent', indexContent.toString())
    ctx.response.body = indexContent
    ctx.response.set('Content-Type', 'text/html')
  }
  if (ctx.request.url === '/main.js') {
    const mainContent = await fs.promises.readFile(
      path.resolve(__dirname, './main.js')
    )
    console.log('mainJS', mainContent.toString())
    ctx.response.body = mainContent
    ctx.response.set('Content-Type', 'text/javascript')
  }
  // 官方做法是使用正则匹配.当找到后缀名是.vue的文件
  if (ctx.request.url === '/App.vue') {
    // 然后在vue文件后在进行语法分析，替换为js文件=》Vue.createElement方法替换
    const mainVueContent = await fs.promises.readFile(
      path.resolve(__dirname, './App.vue')
    )
    console.log('mainVue', mainVueContent.toString())
    ctx.response.body = mainVueContent
    ctx.response.set('Content-Type', 'text/javascript')
  }
})
app.listen(5173, () => {
  console.log('vite dev server listen on port 5173')
})
