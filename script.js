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
const agreementCheckbox = document.getElementById('agreement');
const sendButton = document.getElementById('submit-btn');

function validateFormSubmit() {
  if (agreementCheckbox.checked === true) {
    sendButton.disabled = false;
  } else {
    sendButton.disabled = true;
  }
}
validateFormSubmit();

/* referencia requisito 18: https://www.w3schools.com/howto/howto_js_display_checkbox_text.asp
            https://www.w3schools.com/jsref/event_onchange.asp */
/* Requisito 20: Usei como referência o seguinte link: https://stackoverflow.com/questions/14086398/count-textarea-characters e a documentação sobre parseInt():https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/parseInt */
function textareaLengthCheck() {
  const textArea = document.querySelector('#textarea');
  const counter = document.querySelector('#counter');
  const numberChar = parseInt(counter.innerText, 10);
  textArea.addEventListener('input', () => {
    counter.innerText = numberChar - textArea.value.length + ' caracteres';
  });
}
textareaLengthCheck();
