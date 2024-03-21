'use strict';

function grabarDatos(valorX, valorY1, valorY2) {
    console.log("Grabando dato...");

    let datos = {
        "valorX": valorX,
        "valorY1": valorY1,
        "valorY2": valorY2
    };

    let peticionAjax = llamadaAjax('./php/grabarAjax.php', datos, 'post'); // HAGO LA LLAMADA PARA GRABAR LOS DATOS

    peticionAjax.done(function (data) { // SI HA IDO BIEN, MUESTRO LO QUE DEVUELVE LA LLAMADA
        console.log("Dato grabado...");
    });

    peticionAjax.fail(function (data) { // SI ALGO HA IDO MAL, MUESTRO LO QUE DEVUELVE LA LLAMADA
        console.log("Error...");
        console.log(data);
    });
}