let totalImages = 0
let loadedImages = 0

const isIntersecting = (entry) => {
  return entry.isIntersecting
}

const loadImage = (entry) => {
  const container = entry.target
  const img = container.firstChild
  const url = img.dataset.src

  img.src = url

  img.onload = () => {
    loadedImages += 1
    logState()
  }

  // des registrar la imagen (unlisten/deja de escucharla)
  observer.unobserve(container)
}

const observer = new IntersectionObserver((entries) => {
  entries.filter(isIntersecting).forEach(loadImage)
})

export const registerImage = (image) => {
  // IntersectionObserver -> observer(imagen)
  observer.observe(image)
  totalImages += 1
  logState()
}

function logState() {
  console.log(`⚪️ Total Imágenes: ${totalImages}`)
  console.log(`🟣 Imágenes cargadas: ${loadedImages}`)
  console.log('--------------------------------------')
}
