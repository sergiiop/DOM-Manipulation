import Header from '../Layouts/Header'
import Home from '../pages/Home'
import WorkShop2 from '../pages/WorkShop2'
import WorkShop1 from '../pages/WorkShop1'
import getHash from '../utils/getHash'
import resolveRoutes from '../utils/resolveRoutes'

const routes = {
  '/': Home,
  '/workshop1': WorkShop1,
  '/workshop2': WorkShop2
}

const router = async () => {
  const main = null || document.getElementById('main')
  main.innerHTML = ''
  const app = document.createElement('div')
  const MyHeader = Header()

  let hash = getHash()
  let route = await resolveRoutes(hash)

  let render = routes[route] ?? Error404

  app.append(await render())
  main.append(MyHeader, app)
  // content.innerHTML = await render()
}

export default router
