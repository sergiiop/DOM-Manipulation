import { registerImage } from './../utils/lazy'

const addCat = async (mountNode) => {
  const newImage = await createKittens()
  mountNode.appendChild(newImage)
  registerImage(newImage)
}

// crear una imagen

const createKittens = async () => {
  const url = await fetch('https://api.thecatapi.com/v1/images/search')
  const data = await url.json()
  const src = data[0].url
  const container = document.createElement('div')
  container.className = 'p-4'
  const img = document.createElement('img')
  img.className = 'mx-auto'
  img.width = '320'
  img.height = '320'
  img.style.background = '#eee'
  img.dataset.src = src
  container.appendChild(img)

  return container
}

const WorkShop2 = async () => {
  const workShopContainer = document.createElement('section')
  const workShopContent = document.createElement('header')
  const title = document.createElement('h3')
  const firstP = document.createElement('p')
  const secondP = document.createElement('p')
  const addCatButton = document.createElement('button')
  const cleanButton = document.createElement('button')
  const KittensContainer = document.createElement('div')

  cleanButton.type = 'reset'

  // adding tailwind classes
  workShopContainer.className =
    'py-10 max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8'
  workShopContent.className = 'text-center'
  firstP.className =
    'text-base leading-6 text-indigo-600 font-semibold tracking-wide uppercase'
  title.className =
    'mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10'
  secondP.className = 'mt-4 max-w-2xl text-xl leading-7 text-gray-500 mx-auto'
  addCatButton.className =
    'py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
  cleanButton.className = 'font-medium text-indigo-600 hover:text-indigo-500'
  KittensContainer.className =
    'grid items-center justify-center grid-cols-[repeat(auto-fit,_minmax(200px,_250px))]'

  // adding content
  secondP.textContent = 'to be definee...'
  title.textContent = `Gatitos 🐱`
  firstP.textContent = 'Platzi'
  addCatButton.textContent = 'Agregar gatito'
  cleanButton.textContent = 'Limpiar'

  // adding events
  addCatButton.addEventListener('click', () => addCat(KittensContainer))
  cleanButton.addEventListener('click', () => {
    KittensComponent.remove()
  })

  //adding childes

  workShopContent.append(firstP, title, secondP, addCatButton, cleanButton)
  workShopContainer.append(workShopContent, KittensContainer)

  return workShopContainer
}

export default WorkShop2
