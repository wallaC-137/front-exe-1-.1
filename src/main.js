import {
  isEmail,
  isLocale,
  isMobilePhone,
  isPostalCode,
  isNumeric,
} from 'validator';

import './style.css'

const getInputTxt = document.querySelector('#texto');
const getBtn = document.querySelector('#btn-check');
const getValidador = document.querySelector('#id-validator');
const getH2 = document.querySelector('h2');

getBtn.addEventListener('click', async (event) => {
  event.preventDefault();

  const texto = getInputTxt.value;
  getH2.innerHTML = '...';
  const frase = `<span style="color:rgb(255, 0, 0);">Parabéns!</span> ${texto}`;

  if (getValidador.value === 'email') {
   isEmail(texto) && (getH2.innerHTML = `${frase} é um email válido`);
  } 
  if (getValidador.value === 'local') {
    isLocale(texto) && (getH2.innerHTML = `${frase} é um local válido`);
  }
  if (getValidador.value === 'cel') {
    isMobilePhone(texto, ['pt-BR']) && (getH2.innerHTML = `${frase} é um número válido`);
  }
  if (getValidador.value === 'cep') {
    isPostalCode(texto, 'any')? (getH2.innerHTML = `${frase} é um CEP válido`) : (getH2.innerHTML =
       ` Utilize o padrão <span style="color:rgb(255, 0, 0);">XXXXX-XXX</span>`);
  }
  if (getValidador.value === 'numeros') {
    isNumeric(texto, ['pt-BR']) && (getH2.innerHTML = `${frase} possui apenas números válido`);
  }
  if(getH2.innerHTML === '...') {
    getH2.innerHTML = `<span style="color:rgb(255, 0, 0);">Não é um valor válido</span>`;
  }
  getInputTxt.value = '';
});
