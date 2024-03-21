'use strict';

function paginarDatos(pagina, bloque) {
    console.log("Paginar datos...");

    let datos = {
        "pagina": pagina,
        "bloque": bloque
    };

    let peticion = llamadaAjax('./php/paginarAjax.php', datos, 'post'); // LLAMADA AJAR PARA BORRAR TODO

    peticion.done(function (data) { // data TENDRA EL echo DE PHP
        visualizarDatos(data);
    });

    peticion.fail(function (data) { // data TENDRA EL objeto DE LA LLAMADA AJAX
        console.log("Error...");
        console.log(data);
    });
}