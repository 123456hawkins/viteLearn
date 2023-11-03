import componentACss from './componentA.module.css'

console.log('CASS',componentACss)
const div = document.createElement('div')
document.body.appendChild(div)
div.className = componentACss.footer
