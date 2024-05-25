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


//NOTAS: FUNCION PARA EL DESPLIEGUE DE TABLAS
document.addEventListener('DOMContentLoaded', () => {
     const mainRows = document.querySelectorAll('.main-row');
 
     mainRows.forEach(mainRow => {
         mainRow.addEventListener('click', () => {

          //LINEA PARA MANTENER ACTIVO EL COLOR EN EL ITEM SELECCIONADO
          mainRow.classList.toggle('active');

          //LINEA PARA DESPLEGAR Y CONTRAER TABLAS
             const nextElement = mainRow.nextElementSibling;
             if (nextElement && nextElement.classList.contains('details-row')) {
                 nextElement.style.display = nextElement.style.display === 'table-row' ? 'none' : 'table-row';
             }
         });
     });
 });