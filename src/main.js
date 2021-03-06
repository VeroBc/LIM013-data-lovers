import { allCharacters, filterBySpecies, filterByStatus, filterByGender, getSpeciesArray, getStatusArray, getGenderArray, order } from './data.js'


// -----Get all and filtered Characters-----

const getListAllCharacters = () => {
    drawResults(allCharacters);
}
document.querySelector('#all').addEventListener('click', getListAllCharacters);

const getListSpecies = (species) => {
    let filteredSpecies = filterBySpecies(species);
    drawResults(filteredSpecies);
}

const speciesArray = getSpeciesArray();
speciesArray.forEach(species => {
    if (document.querySelector('#' + species.toLowerCase()))
        document.querySelector('#' + species.toLowerCase()).addEventListener('click', () => getListSpecies(species));
    // else    
    //     console.log("Esta especie no tiene elemento en HTML: " + species);
})

const getListStatus = (status) => {
    let filteredStatus = filterByStatus(status);
    drawResults(filteredStatus);
}

const statusArray = getStatusArray();
statusArray.forEach(status => {
    if (document.querySelector('#' + status.toLowerCase()))
        document.querySelector('#' + status.toLowerCase()).addEventListener('click', () => getListStatus(status));
    // else    
    //     console.log("Esta especie no tiene elemento en HTML: " + status);
})

const getListGender = (gender) => {
    let filteredGender = filterByGender(gender);
    drawResults(filteredGender);
}

