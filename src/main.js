 
import {allCharacters, filterBySpecies, filterByStatus, filterByGender, getSpeciesArray, getStatusArray, getGenderArray, order } from './data.js'

document.querySelector('#all').addEventListener('click', allCharacters);


const getListAllCharacters = () => {
    drawResults(allCharacters);
}
document.querySelector('#all').addEventListener('click', getListAllCharacters);


// Recibe como parametro el nombre de la especie}
// Llama a data-filterBySpecies para filtrar los personajes de esa especie
const getListSpecies = (species) => {
    let filteredSpecies = filterBySpecies(species);
    drawResults(filteredSpecies);
}

// Jala la lista de especies
const speciesArray = getSpeciesArray();
// crea un evento para cada especie, que ejecuta la anterior getListSpecies
speciesArray.forEach(species => {
    if(document.querySelector('#' + species.toLowerCase()))
        document.querySelector('#' + species.toLowerCase()).addEventListener('click', () => getListSpecies(species));
    else    
        console.log("Esta especie no tiene elemento en HTML: " + species);

})

const getListStatus = (status) => {
    let filteredStatus = filterByStatus(status);
    drawResults(filteredStatus);
}

const statusArray = getStatusArray();
statusArray.forEach(status => {
    if(document.querySelector('#' + status.toLowerCase()))
        document.querySelector('#' + status.toLowerCase()).addEventListener('click', () => getListStatus(status));
    else    
        console.log("Esta especie no tiene elemento en HTML: " + status);
})

const getListGender = (gender) => {
    let filteredGender = filterByGender(gender);
    drawResults(filteredGender);
}

const genderArray = getGenderArray();
genderArray.forEach(gender => {
    if(document.querySelector('#' + gender.toLowerCase()))
        document.querySelector('#' + gender.toLowerCase()).addEventListener('click', () => getListGender(gender));
    else    
        console.log("Esta especie no tiene elemento en HTML: " + gender);
})
 
const getListAtoZ = () => {
    let sortedAscending = [];
    sortedAscending = order.ascending(allCharacters);
    drawResults(sortedAscending);
}
document.querySelector('#orderAtoZ').addEventListener('click', getListAtoZ);

const getListZtoA = () => {
    let sortedDescending = [];
    sortedDescending = order.descending(allCharacters);
    drawResults(sortedDescending);
}
document.querySelector('#orderZtoA').addEventListener('click', getListZtoA);



// function getListAll(){

//     let leaveGender = document.getElementById("listGender");
//     leaveGender.classList.add("hide");

//     let leaveStatus = document.getElementById("listStatus");
//     leaveStatus.classList.add("hide");

//     let leaveSpecies = document.getElementById("listSpecies");
//     leaveSpecies.classList.add("hide");

//     let leaveOrder = document.getElementById("listOrder");
//     leaveOrder.classList.add("hide");

// }
// document.querySelector('#all').addEventListener('click', getListAll);


// function getListSpecies(){

//     let leaveGender = document.getElementById("listGender");
//     leaveGender.classList.add("hide");

//     let leaveStatus = document.getElementById("listStatus");
//     leaveStatus.classList.add("hide");

//     let leaveOrder = document.getElementById("listOrder");
//     leaveOrder.classList.add("hide");

//     let displaySpecies = document.getElementById("listSpecies");
//     displaySpecies.classList.remove("hide");

// }
// document.querySelector('#species').addEventListener('click', getListSpecies);
// document.querySelector('#species').addEventListener('click', getListSpeciesHuman);


// function getListGender(){

//     let leaveSpecies = document.getElementById("listSpecies");
//     leaveSpecies.classList.add("hide");

//     let leaveStatus = document.getElementById("listStatus");
//     leaveStatus.classList.add("hide");

//     let leaveOrder = document.getElementById("listOrder");
//     leaveOrder.classList.add("hide");

//     let displayStatus = document.getElementById("listGender");
//     displayStatus.classList.remove("hide");

// }
// document.querySelector('#gender').addEventListener('click', getListGender);
// document.querySelector('#gender').addEventListener('click', getListGenderMale);


// function getListStatus(){

//     let leaveGender = document.getElementById("listGender");
//     leaveGender.classList.add("hide");

//     let leaveSpecies = document.getElementById("listSpecies");
//     leaveSpecies.classList.add("hide");

//     let leaveOrder = document.getElementById("listOrder");
//     leaveOrder.classList.add("hide");

//     let displayStatus = document.getElementById("listStatus");
//     displayStatus.classList.remove("hide");

// }
// document.querySelector('#status').addEventListener('click', getListStatus);
// document.querySelector('#status').addEventListener('click', getListStatusAlive);



// function getListOrderAtoZ(){

