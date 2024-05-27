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


 document.addEventListener("DOMContentLoaded", function() {
    var progressBar = document.getElementById('progress-bar');
    var progressText = document.getElementById('progress-text');
    var faltaPoco = document.getElementById('falta-poco');
    var progressContainer = document.getElementById('progress-container');

    if (progressBar && progressText) {
        setTimeout(function() {
            progressBar.style.width = '80%';
            progressText.innerText = '80%';
        }, 100); // Delay
    } else {
        console.error('progressBar or progressText is null');
    }

    if (progressContainer && faltaPoco) {
        progressContainer.addEventListener('mouseover', () => {
            faltaPoco.style.fontSize = '1.1em';
            faltaPoco.style.color = 'var(--verde)';
        });

        progressContainer.addEventListener('mouseout', () => {
            faltaPoco.style.fontSize = '';
            faltaPoco.style.color = '';
        });
    } else {
        console.error('progressContainer or faltaPoco is null');
    }
});


//HOME: Barra de progreso
/*
document.addEventListener("DOMContentLoaded", function() {
    var progressBar = document.getElementById('progress-bar');
    var progressText = document.getElementById('progress-text');
    setTimeout(function() {
      progressBar.style.width = '80%';
      progressText.innerText = '80%';
    }, 100); // Delay
  });

//HOME: Cambiar el estilo del texto "¡Falta poco!" en función del hover
const faltaPoco = document.getElementById('falta-poco');
const progressContainer = document.getElementById('progress-container');

progressContainer.addEventListener('mouseover', () => {
  faltaPoco.style.fontSize = '1.1em';
  faltaPoco.style.color = 'var(--verde)';
});

progressContainer.addEventListener('mouseout', () => {
  faltaPoco.style.fontSize = '';
  faltaPoco.style.color = '';
});



*/
 //MATERIAS: FUNCION PARA EL DESPLIEGUE DE TABLAS
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
 
 // Debe empezar así
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

 
 