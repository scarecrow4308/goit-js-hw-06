'use strict';

const formEl = document.querySelector('.login-form');

const firstLabelEl = formEl.firstElementChild;
const firstInputEl = firstLabelEl.lastElementChild;

const secondLabelEl = firstLabelEl.nextElementSibling;
const secondInputEl = secondLabelEl.lastElementChild;

const formBtnEL = document.querySelector('button');

class UserType {
  constructor(email, pass) {
    this.email = email;
    this.pass = pass;
  }
}

const arrOfUsers = [];

formEl.addEventListener('submit', event => {
  event.preventDefault();
  if (firstInputEl.value === '' || secondInputEl.value === '') {
    return alert('Fill in the gaps!');
  }

  const { email, password } = event.target.elements;
  const user = new UserType(email.value, password.value);

  arrOfUsers.push(user);
  console.log(arrOfUsers);

  formEl.reset();
});
