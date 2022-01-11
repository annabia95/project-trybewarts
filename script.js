/* Requsito 3  */
const inputEmail = document.querySelector('.input-email');
const inputPassword = document.querySelector('.input-password');
const btnEnter = document.querySelector('.btn-enter');

function validateLogin(event) {
  event.preventDefault();
  if (inputEmail.value === 'tryber@teste.com' && inputPassword.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}
btnEnter.addEventListener('click', validateLogin);
