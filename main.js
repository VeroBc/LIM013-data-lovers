
// import { filterStatus, filterSpecies, filterGender, order } from './data.js'
import data from "./data/rickandmorty/rickandmorty.js";

const allCharacters = data.results;

const listCharactersElement = document.getElementById("listCharacters");
const paginationElement = document.getElementById('pagination');

let currentPage = 1;
let rows = 20;

/*----------GENERAL FUNCTION FOR SHOW CHARACTERS----------*/
function displayList(characters, wrapper, rowsPerPage, page) {
    wrapper.innerHTML = "";
    page--;

    let start = rowsPerPage * page;
    let end = start + rowsPerPage;
    let paginatedCharacters = characters.slice(start, end);

    for (let i = 0; i < paginatedCharacters.length; i++) {
        let character = paginatedCharacters[i];

        let characterElement = document.createElement('div');
        characterElement.classList.add('character');
        characterElement.innerHTML = `<div class="card-character"
        data-name="${character.name}"
        data-status="${character.status}"
        data-gender="${character.gender}"
        data-species="${character.species}"
        >
        <img src="${character.image}" alt="${character.name}">
        <h2>${character.name}</h2>
        </div>`

        wrapper.appendChild(characterElement);

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
    }
}
/*----------PAGINATION----------*/
function setUpPagination(characters, wrapper, rowsPerPage) {
    wrapper.innerHTML = "";

    let pageCount = Math.ceil(characters.length / rowsPerPage);

    for (let i = 1; i < pageCount + 1; i++) {
        let btn = paginationButton(i, characters);
        wrapper.appendChild(btn);
    }
}

function paginationButton(page, characters) {
    let button = document.createElement('button');
    button.innerText = page;

    if (currentPage == page) button.classList.add('active');
    
    /*------------ACTIVE PAGE BUTTON------------*/
    button.addEventListener('click', function () {
        currentPage = page;
        displayList(characters, listCharactersElement, rows, currentPage);

        let currentBtn = document.querySelector(".pagination button.active");
        currentBtn.classList.remove('active');

        button.classList.add('active');
    });

    return button;
}

displayList(allCharacters, listCharactersElement, rows, currentPage);
setUpPagination(allCharacters, paginationElement, rows);