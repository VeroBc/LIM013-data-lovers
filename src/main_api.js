import { allEpisodesData, allLocationsData } from './data_api.js';


// -----Obtaining a complete array from Api data Episodes----

let episodesList = [];

allEpisodesData().then( arrayResultadoFinal => {
    episodesList = arrayResultadoFinal;
    displayEpisodes();
})


const displayEpisodes = () => {

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
            <p>Amount of Characters: <span style="color:rgb(230, 230, 95)">${(episode.characters.length)}</span></p>
            </ol>`
        elementOrderedList.appendChild(elementDiv);  
    }
}


// -----Obtaining a complete array from Api data Locations----

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


// -----Navigate options in the menu-----

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



// -----Searching function for Episodes-----

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
            <p>Amount of Characters: <span style="color:rgb(230, 230, 95)">${(episode.characters.length)}</span></p>
            </ol>`
        elementOrderedList.appendChild(elementDiv);  
    }
      
});


// -----Searching function for Locations-----

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


