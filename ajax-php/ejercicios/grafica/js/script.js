'use strict';

mostrarDatos(); // MUESTRO LOS DATOS
const valorX = document.getElementById("valorX");
const valorY1 = document.getElementById("valorY1");
const valorY2 = document.getElementById("valorY2");

document.getElementById("grabar").addEventListener("click", function (evento) { // escucho la pulsación del botón 'guardar'
    grabarDatos(valorX.value, valorY1.value, valorY2.value);
    mostrarDatos();
});

document.getElementById("aleatorio").addEventListener("click", function () { // escucho la pulsación del botón 'guardar'
    console.log("Grabando 10 datos...");
    for (let i = 0; i < 10; i++) {
        grabarDatos(aleatorioExclusivo(10, 100), aleatorioExclusivo(16, 65), aleatorioExclusivo(16, 65));
    }
    console.log("Datos grabados...");
    mostrarDatos();
});

document.getElementById("grafica").addEventListener("click", function (evento) { // escucho la pulsación del botón 'guardar'
    ordenarDatos(); // ORDENA LOS DATOS Y LOS REPRESENTA
});

document.getElementById("borrarTodo").addEventListener("click", function () { // escucho la pulsación del botón 'guardar'
    borrarTodo();
});
