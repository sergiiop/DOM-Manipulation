const Header = () => {
  const headerMain = document.createElement('header')
  const containerLogo = document.createElement('div')
  const containerNav = document.createElement('div')
  const routeLogo = document.createElement('a')
  const routeWorkShop1 = document.createElement('a')
  const routeWorkShop2 = document.createElement('a')

  // classes css
  headerMain.className =
    'flex w-full justify-between mt-2 text-sm leading-8 font-extrabold tracking-tight text-gray-900 sm:text-2xl sm:leading-10'
  containerLogo.className = 'header-logo'
  containerNav.className = 'flex gap-4 text-indigo-600'

  routeLogo.textContent = 'DOM-Manipulation'
  routeLogo.href = '#/'

  routeWorkShop1.textContent = 'WorkShop #1'
  routeWorkShop1.href = '#/WorkShop1'

  routeWorkShop2.textContent = 'WorkShop #2'
  routeWorkShop2.href = '#/WorkShop2'

  containerNav.append(routeWorkShop1, routeWorkShop2)
  containerLogo.append(routeLogo)

  headerMain.append(containerLogo, containerNav)
  return headerMain
}

export default Header
