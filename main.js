 
// import {filterStatus, filterSpecies, filterGender, order } from './data.js'

import data from './data/rickandmorty/rickandmorty.js';

const list_element = document.getElementById('charactersList');
const pagination_element = document.getElementById('pagination');

let current_page = 1;
let rows = 20;

function DisplayList (items, wrapper, rows_per_page, page) {
	wrapper.innerHTML = "";
	page--;

	let start = rows_per_page * page;
	let end = start + rows_per_page;
	let paginatedItems = items.slice(start, end);

	for (let i = 0; i < paginatedItems.length; i++) {
		let item = paginatedItems[i];

        let item_element = document.createElement('div');
        item_element.classList.add('item');
        // item_element.innerHTML = `<img src="${item.image}" alt="${item.name}">
        // <h2 class="characterName">${item.name}</h2>
        // <p>${item.species}</p>`;

        item_element.innerHTML = `<img src="${item.image}" alt="${item.name}">
        <h2 class="characterName">${item.name}</h2>
        <a href="#">Show more</a>`
        
		wrapper.appendChild(item_element);
	}
}

function SetupPagination (items, wrapper, rows_per_page) {
	wrapper.innerHTML = "";

	let page_count = Math.ceil(items.length / rows_per_page);
	for (let i = 1; i < page_count + 1; i++) {
		let btn = PaginationButton(i, items);
		wrapper.appendChild(btn);
	}
}

function PaginationButton (page, items) {
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
