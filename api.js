const rickMortyApi = {
  
    render: () => {
  
      const container = document.querySelector('#container');
      const urlCharacter = `https://rickandmortyapi.com/api/character/?page=${1}`;
      let contentHTML = '';
  
      fetch(urlCharacter)
        .then(res => res.json())
        .then((data) => {
          console.log(data)
          for(const character of data.results) {
            contentHTML += `
              <div>
                <img src="${character.image} " alt="${character.name}">
                <h1 class="title">${character.name}</h1>
              </div>`;
          }
          container.innerHTML = contentHTML;    
          })
     }
}

rickMortyApi.render()