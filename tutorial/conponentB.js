import conponentBCss from './conponentB.module.css'
console.log('CBSS', conponentBCss)
const div = document.createElement('div')
document.body.appendChild(div)
div.className = conponentBCss.footer
