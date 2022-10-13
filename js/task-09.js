'use strict';

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6,0)}`;
}

const bodyEl = document.querySelector('body');
const changeCOlorBtnEL = document.querySelector('.change-color')
const typeOfColor = document.querySelector('.color');

changeCOlorBtnEL.addEventListener('click', event =>{
  const color = getRandomHexColor();
  bodyEl.style.backgroundColor = color;
  typeOfColor.textContent = color;
});