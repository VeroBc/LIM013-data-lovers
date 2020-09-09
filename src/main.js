import {filterStatus, filterSpecies, filterGender, order } from './data.js'

import data from './data/rickandmorty/rickandmorty.js';

const allCharacters = data.results;


const getListAllCharacters = () => {
    
    drawResults(allCharacters);
 
}
document.querySelector('#all').addEventListener('click', getListAllCharacters);


const getListSpeciesHuman = () => {
    
    let speciesHuman = [];
    speciesHuman = filterSpecies.human(allCharacters);

    drawResults(speciesHuman);
    
}
document.querySelector('#human').addEventListener('click', getListSpeciesHuman);



const getListSpeciesAlien = () => {

    let speciesAlien = [];
    speciesAlien = filterSpecies.alien(allCharacters);
    drawResults(speciesAlien);
    
}
document.querySelector('#alien').addEventListener('click', getListSpeciesAlien);



const getListSpeciesHumanoid = () => {

    let speciesHumanoid = [];
    speciesHumanoid = filterSpecies.humanoid(allCharacters);
    drawResults(speciesHumanoid);
    
}
document.querySelector('#humanoid').addEventListener('click', getListSpeciesHumanoid);


const getListSpeciesAnimal = () => {

    let specieAnimal = [];
    specieAnimal = filterSpecies.animal(allCharacters);
    drawResults(specieAnimal);
    
}
document.querySelector('#animal').addEventListener('click', getListSpeciesAnimal);



const getListSpeciesMytholog = () => {

    let specieMytholog = [];
    specieMytholog = filterSpecies.mytholog(allCharacters);
    drawResults(specieMytholog);
    
}
document.querySelector('#mytholog').addEventListener('click', getListSpeciesMytholog);



const getListSpeciesRobot = () => {

    let specieRobot = [];
    specieRobot = filterSpecies.robot(allCharacters);
    drawResults(specieRobot);
    
}
document.querySelector('#robot').addEventListener('click', getListSpeciesRobot);



const getListSpeciesUnknown = () => {

    let specieUnknown = [];
    specieUnknown = filterSpecies.unknown(allCharacters);
    drawResults(specieUnknown);
    
}
document.querySelector('#unknownSpecie').addEventListener('click', getListSpeciesUnknown);


const getListSpeciesCronenberg = () => {

    let specieCronenberg = [];
    specieCronenberg = filterSpecies.cronenberg(allCharacters);
    drawResults(specieCronenberg);
    
}
document.querySelector('#cronenberg').addEventListener('click', getListSpeciesCronenberg);


const getListSpeciesPoopybutthole = () => {

    let speciePoopybutthole = [];
    speciePoopybutthole = filterSpecies.poopybutthole(allCharacters);
    drawResults(speciePoopybutthole);
    
}
document.querySelector('#poopybutthole').addEventListener('click', getListSpeciesPoopybutthole);


const getListSpeciesDisease = () => {

    let specieDisease = [];
    specieDisease = filterSpecies.disease(allCharacters);
    drawResults(specieDisease);
    
}
document.querySelector('#disease').addEventListener('click', getListSpeciesDisease);



const getListStatusAlive = () => {

    let statusAlive = [];
    statusAlive = filterStatus.alive(allCharacters);
    drawResults(statusAlive);
    
}
document.querySelector('#alive').addEventListener('click', getListStatusAlive);


const getListStatusDead = () => {  

    let statusDead = [];
    statusDead = filterStatus.dead(allCharacters);
    drawResults(statusDead);
    
}
document.querySelector('#dead').addEventListener('click', getListStatusDead);


const getListStatusUnknown = () => {

    let statusUnknown = [];
    statusUnknown = filterStatus.unknown(allCharacters);
    drawResults(statusUnknown);
    
}
document.querySelector('#unknown').addEventListener('click', getListStatusUnknown);


