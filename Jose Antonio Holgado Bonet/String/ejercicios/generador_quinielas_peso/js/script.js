"use strict";
// Obtener los elementos del DOM: mensaje, botón y porcentajes
const mensaje = document.getElementById("mensaje");
const btn = document.getElementById("btn");
const porcentajes = document.querySelectorAll(".porcentaje");

// Agregar un evento al botón
btn.addEventListener("click", function () {
    // Convertir los valores de los porcentajes a una matriz de porcentajes
    const valoresPorcentajes = Array.from(porcentajes).map(function (porcentaje) {
        return parseFloat(porcentaje.value) / 100; // Convertir a porcentaje
    });

    // Generar la quiniela con base en los porcentajes ingresados
    const resultados = quiniela(valoresPorcentajes);

    // Obtener todas las celdas con la clase "resultado"
    let celdasResultados = document.querySelectorAll('.resultado');

    // Iterar sobre las celdas de resultado y asignar los valores de la quiniela a cada celda
    celdasResultados.forEach((celda, index) => {
        celda.textContent = resultados[index]; // Asignar el valor del array a la celda correspondiente
    });
});







