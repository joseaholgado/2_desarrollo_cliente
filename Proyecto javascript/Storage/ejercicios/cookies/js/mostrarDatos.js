'use strict';

/**
 * Muestra los datos almacenados en las cookies en el cuerpo de una tabla HTML.
 */
function mostrarDatos(datos) {
    // Obtiene la referencia al elemento HTML con id "cuerpo"
    const cuerpo = document.getElementById("cuerpo");

    // Divide la cadena de datos en un array utilizando el delimitador ";"
    datos = datos.split(";");

    // Verifica si hay alguna cookie almacenada
    if (document.cookie && document.cookie.length > 0) {
        // Inicializa el contenido del cuerpo de la tabla
        cuerpo.innerHTML = "Los datos almacenados son: <br />";

        // Recorre cada dato en la lista de datos
        for (let dato of datos) {
            // Divide el dato en una array de dos elementos: clave y valor
            dato = dato.split("=");

            // Llama a la función representaDatos para agregar una fila a la tabla
            representaDatos(dato);
        }
    } else {
        // Si no hay cookies almacenadas, muestra un mensaje indicando que no existen datos
        cuerpo.innerHTML = 'No existen datos almacenados';
    }
}
