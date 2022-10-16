const buttonLogin = document.getElementById('loginButton');
const submitButton = document.getElementById('submit-btn');
const checkbox = document.getElementById('agreement');
const divMain = document.querySelector('.checkbox-rate');
const textArea = document.getElementById('textarea');
const counter = document.getElementById('counter');
const hero = document.querySelector('.form-layout');
const hiddenDiv = document.getElementById('form-data');

function getValue(name) {
  const radio = document.getElementsByName(name);
  for (let index = 0; index < radio.length; index += 1) {
    if (radio[index].checked) {
      return radio[index].value;
    }
  }
}

function checkboxFunction() {
  const checkcheck = document.getElementsByClassName('subject');
  const array = [];
  for (let index = 0; index < checkcheck.length; index += 1) {
    if (checkcheck[index].checked) {
      array.push(checkcheck[index].value);
    }
  }
  return array.join(', ');
}

function loginButton() {
  const email = document.querySelector('#email').value;
  const senha = document.querySelector('#senha').value;

  if (email === 'tryber@teste.com' && senha === '123456') {
    return alert('Olá, Tryber!');
  }

  alert('Email ou senha inválidos.');
}

function generateP() {
  for (let index = 0; index < 7; index += 1) {
    const p = document.createElement('p');
    p.className = 'result';
    hiddenDiv.appendChild(p);
  }
}

function generateCheckBox() {
  for (let index = 1; index < 11; index += 1) {
    const field = document.createElement('div');
    const ui = document.createElement('div');
    const input = document.createElement('input');
    const label = document.createElement('label');
    field.className = 'field';
    ui.className = 'ui radio checkbox';
    label.innerHTML = index;
    input.type = 'radio';
    input.name = 'rate';
    input.value = index;
    ui.appendChild(input);
    ui.appendChild(label);
    field.appendChild(ui);
    divMain.appendChild(field);
  }
}

function toggleButton() {
  if (checkbox.checked) {
    submitButton.disabled = false;
  } else {
    submitButton.disabled = true;
  }
}

function textCounter() {
  let caracteres = textArea.value.length;
  caracteres = 500 - caracteres;
  counter.innerHTML = caracteres;
}

function saveInputs(event) {
  const nome = document.getElementById('input-name').value;
  const sobrenome = document.getElementById('input-lastname').value;
  const email = document.getElementById('input-email').value;
  const selected = document.getElementById('house').value;
  const p = document.getElementsByClassName('result');
  p[0].innerHTML = `Nome: ${nome} ${sobrenome}`;
  p[1].innerHTML = `Email: ${email}`;
  p[2].innerHTML = `Casa: ${selected}`;
  p[3].innerHTML = `Família: ${getValue('family')}`;
  p[4].innerHTML = `Matérias: ${checkboxFunction()}`;
  p[5].innerHTML = `Avaliação: ${getValue('rate')}`;
  p[6].innerHTML = `Observações: ${textArea.value}`;
  hiddenDiv.style.display = 'flex';
  hero.style.display = 'none';
  event.preventDefault();
}

window.onload = () => {
  checkbox.addEventListener('click', toggleButton);
  buttonLogin.addEventListener('click', loginButton);
  textArea.addEventListener('input', textCounter);
  submitButton.addEventListener('click', saveInputs);
  generateCheckBox();
  generateP();
  submitButton.disabled = true;
};
