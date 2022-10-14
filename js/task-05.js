'use strict';

const inputAreaEl = document.querySelector('#name-input');
const nameEl = document.querySelector('#name-output');

inputAreaEl.addEventListener('input', event => {
  const { target } = event;
  nameEl.textContent = target.value;

  if (!target.value) {
    nameEl.textContent = 'Anonymous';
  }
});
