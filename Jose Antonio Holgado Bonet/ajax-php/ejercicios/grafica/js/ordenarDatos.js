'use strict';

function ordenarDatos() {
    console.log("Ordenando datos...");

    let datos = {};

    let peticionAjax = llamadaAjax('./php/ordenarAjax.php', datos, 'post');

    peticionAjax.done(function (data) { // SI TODO HA IDO BIEN, MUESTRO LOS DATOS
        let valores = [];
        for (let row of data) { // RECORRO CADA UNO DE LOS 10 REGISTROS
            valores.push(row);
        }
        console.log(valores);
        graficaDatos(valores);
    });

    peticionAjax.fail(function (data) { // SI ALGO HA IDO MAL, MUESTRO LO QUE DEVUELVE LA LLAMADA
        console.log(data);
    });
}