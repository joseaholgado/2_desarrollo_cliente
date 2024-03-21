'use strict';

function borrarTodo() {
    console.log("Eliminando todo...");

    let datos = {};

    let peticionAjax = llamadaAjax('./php/borrarTodoAjax.php', datos, 'post'); // HAGO LA LLAMADA PARA GRABAR LOS DATOS

    peticionAjax.done(function (data) { // SI HA IDO BIEN, MUESTRO LO QUE DEVUELVE LA LLAMADA
        paginarDatos(pagina, bloque);
    });

    peticionAjax.fail(function (data) { // SI ALGO HA IDO MAL, MUESTRO LO QUE DEVUELVE LA LLAMADA
        console.log("Error...");
        console.log(data);
    });
}