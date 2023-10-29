"use strict";
const mensaje = document.getElementById("mensaje");
const btn = document.getElementById("btn");
const porcentajes = document.querySelectorAll(".porcentaje");

btn.addEventListener("click", function () {
    const valoresPorcentajes = Array.from(porcentajes).map(function (porcentaje) {
        return parseFloat(porcentaje.value) / 100; // Convertir a porcentaje
    });

    const resultados = generarQuiniela(valoresPorcentajes);
    mensaje.innerHTML = resultados;
});
