'use strict';

const inputAreaEl = document.querySelector('#name-input');
const nameEl = document.querySelector('#name-output');

inputAreaEl.addEventListener('input', (event) =>{
nameEl.textContent = event.target.value;

if(event.target.value == 0){
    nameEl.textContent = 'Anonymous';
}

});
