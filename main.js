import { filterStatus, filterSpecies, filterGender, order } from './data.js'
import data from './data/rickandmorty/rickandmorty.js';

const allCharacters = data.results;

const elementOrderedList = document.getElementById('listCharacters')
const buttonsContainer = document.getElementById('buttonsContainer');
// 
let currentPage = 1;
let rows = 20;

/*----------GENERAL FUNCTION TO DIPSLAY CHARACTERS----------*/
function displayList(arrayData, rowsPerPage, page) {
    elementOrderedList.innerHTML = "";
    page--;
    // 
    let start = rowsPerPage * page;
    let end = start + rowsPerPage;
    let paginatedCharacters = arrayData.slice(start, end);

    for (let i = 0; i < paginatedCharacters.length; i++) {
        // 
        let result = paginatedCharacters[i];

        let liElement = document.createElement('div');
        liElement.classList.add('character');
        liElement.innerHTML = `<div class="card-character"
        data-name="${result.name}"
        data-status="${result.status}"
        data-gender="${result.gender}"
        data-species="${result.species}"
        >
        <img src="${result.image}" alt="${result.name}">
        <h2>${result.name}</h2>
        </div>`

        elementOrderedList.appendChild(liElement);

        
    }
}

/*----------PAGINATION----------*/
function setUpPagination(arrayData, rowsPerPage) {
    buttonsContainer.innerHTML = "";

    let pageCount = Math.ceil(arrayData.length / rowsPerPage);

    for (let i = 1; i < pageCount + 1; i++) {
        let btn = paginationButton(i, arrayData);
        buttonsContainer.appendChild(btn);
    }
}

displayList(allCharacters, rows, currentPage);
setUpPagination(allCharacters, rows);








/*------------ACTIVE PAGE BUTTON------------*/
function paginationButton(page, arrayData) {
    let button = document.createElement('button');
    button.innerText = page;

    if (currentPage == page) button.classList.add('active');


    button.addEventListener('click', function () {
        currentPage = page;
        displayList(arrayData, rows, currentPage);

        let currentBtn = document.querySelector(".pagination button.active");
        currentBtn.classList.remove('active');

        button.classList.add('active');
    });

    return button;
}



/*----------OVERLAY----------*/
const overlay = document.getElementById('overlay');
document.querySelectorAll('.listCharacters .character img').forEach((element) => {
    element.addEventListener('click', () => {
        const path = element.getAttribute('src');
        const nameDescription = element.parentNode.dataset.name;
        const specieDescription = element.parentNode.dataset.species;
        const genderDescription = element.parentNode.dataset.gender;
        const statusDescription = element.parentNode.dataset.status;

        overlay.classList.add('active');
        document.querySelector('#overlay img').src = path;
        document.querySelector('#overlay .description').innerHTML = `<div>
                <div class="character-name">${nameDescription}</div>
                <div>Status: ${statusDescription}</div>
                <div>Gender: ${genderDescription}</div>
                <div>Specie: ${specieDescription}</div>
                </div>`;
    });
});

document.querySelector('#btn-close').addEventListener('click', () => {
    overlay.classList.remove('active');
});

overlay.addEventListener('click', (event) => {
    event.target.id === 'overlay' ? overlay.classList.remove('active') : "";
})



// // GENERAL DISPLAYED CHARACTERS FUNCTION
// function drawResults(arrayData) {

//     const buttonsContainer = document.getElementById("buttonsContainer");
//     buttonsContainer.innerHTML = "";

//     let page = [];
//     page = arrayData.slice(0, 20);

//     const elementOrderedList = document.getElementById('listCharacters');
//     elementOrderedList.innerHTML = "";

//     for (let i = 0; i < page.length; i++) {

//         const result = page[i];
//         const liElement = document.createElement("div");
//         liElement.classList.add("character");
//         liElement.innerHTML = `<div class="card-character"
//         data-name="${result.name}"
//         data-status="${result.status}"
//         data-gender="${result.gender}"
//         data-species="${result.species}"
//         >
//         <img src="${result.image}" alt="${result.name}">
//         <h2>${result.name}</h2>
//         </div>`

