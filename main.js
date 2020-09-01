
// import {filterStatus, filterSpecies, filterGender, order } from './data.js'

import data from './data/rickandmorty/rickandmorty.js';

const list_element = document.getElementById('charactersList');
const pagination_element = document.getElementById('pagination');

let current_page = 1;
let rows = 20;

function DisplayList(items, wrapper, rows_per_page, page) {
    wrapper.innerHTML = "";
    page--;

    let start = rows_per_page * page;
    let end = start + rows_per_page;
    let paginatedItems = items.slice(start, end);

    for (let i = 0; i < paginatedItems.length; i++) {
        let item = paginatedItems[i];

        let item_element = document.createElement('div');
        item_element
        item_element.classList.add('item');
        item_element.innerHTML = `<div 
        data-species="${item.species}"
        data-gender="${item.gender}"
        data-status="${item.status}"
        >
        <img src="${item.image}" alt="${item.name}">
        <h2 class="characterName">${item.name}</h2>
        </div>`

        wrapper.appendChild(item_element);
    }
}

function SetupPagination(items, wrapper, rows_per_page) {
    wrapper.innerHTML = "";

    let page_count = Math.ceil(items.length / rows_per_page);
    for (let i = 1; i < page_count + 1; i++) {
        let btn = PaginationButton(i, items);
        wrapper.appendChild(btn);
    }
}

function PaginationButton(page, items) {
    let button = document.createElement('button');
    button.innerText = page;

    if (current_page == page) button.classList.add('active');

    button.addEventListener('click', function () {
        current_page = page;
        DisplayList(items, list_element, rows, current_page);

        let current_btn = document.querySelector('.pagination button.active');
        current_btn.classList.remove('active');

        button.classList.add('active');
    });

    return button;
}

DisplayList(data.results, list_element, rows, current_page);
SetupPagination(data.results, pagination_element, rows);



/*Listener para cada imagen*/
const overlay = document.getElementById('overlay');
document.querySelectorAll('.charactersList .item img').forEach((elemento) => {

    elemento.addEventListener('click', () => {
        const ruta = elemento.getAttribute('src');
        const descripcion = elemento.parentNode.dataset.species;

        overlay.classList.add('activo');
        document.querySelector('#overlay img').src = ruta;
        document.querySelector('#overlay .description').innerHTML = descripcion;
    });
});

//Event listener para cerrar

document.querySelector('#btn-cerrar-popup').addEventListener('click', () => {
    overlay.classList.remove('activo');
});

//EventListener del overlay
overlay.addEventListener('click', (evento) => {
    evento.target.id ===  'overlay' ? overlay.classList.remove('activo') : "";
})