const getListGenderMale = () => {

    let genderMale = [];
    genderMale = filterGender.male(allCharacters);
    drawResults(genderMale);
    
}
document.querySelector('#male').addEventListener('click', getListGenderMale);


const getListGenderFemale = () => {

    let genderFemale = [];
    genderFemale = filterGender.female(allCharacters);
    drawResults(genderFemale);
    
}
document.querySelector('#female').addEventListener('click', getListGenderFemale);


const getListGenderGenderless = () => {

    let genderGenderless = [];
    genderGenderless = filterGender.genderless(allCharacters);
    drawResults(genderGenderless);
    
}
document.querySelector('#genderless').addEventListener('click', getListGenderGenderless);


const getListGenderUnknown = () => {

    let genderUnknown = [];
    genderUnknown = filterGender.unknown(allCharacters);
    drawResults(genderUnknown);
    
}
document.querySelector('#unknownGender').addEventListener('click', getListGenderUnknown);


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




// const overlay = document.getElementById('overlay');

// const clickToShowCharacterDetail = (characterElement) => {
//     const path =    characterElement.getAttribute('src');
//     const name =    characterElement.dataset.name;
//     const species = characterElement.dataset.species;
//     const gender =  characterElement.dataset.gender;
//     const status =  characterElement.dataset.status;
//     overlay.classList.add('active');
//     document.querySelector('#overlay img').src = path;
//     document.querySelector('#overlay .description').innerHTML = `
//         <div>
//             <div class="character-name">${name}</div>
//             <div>Status: ${status}</div>
//             <div>Gender: ${gender}</div>
//             <div>Specie: ${species}</div>
//         </div>
//      `;
// };


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
                <span>${result.name}</span>`
                // <h4>${result.species}</h4>
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



// function clickHambMenu() {
//     let menuBar = document.getElementById("myTopnav");
//     if (menuBar.className === "topnav") {
//       menuBar.className += " responsive";
//     } else {
//      menuBar.className = "topnav";
//     }
//   }
  
// document.querySelector('#iconMenu').addEventListener('click', clickHambMenu);



const searchBar = document.getElementById('searchBar');
let hpcharacters = [];
hpcharacters = data.results;

searchBar.addEventListener('keyup', (e) =>{
   const searchString = e.target.value.toLowerCase();
   const filteredCharacters = hpcharacters.filter( character => {
        return character.name.toLowerCase().includes(searchString);
    });
    drawResults(filteredCharacters);
});

/* Menu responsive */
let boton = document.getElementById("iconMenu");
let topnav = document.getElementById("myTopnav");
let contador = 0;

boton.addEventListener("click", function() {
    if(contador == 0) {
        topnav.className = ("topnav close-menu");
        contador = 1;
    }else {
        topnav.classList.remove("close-menu");
        topnav.className= ("topnav open-menu");
        contador = 0;
    }
})

window.addEventListener('resize', function(){
    if(screen.width > 750) {
        contador = 0;
        topnav.classList.remove("close-menu");
        topnav.className= ("topnav open-menu");
    }
})

/*CRECE LETRA ACTIVO*/
window.addEventListener('load', () => {
    const menuLinks = document.querySelectorAll('#myTopnav a');

    menuLinks.forEach((element) => {
        element.addEventListener('click', (event) => {
            event.preventDefault();
            menuLinks.forEach((menuLinks) => menuLinks.classList.remove('active'));
            event.target.classList.add('active');
        });
    });

})

/*----SCROLL------*/
const speciesBtn = document.getElementById('species');
const genderBtn = document.getElementById('gender');
const scrollableSpecies = document.getElementById('scroll');

window.addEventListener('resize', function(){
    if(screen.width > 750) {
        function scrollFunction() {
            scrollableSpecies.style.display = 'flex'
        }
        
        function hideScroll() {
            scrollableSpecies.style.display = 'none'
        }
        
        speciesBtn.addEventListener('click', scrollFunction);
        genderBtn.addEventListener('click', hideScroll)
    }
})
