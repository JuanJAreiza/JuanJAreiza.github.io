//HOME: FUNCIÓN DE BARRA DE PROGRESO Y ACTIVACIÓN DE "FALTA POCO"

export function barraProgreso() {
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
  }
