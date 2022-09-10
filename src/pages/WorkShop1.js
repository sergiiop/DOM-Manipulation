const baseUrl = 'https://platzi-avo.vercel.app'

const formatPrice = (price) => {
  const newPrice = new Intl.NumberFormat('en-EN', {
    style: 'currency',
    currency: 'USD'
  }).format(price)
  return newPrice
}

const WorkShop1 = async () => {
  const workShopContainer = document.createElement('section')
  const workShopContent = document.createElement('header')
  const title = document.createElement('h3')
  const firstP = document.createElement('p')
  const secondP = document.createElement('p')
  const AvocadosComponent = await Avocados()

  // adding tailwind classes
  workShopContent.className = 'text-center'
  firstP.className =
    'text-base leading-6 text-indigo-600 font-semibold tracking-wide uppercase'
  title.className =
    'mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10'
  secondP.className = 'mt-4 max-w-2xl text-xl leading-7 text-gray-500 mx-auto'

  // adding content
  secondP.textContent = 'to be definee...'
  title.textContent = 'Avocados'
  firstP.textContent = 'Platzi'

  //adding childes

  workShopContent.append(firstP, title, secondP)
  workShopContainer.append(workShopContent, AvocadosComponent)

  return workShopContainer
}

const Avocados = async () => {
  const response = await fetch(`${baseUrl}/api/avo`)
  const avocadoService = await response.json()

  const container = document.createElement('div')
  container.className =
    'grid justify-center grid-cols-[repeat(auto-fit,_minmax(150px,_250px))]'

  const avocados = avocadoService.data.map((element) => {
    //crear imagen
    const imagen = document.createElement('img')
    imagen.src = `${baseUrl}${element.image}`
    //crear titulo
    const title = document.createElement('h2')
    title.textContent = element.name
    title.className =
      'text-base leading-6 font-semibold tracking-wide uppercase'

    //crear precio
    const price = document.createElement('p')
    price.className = 'text-indigo-600'
    price.textContent = formatPrice(element.price)

    const container = document.createElement('div')
    container.append(imagen, title, price)

    return container
  })
  container.append(...avocados)
  return container
}

export default WorkShop1
