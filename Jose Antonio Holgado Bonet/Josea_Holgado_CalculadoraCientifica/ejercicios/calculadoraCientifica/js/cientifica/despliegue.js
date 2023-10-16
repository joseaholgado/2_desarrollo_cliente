"use strict";

// Obtén una referencia al elemento select
const Calculadora = document.getElementById("tipo-calculculadora"); // Corrige la identificación

// Escucha el evento de cambio en el selector
Calculadora.addEventListener("change", function () {
    const valorSeleccionado = Calculadora.value;
    const botones = document.querySelectorAll(".boton.operador.hidden"); // Corrige la selección de elementos

    if (valorSeleccionado === "cientifica") {
        // Si se selecciona "científica," muestra los botones Sen, Cos y Tan
        botones.forEach((boton) => {
            boton.classList.remove("hidden");
        });
    } else {
        // De lo contrario, oculta los botones Sen, Cos y Tan
        botones.forEach((boton) => {
            boton.classList.add("hidden");
        });
    }
    
});
