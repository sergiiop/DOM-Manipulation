import router from './src/routes'
import './style.css'
import './src/index.css'

console.log('hello')

window.addEventListener('load', router)
window.addEventListener('hashchange', router)
