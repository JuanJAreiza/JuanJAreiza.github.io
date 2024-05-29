import { barraProgreso } from './home.js';
import { tablasNotas } from './notas.js';
import { sliderMaterias } from './materias.js';
/*import './fonts.js';*/

const menuBtn = document.querySelector('.menu_btn');
const menuBtnIcon = document.querySelector('.menu_btn i');
const dropDownMenu = document.querySelector('.dropdown_menu');

//HEADER: FUNCION PARA EL DESPLIEGUE DEL BURGUER BUTTON
menuBtn.onclick = function () {
     dropDownMenu.classList.toggle('open')
     const isOpen = dropDownMenu.classList.contains('open')

     menuBtnIcon.classList = isOpen
     ? 'fa-solid fa-xmark'
     : 'fa-solid fa-bars'
}

/*MAIN: Programa para saber que función llamar*/

document.addEventListener('DOMContentLoaded', () => {
  if (document.body.id === 'home') {
    barraProgreso();
  } else if (document.body.id === 'notas') {
    tablasNotas();
  } else if (document.body.id === 'materias') {
    sliderMaterias();
  }
});

 /*DILIGENCIAS: Switch para modificar opciones*/
