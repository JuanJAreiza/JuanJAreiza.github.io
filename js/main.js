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


 //MATERIAS: FUNCION PARA EL DESPLIEGUE DE TABLAS
 // scripts.js
 const slides = document.querySelectorAll('.slide');
 const dots = document.querySelectorAll('.dot');
 const prevButton = document.querySelector('.prev');
 const nextButton = document.querySelector('.next');
 
 let currentIndex = 0;
 let intervalId;
 
 function showSlide(index) {
   slides.forEach(slide => slide.style.display = 'none');
   dots.forEach(dot => dot.classList.remove('active'));
 
   slides[index].style.display = 'block';
   dots[index].classList.add('active');
 }
 
 function nextSlide() {
   currentIndex = (currentIndex + 1) % slides.length;
   showSlide(currentIndex);
   resetInterval();
 }
 
 function prevSlide() {
   currentIndex = (currentIndex - 1 + slides.length) % slides.length;
   showSlide(currentIndex);
   resetInterval();
 }
 
 function resetInterval() {
   clearInterval(intervalId);
   intervalId = setInterval(nextSlide, 4000);
 }
 
 // Initial setup
 showSlide(currentIndex);
 resetInterval();
 
 prevButton.addEventListener('click', prevSlide);
 nextButton.addEventListener('click', nextSlide);
 
 dots.forEach((dot, index) => {
   dot.addEventListener('click', () => {
     currentIndex = index;
     showSlide(currentIndex);
     resetInterval();
   });
 });
 

/*
 const slider = document.querySelector('.slider');
 const images = document.querySelectorAll('.slider img');
 const dots = document.querySelectorAll('.dot');
 const prevButton = document.querySelector('.prev');
 const nextButton = document.querySelector('.next');
 
 let index = 0;
 let intervalTime = 5000;
 let slideInterval;
 
 function showSlide(n) {
     index = (n + images.length) % images.length;
     slider.style.transform = `translateX(${-index * 100}%)`;
     updateDots();
     resetInterval();
 }
 
 function nextSlide() {
     showSlide(index + 1);
 }
 
 function prevSlide() {
     showSlide(index - 1);
 }
 
 function updateDots() {
     dots.forEach(dot => dot.classList.remove('active'));
     dots[index].classList.add('active');
 }
 
 dots.forEach((dot, i) => {
     dot.addEventListener('click', () => {
         showSlide(i);
     });
 });
 
 prevButton.addEventListener('click', prevSlide);
 nextButton.addEventListener('click', nextSlide);
 
 function resetInterval() {
     clearInterval(slideInterval);
     slideInterval = setInterval(nextSlide, intervalTime);
 }
 
 resetInterval();
 */
 
 