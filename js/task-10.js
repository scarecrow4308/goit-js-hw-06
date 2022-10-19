'use strict';

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputEl = document.querySelector('input');
const createBtnEL = document.querySelector('button');
const destroyBtnEl = createBtnEL.nextElementSibling;
const boxesEl = document.querySelector('#boxes');
boxesEl.style =
  'display:flex; width: 100%; align-items: center; flex-wrap: wrap;';

createBtnEL.addEventListener('click', event => {
  let quantitiesOfEl = Number(inputEl.value);
  createBoxesAmount(quantitiesOfEl);
});

destroyBtnEl.addEventListener('click', event => {
  boxesEl.innerHTML = '';
});

function createBoxesAmount(amount) {
  let heigth = 20;
  let width = 20;
  boxesEl.innerHTML = '';
  const str = [];
  for (let i = 1; i <= amount; i += 1) {
    str.push(
      `<div class = "boxes__block" style = "display: block; background-color: ${getRandomHexColor()}; width: ${(width += 10)}px; height: ${(heigth += 10)}px;" ></div>`
    );
  }
  boxesEl.insertAdjacentHTML('beforeend', str.join(''));
}
