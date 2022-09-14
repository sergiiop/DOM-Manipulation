import router from './src/routes'
import './src/index.css'

console.log('hello')

window.addEventListener('load', router)
window.addEventListener('hashchange', router)
