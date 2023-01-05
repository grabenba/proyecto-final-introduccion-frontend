const $container = document.getElementById("container");
const URL_API = "https://rickandmortyapi.com/api/character";
fetch(URL_API)
  .then((response) => response.json())
  .then((data) => {
    const characters = data.results;
    for (let character of characters) {
      $container.innerHTML += `
      <section class="card">
        <div class="option-name"> <img class="character-img" src="${character.image}" 
            alt="imagen de ${character.name}"> 
            <br> ${character.id}. 
            <br> Name: ${character.name} 
            <br> Gender: ${character.gender} 
            <br> Species: ${character.species} 
        </div>
      </section>
    `;
    }
  });