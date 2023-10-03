"use strict";

function toggleActive(button, href) {
    // JavaScript para cambiar el estado activo/inactivo de los botones
    const buttons = document.querySelectorAll('.menuEjercicio');
    buttons.forEach((btn) => {
      btn.classList.remove('active'); // Eliminar la clase 'active' de todos los botones
    });
    button.classList.add('active'); // Agregar la clase 'active' al botón presionado
  
    // Redirigir a la URL especificada en el atributo href
    window.location.href = href;
  }

  function desplegarMenu(elemento) {
    const menuLinks = elemento.querySelector('.menuLinks');
    menuLinks.classList.toggle('mostrar');
  }