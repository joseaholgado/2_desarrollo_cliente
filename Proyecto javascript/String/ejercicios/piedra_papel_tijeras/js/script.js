"use strict";
// Selecciona todos los botones con la clase "btn"
const botones = document.querySelectorAll(".btn");
// Obtiene el elemento con el ID "mensaje"
const mensaje = document.getElementById("mensaje");

// Itera sobre cada botón y agrega un listener de eventos al hacer clic
botones.forEach(function (boton) {
    boton.addEventListener("click", function () {
        // Obtiene la opción seleccionada por el jugador a partir del ID del botón
        const opcionJugador = boton.id;
        // Genera la opción aleatoria de la computadora
        const opcionComputadora = juego();
        // Obtiene el resultado del juego
        const resu = resultado(opcionJugador, opcionComputadora);
        // Muestra el resultado en la interfaz
        mostrar(resu, opcionJugador, opcionComputadora);
    });
});
