'use strict';

const categoriesEl = document.querySelector('#categories');
const childrenOfCategoriesEl = categoriesEl.children;


let totalitems = childrenOfCategoriesEl.length;
console.log(`Number of categories: ${totalitems}`);
console.log('');

[...childrenOfCategoriesEl].forEach(el =>{
    const nameOfItems = el.firstElementChild.textContent; 
    const quantityOfTypesOfItems = el.lastElementChild.children.length;
    console.log(`Category: ${nameOfItems}`);
    console.log(`Elements: ${quantityOfTypesOfItems}`);
    console.log('');
} );
