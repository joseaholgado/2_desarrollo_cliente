'use strict';

mostrarDatos(); // MUESTRO LOS DATOS
const valorX = document.getElementById("valorX");
const valorY1 = document.getElementById("valorY1");
const valorY2 = document.getElementById("valorY2");

document.getElementById("grabar").addEventListener("click", function (evento) { // escucho la pulsación del botón 'guardar'
    grabarDatos(valorX.value, valorY1.value, valorY2.value);
});
