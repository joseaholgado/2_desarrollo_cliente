'use strict';

let bloque = 0;
let pagina = 1;
paginarDatos(pagina, bloque);

const valorX = document.getElementById("valorX");
const valorY1 = document.getElementById("valorY1");
const valorY2 = document.getElementById("valorY2");

document.getElementById("grabar").addEventListener("click", function () { // escucho la pulsación del botón 'guardar'
    grabarDatos(valorX.value, valorY1.value, valorY2.value);
    paginarDatos(pagina, bloque);
});

document.getElementById("aleatorio").addEventListener("click", function () { // escucho la pulsación del botón 'guardar'
    console.log("Grabando 20 datos...");
    for (let i = 0; i < 20; i++) {
        grabarDatos(aleatorioExclusivo(10, 100), aleatorioExclusivo(16, 65), aleatorioExclusivo(16, 65));
    }
    console.log("20 datos grabados...");
    paginarDatos(pagina, bloque);
});

document.getElementById("grafica").addEventListener("click", function (evento) { // escucho la pulsación del botón 'guardar'
    ordenarDatos(); // ORDENA LOS DATOS Y LOS REPRESENTA
});

/* $('.colum-link').click(function (e) {
    let columna = $(this).data('columna'); // CONSIGO LA PÁGINA QUE QUIERO MOSTRAR GRACIAS AL ATRIBUTO 'data-página'
    ordenarXY(columna);
}); */

$('.page-link').click(function (e) {
    let pagina = parseInt($(this).data('pagina')); // CONSIGO LA PÁGINA QUE QUIERO MOSTRAR GRACIAS AL ATRIBUTO 'data-página'
    if ((pagina == 0) && (bloque > 0)) {
        bloque = bloque - 15; // COMO MUESTRO DE 5 EN 5, Y TENGO 3 PÁGINAS, LOS BLOQUES SON DE 15 REGISTROS
    }
    if ((pagina == 4)) {
        bloque = bloque + 15;
    }
    if ((pagina == 0) || (pagina == 4)) {
        pagina = 1;
    }
    paginarDatos(pagina, bloque);
});

document.getElementById("borrarTodo").addEventListener("click", function () { // escucho la pulsación del botón 'guardar'
    borrarTodo();
});