//         elementOrderedList.appendChild(liElement);
//     }

//     for (let i = 0; i < arrayData.length; i = i + 20) {

//         const button = document.createElement("button");
//         const buttonText = document.createTextNode(parseInt(i / 20) + 1);
//         button.appendChild(buttonText);
//         buttonsContainer.appendChild(button);

//         function getPageCharacters() {

//             button.addEventListener('click', function () {

//                 let page = [];
//                 page = arrayData.slice(i, i + 20);

//                 const result = page[i];
//                 const characterElement = document.createElement("div");
//                 characterElement.classList.add("character");
//                 characterElement.innerHTML = `<div class="card-character"
//                 data-name="${result.name}"
//                 data-status="${result.status}"
//                 data-gender="${result.gender}"
//                 data-species="${result.species}"
//                 >
//                 <img src="${result.image}" alt="${result.name}">
//                 <h2>${result.name}</h2>
//                 </div>`

//                 elementOrderedList.appendChild(characterElement);


//             });
//         }
//         getPageCharacters();
//     }
// }


// FILTERS

const getListAllCharacters = () => {

    //     drawResults(allCharacters);
    displayList(allCharacters, rows, currentPage);
    setUpPagination(allCharacters, rows);

}
document.querySelector('#all').addEventListener('click', getListAllCharacters);


const getListSpeciesHuman = () => {

    let speciesHuman = [];
    speciesHuman = filterSpecies.human(allCharacters);

    // drawResults(speciesHuman);
    displayList(speciesHuman, rows, currentPage);
    setUpPagination(speciesHuman, rows);
}
document.querySelector('#human').addEventListener('click', getListSpeciesHuman);



const getListSpeciesAlien = () => {

    let speciesAlien = [];
    speciesAlien = filterSpecies.alien(allCharacters);
    // drawResults(speciesAlien);
    displayList(speciesAlien, rows, currentPage);
    setUpPagination(speciesAlien, rows);
}
document.querySelector('#alien').addEventListener('click', getListSpeciesAlien);



const getListSpeciesHumanoid = () => {

    let speciesHumanoid = [];
    speciesHumanoid = filterSpecies.humanoid(allCharacters);
    // drawResults(speciesHumanoid);
    displayList(speciesHumanoid, rows, currentPage);
    setUpPagination(speciesHumanoid, rows);

}
document.querySelector('#humanoid').addEventListener('click', getListSpeciesHumanoid);


const getListSpeciesAnimal = () => {

    let specieAnimal = [];
    specieAnimal = filterSpecies.animal(allCharacters);
    // drawResults(specieAnimal);
    displayList(specieAnimal, rows, currentPage);
    setUpPagination(specieAnimal, rows);

}
document.querySelector('#animal').addEventListener('click', getListSpeciesAnimal);



const getListSpeciesMytholog = () => {

    let specieMytholog = [];
    specieMytholog = filterSpecies.mytholog(allCharacters);
    // drawResults(specieMytholog);
    displayList(specieMytholog, rows, currentPage);
    setUpPagination(specieMytholog, rows);

}
document.querySelector('#mytholog').addEventListener('click', getListSpeciesMytholog);



const getListSpeciesRobot = () => {

    let specieRobot = [];
    specieRobot = filterSpecies.robot(allCharacters);
    // drawResults(specieRobot);
    displayList(specieRobot, rows, currentPage);
    setUpPagination(specieRobot, rows);
}
document.querySelector('#robot').addEventListener('click', getListSpeciesRobot);



const getListSpeciesUnknown = () => {

    let specieUnknown = [];
    specieUnknown = filterSpecies.unknown(allCharacters);
    // drawResults(specieUnknown);
    displayList(specieUnknown, rows, currentPage);
    setUpPagination(specieUnknown, rows);
}
document.querySelector('#unknownSpecie').addEventListener('click', getListSpeciesUnknown);


const getListSpeciesCronenberg = () => {

    let specieCronenberg = [];
    specieCronenberg = filterSpecies.cronenberg(allCharacters);
    // drawResults(specieCronenberg);
    displayList(specieCronenberg, rows, currentPage);
    setUpPagination(specieCronenberg, rows);

}
document.querySelector('#cronenberg').addEventListener('click', getListSpeciesCronenberg);