const genderArray = getGenderArray();
genderArray.forEach(gender => {
    if (document.querySelector('#' + gender.toLowerCase()))
        document.querySelector('#' + gender.toLowerCase()).addEventListener('click', () => getListGender(gender));
    // else    
    //     console.log("Esta especie no tiene elemento en HTML: " + gender);
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



// -----PopUp of detailed information of Characters-----

const overlay = document.getElementById('overlay');

const clickToShowCharacterDetail = (characterElement) => {
    const path = characterElement.dataset.image;
    const name = characterElement.dataset.name;
    const species = characterElement.dataset.species;
    const status = characterElement.dataset.status;
    const gender = characterElement.dataset.gender;
    const location = characterElement.dataset.location;
    overlay.classList.add('active');
    document.querySelector('#overlay img').src = path;
    document.querySelector('#overlay .description').innerHTML = `
        <div>
            <div class="character-name">${name}</div>
            <div class="character-description" style="list-style-type:none">
            <p style="color: rgba(112,128,144)">Status: <span style="color:rgba(5, 37, 53, 1)">${status}</span></p>
            <p style="color: rgba(112,128,144)">Species: <span style="color:rgba(5, 37, 53, 1)">${species}</span></p>
            <p style="color: rgba(112,128,144)">Gender: <span style="color:rgba(5, 37, 53, 1)">${gender}</span></p>
            <p style="color: rgba(112,128,144)">Location: <span style="color:rgba(5, 37, 53, 1)">${location}</span></p>
            </div>
        </div>
        `;
};

document.querySelector('#btn-close').addEventListener('click', () => {
    overlay.classList.remove('active');
});
overlay.addEventListener('click', (event) => {
    event.target.id === 'overlay' ? overlay.classList.remove('active') : "";
})



// ----- Display of Characters List on the screen and pagination-----

function drawCharactersPage(index, arrayOfCharacters) {
    let pageOfCharacters = arrayOfCharacters.slice(index, index + 20);

    const elementOrderedList = document.getElementById('listCharacters');
    elementOrderedList.innerHTML = "";

    for (let i = 0; i < pageOfCharacters.length; i++) {

        const result = pageOfCharacters[i];
        const elementDiv = document.createElement("div");
        elementDiv.classList.add("character");
        elementDiv.dataset.image = result.image;
        elementDiv.dataset.name = result.name;
        elementDiv.dataset.status = result.status;
        elementDiv.dataset.species = result.species;
        elementDiv.dataset.gender = result.gender;
        elementDiv.dataset.location = result.location["name"];
        elementDiv.addEventListener('click', () => clickToShowCharacterDetail(elementDiv))
        elementDiv.innerHTML = `
                <img src="${result.image}" alt="${result.name}">
                <h3>${result.name}</h3>`
        elementOrderedList.appendChild(elementDiv);
    }
}

function drawResults(arrayOfCharacters) {

    const buttonsContainer = document.getElementById("buttonsContainer");
    buttonsContainer.innerHTML = "";

    drawCharactersPage(0, arrayOfCharacters);

    for (let pageIndex = 0; pageIndex < arrayOfCharacters.length; pageIndex = pageIndex + 20) {
        const button = document.createElement("button");
        const buttonText = document.createTextNode(parseInt(pageIndex / 20) + 1);
        button.appendChild(buttonText);

        if (pageIndex == 0) button.classList.add('active');

        button.addEventListener('click', function () {
            pageIndex == pageIndex;
            drawCharactersPage(pageIndex, arrayOfCharacters);
            let currentButton = document.querySelector(".buttonsContainer button.active");
            currentButton.classList.remove("active");
            button.classList.add("active");
        });
        buttonsContainer.appendChild(button);
    }
}



// -----Searching function-----

const searchBar = document.getElementById('searchBar');
searchBar.addEventListener('keyup', (e) => {
    const searchString = e.target.value.toLowerCase();
    const filteredCharacters = allCharacters.filter(character => {
        return character.name.toLowerCase().includes(searchString);
    });
    drawResults(filteredCharacters);
});



// -----Responsive menu-----

let mainMenu = document.getElementById("iconMenu");
let charMenu = document.getElementById("all");
let homeMenu = document.getElementById("home");
let episodesMenu = document.getElementById("allEpisodes");
let locationsMenu = document.getElementById("allLocations");
let topnav = document.getElementById("myTopnav");

let contador = 0;

mainMenu.addEventListener("click", function () {
    if (contador == 0) {
        topnav.className = ("topnav close-menu");
        contador = 1;
    } else {
        topnav.classList.remove("close-menu");
        topnav.className = ("topnav open-menu");
        contador = 0;
    }
})

charMenu.addEventListener("click", function () {
    if (contador == 0) {
        topnav.className = ("topnav close-menu");
        contador = 1;
    } else {
        topnav.classList.remove("close-menu");
        topnav.className = ("topnav open-menu");
        contador = 0;
    }
})

homeMenu.addEventListener("click", function () {
    if (contador == 0) {
        topnav.className = ("topnav close-menu");
        contador = 1;
    } else {
        topnav.classList.remove("close-menu");
        topnav.className = ("topnav open-menu");
        contador = 0;
    }
})

episodesMenu.addEventListener("click", function () {
    if (contador == 0) {
        topnav.className = ("topnav close-menu");
        contador = 1;
    } else {
        topnav.classList.remove("close-menu");
        topnav.className = ("topnav open-menu");
        contador = 0;
    }
})

locationsMenu.addEventListener("click", function () {
    if (contador == 0) {
        topnav.className = ("topnav close-menu");
        contador = 1;
    } else {
        topnav.classList.remove("close-menu");
        topnav.className = ("topnav open-menu");
        contador = 0;
    }
})

window.addEventListener('resize', function () {
    if (screen.width > 750) {
        contador = 0;
        topnav.classList.remove("close-menu");
        topnav.className = ("topnav open-menu");
    }
})




// -----Navigate options in the menu-----

function getCharacters(){

    let displayHome = document.getElementById("homeSection");
    displayHome.classList.add("hide");
    
    let displayEpisodes = document.getElementById("episodesSection");
    displayEpisodes.classList.add("hide");
    
    let displayPageLocations = document.getElementById("locationsSection");
    displayPageLocations.classList.add("hide");

    let displaySubheader = document.getElementById("subheaderSection");
    displaySubheader.classList.remove("hide"); 

    let displayCharacters = document.getElementById("charactersSection");
    displayCharacters.classList.remove("hide"); 

}
document.querySelector('#all').addEventListener('click', getCharacters);


function getHome(){

    let displayEpisodes = document.getElementById("episodesSection");
    displayEpisodes.classList.add("hide");
    
    let displayPageLocations = document.getElementById("locationsSection");
    displayPageLocations.classList.add("hide");

    let displaySubheader = document.getElementById("subheaderSection");
    displaySubheader.classList.add("hide"); 

    let displayCharacters = document.getElementById("charactersSection");
    displayCharacters.classList.add("hide"); 

    let displayHome = document.getElementById("homeSection");
    displayHome.classList.remove("hide");

}
document.querySelector('#home').addEventListener('click', getHome);


function getEnter(){

    let displayHome = document.getElementById("homeSection");
    displayHome.classList.add("hide");

    let displayCharacters = document.getElementById("charactersSection");
    displayCharacters.classList.remove("hide"); 

    let displaySubheader = document.getElementById("subheaderSection");
    displaySubheader.classList.remove("hide"); 

}
document.querySelector('#btn').addEventListener('click', getEnter);
document.querySelector('#btn').addEventListener('click', getListAllCharacters);



window.addEventListener('load', () => {	
    document.getElementById('listCharacters').classList.add('images-loaded');	
    const categoriesLinks = document.querySelectorAll('#myTopnav a');	
    
    categoriesLinks.forEach((element) => {	
        element.addEventListener('click', (event) => {	
            event.preventDefault();	
            categoriesLinks.forEach((categoriesLinks) => categoriesLinks.classList.remove('active'));	
            event.target.classList.add('active');	
        });	
    });	

})
