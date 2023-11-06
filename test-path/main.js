/**
 *commonjs规范：注入几个变量 __dirname当前文件所在路径
 *
 */
const fs = require('fs')
const path = require('path') //本质上是一个路径字符串处理模块，里面有很多字符串处理方法
const result = fs.readFileSync(path.resolve(__dirname, './variable.css')) //基于main.js去进行一个绝对路径生成 当使用相对路径node运行就会报错,path.resolve相当于合并
console.log(result.toString(), __dirname)
