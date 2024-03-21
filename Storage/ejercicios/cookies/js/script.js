'use strict';

// Obtengo las cookies y muestro los datos
let datos = document.cookie;
mostrarDatos(datos);

// Obtengo las referencias a los elementos del formulario y el botón
const clave = document.getElementById("clave");
const valor = document.getElementById("valor");
const guardar = document.getElementById("guardar");

// Agrego un evento al botón "Guardar" para almacenar un nuevo dato como cookie
guardar.addEventListener("click", function () {
    grabarDato(clave.value, valor.value);
});
