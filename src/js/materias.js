//MATERIAS: FUNCION PARA SLIDER

export function sliderMaterias(){
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
}
