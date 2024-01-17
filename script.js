let offset = 0;
const limit = 15;

function Pokemon() {
  fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`)
    .then(response => response.json())
    .then(data => {
      const pokemonContainer = document.querySelector('#pokemonContainer');
      data.results.forEach(pokemon => {
        fetch(pokemon.url)
          .then(response => response.json())
          .then(data => {
            pokemonContainer.innerHTML += `
              <div class="pokemon ${data.types[0].type.name}">
                <div class="imgContainer">
                  <img src="${data.sprites.front_default}" alt="${data.name}" />
                </div>
                <div class="info">
                  <h3 class="name">${data.name}</h3>
                  <span class="type">Type: <span>${data.types[0].type.name}</span></span>
                </div>
              </div>
            `;
          })
      });
      offset += limit; 
    })
    
}

Pokemon();

document.querySelector('#next').addEventListener('click', Pokemon);
