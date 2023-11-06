import testSvg from './svgs/test.svg'
import svgRaw from './svgs/test.svg?raw'

// 第一种加载svg方法
// const img = document.createElement('img')
// img.src = testSvg

// document.body.appendChild(img)

// 第二种加载svg方法
document.body.innerHTML = svgRaw
const svgElem = document.getElementsByTagName('svg')[0]
svgElem.onmouseover = function () {
  // 不是改background而是改fill
  // 这样就可以不用准备两张图片了
  this.style.fill = 'red'
}
