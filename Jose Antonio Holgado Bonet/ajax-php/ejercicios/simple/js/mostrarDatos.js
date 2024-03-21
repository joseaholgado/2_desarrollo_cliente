'use strict';

function mostrarDatos() {
    console.log("Mostrando datos...");

    let datos = {
        "operacion": 'leer'
    };

    let peticion = llamadaAjax('./php/mostrarAjax.php', datos, 'post'); // LLAMADA AJAR PARA BORRAR TODO

    peticion.done(function (data) { // data TENDRA EL echo DE PHP
        console.log(data);
        visualizarDatos(data);
    });

    peticion.fail(function (data) { // data TENDRA EL objeto DE LA LLAMADA AJAX
        console.log("Error...");
        console.log(data);
    });
}