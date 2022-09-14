const Home = () => {
  const homeContainer = document.createElement('section')
  homeContainer.className = 'home'
  const view = `
  <div>
    <h1 style='text-align: center; margin-block-start:2rem'>WorksShops Creados Utilizando solo JS Vanilla, con la ayuda del curso de Manipulacion del DOM con Javascript en Platzi</h1>
  </div>
  <div class='home--section even-columns'>
    <div class="card">
      <div class="card-details">
        <p class="text-title">WorkShop #1</p>
        <p class="text-body">Simple aplicacion para Dominar la API del DOM para leer, agregar, modificar y eliminar nodos.</p>
      </div>
      <a class="card-button" href='#/WorkShop1'>Ver Proyecto</a>
    </div>
    <div class="card">
      <div class="card-details">
        <p class="text-title">WorkShop #2</p>
        <p class="text-body">Simple aplicacion para Aprender nuevos métodos y nuevas APIs y  Explorar cómo funcionan los Eventos en el DOM y utilizarlos para hacer una página interactiva</p>
      </div>
      <a class="card-button" href='#/WorkShop2'>Ver Proyecto</a>
    </div>
  </div>
  `
  homeContainer.innerHTML = view
  return homeContainer
}

export default Home
