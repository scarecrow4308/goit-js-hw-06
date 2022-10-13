'use strict';

const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsEl = document.querySelector('#ingredients');

const ingredientsItems = ingredients.forEach(el =>{
  const itemEl = document.createElement('li');
 itemEl.classList.add('item');
//  const itemTitleEl = document.createElement('span');
//  itemTitleEl.textContent = el;
//  itemEl.append(itemTitleEl);
itemEl.textContent = el;
ingredientsEl.append(itemEl);
})
