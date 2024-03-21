"use strict";

// Función para cambiar al slide anterior o siguiente
function cambiarSlide(n) {
    slideIndex += n; // Actualiza el índice del slide sumándole 'n'
    mostrarSlide(slideIndex); // Muestra el slide correspondiente al nuevo índice
}