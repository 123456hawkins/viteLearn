// import { count } from './counter.js'
// import './request.js'
// import './index.css'
// import './componentA.js'
// import './conponentB.js'
// import './index.module.less'
// import './variables.css'
// import './src/assets/imageLoader.js'
import { name, age } from './src/assets/json/index.json' //不用全部导入可以方便treeShaking
import './src/assets/svgloader.js'
import('./src/assets/imageLoader').then((data) => {
  console.log(data)
})
// console.log(count)
console.log(name, age)

fetch('/api/users', {
  method: 'post',
})
  .then((data) => {
    console.log('data', data)
  })
  .catch((err) => {
    console.log(err)
  })
