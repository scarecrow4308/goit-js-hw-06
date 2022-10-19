const formEl = document.querySelector('.login-form');

const formBtnEL = document.querySelector('button');

class UserType {
  constructor(email, pass) {
    this.email = email;
    this.pass = pass;
  }
}

formEl.addEventListener('submit', event => {
  event.preventDefault();
  const { email, password } = event.target.elements;

  if (!email.value || !password.value) {
    return alert('Fill in the gaps!');
  }

  const user = new UserType(email.value, password.value);

  console.log(user);

  formEl.reset();
});
