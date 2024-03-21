"use strict";

//Guardado de variables del html
const mensaje = document.getElementById("mensaje");
const btn = document.getElementById("btn");


btn.addEventListener("click", function () {
    let resultado=caracterRandom(); // Llamada a una función para obtener el resultado

    mensaje.innerHTML = resultado; // Mostrar el resultado en el contenedor 'mensaje'
    });

    

