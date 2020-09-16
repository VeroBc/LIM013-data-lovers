import { allEpisodesData, allLocationsData } from './data_api.js';

let episodesList = [];

allEpisodesData().then( arrayResultadoFinal => {
    episodesList = arrayResultadoFinal;
    displayEpisodes();
})


const displayEpisodes = () => {
    // let index = 0;
    // let pageOfCharacters = episodesList.slice(index, index+20);

    const elementOrderedList = document.getElementById('episodesList');
    elementOrderedList.innerHTML = "";

    for (let i=0; i < episodesList.length; i++) {
        
        const episode = episodesList[i];
        const elementDiv = document.createElement("div");
        elementDiv.classList.add("episode");
        elementDiv.innerHTML = `
            <ol>
            <h4><span style="color:yellow">${episode.name}</span></h4>
            <p>Episode: <span style="color:rgb(230, 230, 95)">${episode.episode}</span></p>
            <p>Air Date: <span style="color:rgb(230, 230, 95)">${episode.air_date}</span></p>
            <p>Percentage of Characters: <span style="color:rgb(230, 230, 95)">${(((episode.characters.length)/671)*100).toFixed(2)+" %"}</span></p>
            </ol>`
        elementOrderedList.appendChild(elementDiv);  
    }
}

// function drawResults(episodesList) {

//     const buttonsEpisodes = document.getElementById("buttonsEpisodes");
//     buttonsEpisodes.innerHTML = "";

//     displayEpisodes(0, episodesList);

//     for (let pageIndex = 0; pageIndex < episodesList.length; pageIndex = pageIndex + 20) {
//         const button = document.createElement("button");
//         const buttonText = document.createTextNode(parseInt(pageIndex / 20) + 1);
//         button.appendChild(buttonText);

//         button.addEventListener('click', () => displayEpisodes(pageIndex, episodesList));
//         buttonsEpisodes.appendChild(button);
//     }
// }




let locationsList = [];

allLocationsData().then( locationsDataFromAPI => {
    locationsList = locationsDataFromAPI;
    displayLocations();
})

const displayLocations = () => {

    const elementOrderedList = document.getElementById('locationsList');
    elementOrderedList.innerHTML = "";

    for (let i=0; i < locationsList.length; i++) {
        
        const location = locationsList[i];
        const elementDiv = document.createElement("div");
        elementDiv.classList.add("location");
        elementDiv.innerHTML = `
            <ol>
            <h4><span style="color:yellow">${location.name}</span></h4>
            <p>Type: <span style="color:rgb(230, 230, 95)">${location.type}</span></p>
            <p>Dimension: <span style="color:rgb(230, 230, 95)">${location.dimension}</span></p>
            <p>Amount of residents: <span style="color:rgb(230, 230, 95)">${(location.residents.length)}</span></p>
            </ol>`
        elementOrderedList.appendChild(elementDiv);  
    }
}

function getEpisodes(){

    let displayHome = document.getElementById("homeSection");
    displayHome.classList.add("hide");
    
    let displaySubheader = document.getElementById("subheaderSection");
    displaySubheader.classList.add("hide"); 

    let displayCharacters = document.getElementById("charactersSection");
    displayCharacters.classList.add("hide"); 
  
    let displayPageLocations = document.getElementById("locationsSection");
    displayPageLocations.classList.add("hide");
  
    let displayPageEpisodes = document.getElementById("episodesSection");
    displayPageEpisodes.classList.remove("hide");
}
document.querySelector('#allEpisodes').addEventListener('click', getEpisodes);


function getLocations(){

    let displayHome = document.getElementById("homeSection");
    displayHome.classList.add("hide");
    
    let displaySubheader = document.getElementById("subheaderSection");
    displaySubheader.classList.add("hide"); 

    let displayCharacters = document.getElementById("charactersSection");
    displayCharacters.classList.add("hide"); 
    
    let displayEpisodes = document.getElementById("episodesSection");
    displayEpisodes.classList.add("hide");
    
    let displayLocations = document.getElementById("locationsSection");
    displayLocations.classList.remove("hide");
}
document.querySelector('#allLocations').addEventListener('click', getLocations);




const searchBar = document.getElementById('searchBarEpisodes');
searchBar.addEventListener('keyup', (e) =>{
    const searchString = e.target.value.toLowerCase();
    const filteredEpisodes = episodesList.filter( e => {
        return e.episode.toLowerCase().includes(searchString);
    });

    const elementOrderedList = document.getElementById('episodesList');
    elementOrderedList.innerHTML = "";

    for (let i=0; i < filteredEpisodes.length; i++) {
        
        const episode = filteredEpisodes[i];
        const elementDiv = document.createElement("div");
        elementDiv.classList.add("episode");
        elementDiv.innerHTML = `
            <ol>
            <h4><span style="color:yellow">${episode.name}</span></h4>
            <p>Episode: <span style="color:rgb(230, 230, 95)">${episode.episode}</span></p>
            <p>Air Date: <span style="color:rgb(230, 230, 95)">${episode.air_date}</span></p>
            <p>Percentage of Characters: <span style="color:rgb(230, 230, 95)">${(((episode.characters.length)/671)*100).toFixed(2)+" %"}</span></p>
            </ol>`
        elementOrderedList.appendChild(elementDiv);  
    }
      
});

const searchBarLocations = document.getElementById('searchBarLocations');
searchBarLocations.addEventListener('keyup', (e) =>{
    const searchString = e.target.value.toLowerCase();
    const filteredLocations = locationsList.filter( e => {
        return e.name.toLowerCase().includes(searchString);
    });

    const elementOrderedList = document.getElementById('locationsList');
    elementOrderedList.innerHTML = "";

    for (let i=0; i < filteredLocations.length; i++) {
        
        const location = filteredLocations[i];
        const elementDiv = document.createElement("div");
        elementDiv.classList.add("location");
        elementDiv.innerHTML = `
            <ol>
            <h4><span style="color:yellow">${location.name}</span></h4>
            <p>Type: <span style="color:rgb(230, 230, 95)">${location.type}</span></p>
            <p>Dimension: <span style="color:rgb(230, 230, 95)">${location.dimension}</span></p>
            <p>Amount of residents: <span style="color:rgb(230, 230, 95)">${(location.residents.length)}</span></p>
            </ol>`
        elementOrderedList.appendChild(elementDiv);  
    }
      
});


