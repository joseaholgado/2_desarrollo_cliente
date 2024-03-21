"use strict";

////Guardado de variables del html
let mensaje = document.getElementById("mensaje");
let btn = document.getElementById("btn");


btn.addEventListener("click", function () {
    let resultados = quiniela();
    // Obténgo todas las celdas con la clase "resultado"
    let celdasResultados = document.querySelectorAll('.resultado');

    // Itera sobre las celdas de resultado y asigna los valores de la quiniela
    celdasResultados.forEach((celda, index) => {
        celda.textContent = resultados[index]; // Asigna el valor del array a la celda correspondiente
    });
});