//NOTAS: FUNCION PARA EL DESPLIEGUE DE TABLAS

export function tablasNotas() {
    const mainRows = document.querySelectorAll('.main-row');
  
    mainRows.forEach(mainRow => {
      mainRow.addEventListener('click', () => {
        // LINEA PARA MANTENER ACTIVO EL COLOR EN EL ITEM SELECCIONADO
        mainRow.classList.toggle('active');
  
        // LINEA PARA DESPLEGAR Y CONTRAER TABLAS
        const nextElement = mainRow.nextElementSibling;
        if (nextElement && nextElement.classList.contains('details-row')) {
          nextElement.style.display = nextElement.style.display === 'table-row' ? 'none' : 'table-row';
        }
      });
    });
  }