//     let leaveGender = document.getElementById("listGender");
//     leaveGender.classList.add("hide");

//     let leaveSpecies = document.getElementById("listSpecies");
//     leaveSpecies.classList.add("hide");

//     let leaveStatus = document.getElementById("listStatus");
//     leaveStatus.classList.add("hide");

//     let displayOrder = document.getElementById("listOrder");
//     displayOrder.classList.remove("hide");

// }
// document.querySelector('#order').addEventListener('click', getListOrderAtoZ);
// document.querySelector('#order').addEventListener('click', getListAtoZ);

// function hideElement(elementId) {
//     document.getElementById("listGender").classList.add("hide")
// }

// function getListOrderZtoA(){

//     let leaveGender = document.getElementById("listGender");
//     leaveGender.classList.add("hide");

//     let leaveSpecies = document.getElementById("listSpecies");
//     leaveSpecies.classList.add("hide");

//     let leaveStatus = document.getElementById("listStatus");
//     leaveStatus.classList.add("hide");

//     let displayOrder = document.getElementById("listOrder");
//     displayOrder.classList.remove("hide");

// }
// document.querySelector('#order').addEventListener('click', getListOrderZtoA);
// document.querySelector('#order').addEventListener('click', getListZtoA);



window.addEventListener('load', () => {
    document.getElementById('listCharacters').classList.add('images-loaded');
    const categoriesLinks = document.querySelectorAll('#topnav a');
    const speciesLinks = document.querySelectorAll('#listSpecies a');
    const genderLinks = document.querySelectorAll('#listGender a');
    const statusLinks = document.querySelectorAll('#listStatus a');

    categoriesLinks.forEach((element) => {
        element.addEventListener('click', (event) => {
            event.preventDefault();
            categoriesLinks.forEach((categoriesLinks) => categoriesLinks.classList.remove('active'));
            event.target.classList.add('active');
        });
    });
    speciesLinks.forEach((element) => {
        element.addEventListener('click', (event) => {
            event.preventDefault();
            speciesLinks.forEach((speciesLinks) => speciesLinks.classList.remove('active'));
            event.target.classList.add('active');
        });
    });
    genderLinks.forEach((element) => {
        element.addEventListener('click', (event) => {
            event.preventDefault();
            genderLinks.forEach((genderLinks) => genderLinks.classList.remove('active'));
            event.target.classList.add('active');
        });
    });
    statusLinks.forEach((element) => {
        element.addEventListener('click', (event) => {
            event.preventDefault();
            statusLinks.forEach((statusLinks) => statusLinks.classList.remove('active'));
            event.target.classList.add('active');
        });
    });

})



const overlay = document.getElementById('overlay');

const clickToShowCharacterDetail = (characterElement) => {
    const path =    characterElement.dataset.image;
    const name =    characterElement.dataset.name;
    const species = characterElement.dataset.species;
    const gender =  characterElement.dataset.gender;
    const status =  characterElement.dataset.status;
    overlay.classList.add('active');
    document.querySelector('#overlay img').src = path;
    document.querySelector('#overlay .description').innerHTML = `
        <div>
            <div class="character-name">${name}</div>
            <div>Status: ${status}</div>
            <div>Gender: ${gender}</div>
            <div>Specie: ${species}</div>
        </div>
     `;
};

document.querySelector('#btn-close').addEventListener('click', () => {
    overlay.classList.remove('active');
});
overlay.addEventListener('click', (event) => {
    event.target.id === 'overlay' ? overlay.classList.remove('active') : "";
})


function drawCharactersPage(index, arrayOfCharacters) {
        //selecciona los 20 charaacters de la pagina actual
        let pageOfCharacters = arrayOfCharacters.slice(index, index+20);

        // borrar los caracteres que hayan estado antes
        const elementOrderedList = document.getElementById('listCharacters');
        elementOrderedList.innerHTML = "";

        // dibuja cada character, y escucha el clik para mostrar detalle
        for (let i=0; i < pageOfCharacters.length; i++) {

            const result = pageOfCharacters[i]; 
            const elementDiv = document.createElement("div");
            elementDiv.classList.add("character");

            // Pegar en el cuadro la data del personaje
            elementDiv.dataset.image = result.image;
            elementDiv.dataset.name = result.name;
            elementDiv.dataset.species = result.species;
            elementDiv.dataset.gender = result.gender;
            elementDiv.dataset.status = result.status;

            // Set click event to show detail popup
            elementDiv.addEventListener('click', () => clickToShowCharacterDetail(elementDiv))
            elementDiv.innerHTML = `
                <img src="${result.image}" alt="${result.name}">
                <h3>${result.name}</h3>
                <h4>${result.species}</h4>`
            elementOrderedList.appendChild(elementDiv);            
        }
}


