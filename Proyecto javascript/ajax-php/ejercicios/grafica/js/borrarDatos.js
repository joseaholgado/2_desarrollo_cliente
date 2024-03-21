'use strict';

function borrarDatos(valorX) {
    console.log("Eliminando dato...");

    let datos = {
        "valorX": valorX
    };

    let peticionAjax = llamadaAjax('./php/borrarAjax.php', datos, 'post'); // HAGO LA LLAMADA PARA GRABAR LOS DATOS

    peticionAjax.done(function (data) { // SI HA IDO BIEN, MUESTRO LO QUE DEVUELVE LA LLAMADA
        console.log("Dato eliminado...");
        mostrarDatos();
    });

    peticionAjax.fail(function (data) { // SI ALGO HA IDO MAL, MUESTRO LO QUE DEVUELVE LA LLAMADA
        console.log("Error...");
        console.log(data);
    });
}