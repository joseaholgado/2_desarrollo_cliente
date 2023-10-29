"use strict";
const botones = document.querySelectorAll(".btn");
const mensaje = document.getElementById("mensaje");

botones.forEach(function (boton) {
    boton.addEventListener("click", function () {
        const opcionJugador = boton.id;
        const opcionComputadora = juego();
        const resu = resultado(opcionJugador, opcionComputadora);
        mostrar(resu, opcionJugador, opcionComputadora);
    });
});