function drawResults(arrayOfCharacters){

    const buttonsContainer = document.getElementById("buttonsContainer");
    buttonsContainer.innerHTML = "";

    drawCharactersPage(0, arrayOfCharacters);

    // Paginación. Cada cuadradito numero de página
    for (let pageIndex=0; pageIndex < arrayOfCharacters.length; pageIndex=pageIndex+20 ){
        const button = document.createElement("button");
        const buttonText = document.createTextNode(parseInt(pageIndex / 20) + 1);
        button.appendChild(buttonText);
        button.addEventListener('click', () => drawCharactersPage(pageIndex, arrayOfCharacters));
        buttonsContainer.appendChild(button);
    }

}


function clickHambMenu() {
    let menuBar = document.getElementById("myTopnav");
    if (menuBar.className === "topnav") {
      menuBar.className += " responsive";
    } else {
     menuBar.className = "topnav";
    }
  }
  
document.querySelector('#iconMenu').addEventListener('click', clickHambMenu);



const searchBar = document.getElementById('searchBar');

searchBar.addEventListener('keyup', (e) =>{
   const searchString = e.target.value.toLowerCase();
   const filteredCharacters = allCharacters.filter( character => {
        return character.name.toLowerCase().includes(searchString);
    });
    drawResults(filteredCharacters);
});













import episodesData from './data/rickandmorty/rickandmortyepisodes.js';
const allEpisodes = episodesData;

console.log(allEpisodes);

const searchBarEpisodes = document.getElementById('searchBarEpisodes');

searchBarEpisodes.addEventListener('keyup', (e) =>{
    const searchStringEpisodes = e.target.value.toLowerCase();
    const filteredEpisodes = allEpisodes.filter( episode => {
        return episode.episode.toLowerCase().includes(searchStringEpisodes);
    });
    drawResultsEpisodes(filteredEpisodes);
});


// const selectEpisode = document.getElementById('searchBarEpisodes');
// selectEpisode.addEventListener('keyup', (e) =>{
//     const searchStringEpisodes = e.target.value.toLowerCase();
//     const filteredEpisodes = allEpisodes.filter( episode => {
//         return episode.episode.toLowerCase().includes(searchStringEpisodes);
//     });
//     drawResultsEpisodes(filteredEpisodes);
// });






function drawEpisodesPage(index, arrayOfEpisodes) {
    //selecciona los 20 charaacters de la pagina actual
    let pageOfEpisodes = arrayOfEpisodes.slice(index, index+20);

    // borrar los caracteres que hayan estado antes
    const elementOrderedList = document.getElementById('listCharacters');
    elementOrderedList.innerHTML = "";

    // dibuja cada character, y escucha el clik para mostrar detalle
    for (let i=0; i < pageOfEpisodes.length; i++) {

        const result = pageOfEpisodes[i]; 
        const elementDiv = document.createElement("div");
        elementDiv.classList.add("episode");

        // Pegar en el cuadro la data del personaje
        elementDiv.dataset.name = result.name;
        elementDiv.dataset.air_date = result.air_date;
        elementDiv.dataset.episode = result.episode;
        elementDiv.dataset.characters = result.characters;
       
        // Set click event to show detail popup
        elementDiv.addEventListener('click', () => clickToShowCharacterDetail(elementDiv))
        elementDiv.innerHTML = `
            <h3>${result.name}</h3>
            <p>${result.air_date}</p>
            <p>${result.episode}</p>
            `
        elementOrderedList.appendChild(elementDiv);            
    }
}


function drawResultsEpisodes(arrayOfEpisodes){

const buttonsContainer = document.getElementById("buttonsContainer");
buttonsContainer.innerHTML = "";

drawEpisodesPage(0, arrayOfEpisodes);

// Paginación. Cada cuadradito numero de página
for (let pageIndex=0; pageIndex < arrayOfEpisodes.length; pageIndex=pageIndex+20 ){
    const button = document.createElement("button");
    const buttonText = document.createTextNode(parseInt(pageIndex / 20) + 1);
    button.appendChild(buttonText);
    button.addEventListener('click', () => drawEpisodesPage(pageIndex, arrayOfEpisodes));
    buttonsContainer.appendChild(button);
}

}


const selectEpisode = document.getElementById('choiceOne');
selectEpisode.addEventListener('keyup', (e) =>{
    // const searchStringEpisodes = e.target.value.toLowerCase();
    // const rate_value = document.getElementById('choiceOne').value;
    const filteredEpisodes = allEpisodes.filter( episode => {
        return episode.episode.includes("S01");
    });
    drawResultsEpisodes(filteredEpisodes);
});

