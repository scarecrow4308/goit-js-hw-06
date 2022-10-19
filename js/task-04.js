'use strict';

const decreaseBtnEl = document.querySelector('#counter').firstElementChild;
const counterEl = decreaseBtnEl.nextElementSibling;
const increaseBtnEl = document.querySelector('#counter').lastElementChild;

let counterValue = 0;

increaseBtnEl.addEventListener('click', event => {
  counterEl.textContent = `${++counterValue}`;
  // counterEl.textContent = `${counterValue++}`;
});

decreaseBtnEl.addEventListener('click', event => {
  counterEl.textContent = `${--counterValue}`;
});
