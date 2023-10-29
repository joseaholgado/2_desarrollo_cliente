"use strict";
// Función para mostrar un slide específico
function mostrarSlide(n) {
    const slides = document.querySelectorAll(".slide");
    const botones = document.querySelectorAll(".boton-anterior, .boton-siguiente");

    if (n >= slides.length) {
        slideIndex = 0; // Si el índice es mayor o igual a la cantidad de slides, se reinicia a 0
    }

    if (n < 0) {
        slideIndex = slides.length - 1; // Si el índice es menor que 0, se establece al último slide
    }

    // Oculta todos los slides
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    // Muestra el slide correspondiente al índice actual
    slides[slideIndex].style.display = "block";

    // Habilita los botones para mostrar el slide anterior o siguiente
    botones.forEach(boton => {
        boton.disabled = false;
    });
}
