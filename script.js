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

/* Requisito 18 */
let agreementCheckbox = document.getElementById('agreement');
let sendButton = document.getElementById('submit-btn');

function validateFormSubmit (){
  if (agreementCheckbox.checked == true) {
    sendButton.disabled = false;
  } else {
    sendButton.disabled = true;
  }
}

/* referencia requisito 18: https://www.w3schools.com/howto/howto_js_display_checkbox_text.asp
            https://www.w3schools.com/jsref/event_onchange.asp */