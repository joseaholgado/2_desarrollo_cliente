'use strict';

// REALIZO LA LLAMADA 'Ajax' Y GUARDO EL RESULTADO EN 'respuesta'
// El método $.ajax es configurado a través de un objeto
function llamadaAjax(url, datos, metodo) {
    return $.ajax({
        url: url, // la URL para la petición
        data: datos, // la información a enviar
        type: metodo, // especifica si será una petición POST o GET
        dataType: "json" // el tipo de información que se espera de respuesta
    });
}

