import {pullData} from './data_api.js';

const dataApiEpisodes = (url) => {
    if (!url) 
        url = "https://rickandmortyapi.com/api/episode";
    pullData(url).then(data => {
        getListEpisodes(data);
    }) 
};


const getListEpisodes = (data) => {

    const elementOrderedList = document.getElementById('episodesList');
    elementOrderedList.innerHTML = "";

    for (let i=0; i < data.results.length; i++) {
        
        const result = data.results[i];
        const elementDiv = document.createElement("div");
        elementDiv.classList.add("episode");
        elementDiv.innerHTML = `
            <ol>
            <h4><span style="color:yellow">${result.name}</span></h4>
            <p>Episode: <span style="color:rgb(230, 230, 95)">${result.episode}</span></p>
            <p>Air Date: <span style="color:rgb(230, 230, 95)">${result.air_date}</span></p>
            <p>Percentage of Characters: <span style="color:rgb(230, 230, 95)">${(((result.characters.length)/671)*100).toFixed(2)+" %"}</span></p>
            </ol>`
        elementOrderedList.appendChild(elementDiv);  
    }
    const elementButtonPrevious = document.getElementById('previous');
    elementButtonPrevious.setAttribute("url", data.info.prev);
    const elementButtonNext = document.getElementById('next');
    elementButtonNext.setAttribute("url", data.info.next);
}


const clickButtonPrevious = () => {
    let url = document.getElementById('previous').getAttribute('url');
    dataApiEpisodes(url);
};
document.querySelector('#previous').addEventListener('click', clickButtonPrevious);

const clickButtonNext = () => {
    let url = document.getElementById('next').getAttribute('url');
    dataApiEpisodes(url);
};
document.querySelector('#next').addEventListener('click', clickButtonNext);

const getListAllEpisodes = () => {
    let url = document.getElementById('allEpisodes').getAttribute('url');
    dataApiEpisodes(url);
}
document.querySelector('#allEpisodes').addEventListener('click', getListAllEpisodes);



const dataApiLocations = (url) => {
    if (!url) 
        url = "https://rickandmortyapi.com/api/location";
    pullData(url).then(data => {
        getListLocations(data);
    }) 
};

const getListLocations = (data) => {

    const elementOrderedList = document.getElementById('locationsList');
    elementOrderedList.innerHTML = "";

    for (let i=0; i < data.results.length; i++) {
        
        const result = data.results[i];
        const elementDiv = document.createElement("div");
        elementDiv.classList.add("location");
        elementDiv.innerHTML = `
            <ol>
            <h4><span style="color:yellow">${result.name}</span></h4>
            <p>Type: <span style="color:rgb(230, 230, 95)">${result.type}</span></p>
            <p>Dimension: <span style="color:rgb(230, 230, 95)">${result.dimension}</span></p>
            <p>Amount of residents: <span style="color:rgb(230, 230, 95)">${(result.residents.length)}</span></p>
            </ol>`
        elementOrderedList.appendChild(elementDiv);  
    }
    const elementButtonPrevious = document.getElementById('previousL');
    elementButtonPrevious.setAttribute("url", data.info.prev);
    const elementButtonNext = document.getElementById('nextL');
    elementButtonNext.setAttribute("url", data.info.next);
}

const clickButtonPreviousL = () => {
    let url = document.getElementById('previousL').getAttribute('url');
    dataApiLocations(url);
};
document.querySelector('#previousL').addEventListener('click', clickButtonPreviousL);

const clickButtonNextL = () => {
    let url = document.getElementById('nextL').getAttribute('url');
    dataApiLocations(url);
};
document.querySelector('#nextL').addEventListener('click', clickButtonNextL);

const getListAllLocations = () => {
    let url = document.getElementById('allLocations').getAttribute('url');
    dataApiLocations(url);
}
document.querySelector('#allLocations').addEventListener('click', getListAllLocations);



function getEpisodes(){

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





const dataApi = (url) => {
    if (!url) 
        url = "https://rickandmortyapi.com/api/episode";
    pullData(url).then(data => {
        getList(data);
    }) 
};
dataApi();

// const getList = (data) => {

//     const result =  data.results;
    
//     const filter = result.filter(episode => episode = "S02E02");
 
//     console.log(filter);
// }

function isEpisode (element, index, array) {
    return episode == "S01E08";
  }
  
  const result =  data.results;
  const resultado = result.filter(isEpisode);
  
  console.log(resultado);



const searchBar = document.getElementById('searchBar');
searchBar.addEventListener('keyup', (e) =>{
   const searchString = e.target.value.toLowerCase();
   const filteredCharacters = allCharacters.filter( character => {
        return character.name.toLowerCase().includes(searchString);
    });
    drawResults(filteredCharacters);
});
