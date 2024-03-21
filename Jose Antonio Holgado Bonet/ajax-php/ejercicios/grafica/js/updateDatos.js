"use strict";

function updateDatos(dvalorX,dvalorY1,dvalorY2) {
    console.log("Actualizando datos...");

    let datos = {
        "valorY1": dvalorY1,
        "valorY2": dvalorY2,
        "valorX": dvalorX
    };
    
    valorX.value=dvalorX;
    valorY1.value=dvalorY1;
    valorY2.value=dvalorY2;
    

    let peticionAjax = llamadaAjax('./php/borrarAjax.php', datos, 'post'); // HAGO LA LLAMADA PARA GRABAR LOS DATOS

    peticionAjax.done(function (data) { // SI HA IDO BIEN, MUESTRO LO QUE DEVUELVE LA LLAMADA
        console.log("Dato actualizado...");
        mostrarDatos();
    });

    peticionAjax.fail(function (data) { // SI ALGO HA IDO MAL, MUESTRO LO QUE DEVUELVE LA LLAMADA
        console.log("Error...");
        console.log(data);
    });
}