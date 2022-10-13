'use strict';

const inputEl = document.querySelector('#validation-input');
inputEl.addEventListener('blur', (event)=>{
   if(event.target.value.length === 6){
    // event.target.style.border = '2px solid #4caf50';
    inputEl.classList.remove('invalid');
    inputEl.classList.add('valid');
    return;
   }
//    event.target.style.border = '2px solid #f44336'
    inputEl.classList.remove('valid');
    inputEl.classList.add('invalid');
});
    