const getListSpeciesPoopybutthole = () => {

    let speciePoopybutthole = [];
    speciePoopybutthole = filterSpecies.poopybutthole(allCharacters);
    // drawResults(speciePoopybutthole);
    displayList(speciePoopybutthole, rows, currentPage);
    setUpPagination(speciePoopybutthole, rows);

}
document.querySelector('#poopybutthole').addEventListener('click', getListSpeciesPoopybutthole);


const getListSpeciesDisease = () => {

    let specieDisease = [];
    specieDisease = filterSpecies.disease(allCharacters);
    // drawResults(specieDisease);
    displayList(specieDisease, rows, currentPage);
    setUpPagination(specieDisease, rows);

}
document.querySelector('#disease').addEventListener('click', getListSpeciesDisease);



const getListStatusAlive = () => {

    let statusAlive = [];
    statusAlive = filterStatus.alive(allCharacters);
    // drawResults(statusAlive);
    displayList(statusAlive, rows, currentPage);
    setUpPagination(statusAlive, rows);

}
document.querySelector('#alive').addEventListener('click', getListStatusAlive);


const getListStatusDead = () => {

    let statusDead = [];
    statusDead = filterStatus.dead(allCharacters);
    // drawResults(statusDead);
    displayList(statusDead, rows, currentPage);
    setUpPagination(statusDead, rows);

}
document.querySelector('#dead').addEventListener('click', getListStatusDead);


const getListStatusUnknown = () => {

    let statusUnknown = [];
    statusUnknown = filterStatus.unknown(allCharacters);
    // drawResults(statusUnknown);
    displayList(statusUnknown, rows, currentPage);
    setUpPagination(statusUnknown, rows);

}
document.querySelector('#unknown').addEventListener('click', getListStatusUnknown);


const getListGenderMale = () => {

    let genderMale = [];
    genderMale = filterGender.male(allCharacters);
    // drawResults(genderMale);
    displayList(genderMale, rows, currentPage);
    setUpPagination(genderMale, rows);

}
document.querySelector('#male').addEventListener('click', getListGenderMale);


const getListGenderFemale = () => {

    let genderFemale = [];
    genderFemale = filterGender.female(allCharacters);
    // drawResults(genderFemale);
    displayList(genderFemale, rows, currentPage);
    setUpPagination(genderFemale, rows);

}
document.querySelector('#female').addEventListener('click', getListGenderFemale);


const getListGenderGenderless = () => {

    let genderGenderless = [];
    genderGenderless = filterGender.genderless(allCharacters);
    // drawResults(genderGenderless);
    displayList(genderGenderless, rows, currentPage);
    setUpPagination(genderGenderless, rows);

}
document.querySelector('#genderless').addEventListener('click', getListGenderGenderless);


const getListGenderUnknown = () => {

    let genderUnknown = [];
    genderUnknown = filterGender.unknown(allCharacters);
    // drawResults(genderUnknown);
    displayList(genderUnknown, rows, currentPage);
    setUpPagination(genderUnknown, rows);

}
document.querySelector('#unknownGender').addEventListener('click', getListGenderUnknown);


const getListAtoZ = () => {

    let sortedAscending = [];
    sortedAscending = order.ascending(allCharacters);
    // drawResults(sortedAscending);
    displayList(sortedAscending, rows, currentPage);
    setUpPagination(sortedAscending, rows);

}
document.querySelector('#orderAtoZ').addEventListener('click', getListAtoZ);


const getListZtoA = () => {

    let sortedDescending = [];
    sortedDescending = order.descending(allCharacters);
    // drawResults(sortedDescending);
    displayList(sortedDescending, rows, currentPage);
    setUpPagination(sortedDescending, rows);


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

function clickHambMenu() {
    let menuBar = document.getElementById("myTopnav");
    if (menuBar.className === "topnav") {
        menuBar.className += " responsive";
    } else {
        menuBar.className = "topnav";
    }
}

document.querySelector('#iconMenu').addEventListener('click', clickHambMenu);

