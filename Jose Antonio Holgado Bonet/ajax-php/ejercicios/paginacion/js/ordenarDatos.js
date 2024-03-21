'use strict';

function ordenarDatos() {
    console.log("Ordenando datos...");

    let datos = {};

    let peticionAjax = llamadaAjax('./php/ordenarAjax.php', datos, 'post');

    peticionAjax.done(function (data) { // SI TODO HA IDO BIEN, MUESTRO LOS DATOS
        console.log(data);
        graficaDatos(data);
    });

    peticionAjax.fail(function (data) { // SI ALGO HA IDO MAL, MUESTRO LO QUE DEVUELVE LA LLAMADA
        console.log("Error...");
        console.log(data);
    });
}