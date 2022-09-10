const Home = () => {
  // const view = `
  //   <div class="characters">
  //     ${characters.results
  //       .map(
  //         (character) => `
  //       <article class="characters-item">
  //         <a href="#/${character.id}/">
  //           <img src="${character.image}" alt="${character.name}" >
  //           <h2>${character.name}</h2>
  //         </a>
  //       </article>
  //     `
  //       )
  //       .join('')}
  //   </div>
  // `
  const container = document.createElement('div')
  const myTitle = document.createElement('h1')
  myTitle.className = 'text-xl'
  myTitle.textContent = 'hello wolrd'
  container.appendChild(myTitle)
  return container
}

export default Home
