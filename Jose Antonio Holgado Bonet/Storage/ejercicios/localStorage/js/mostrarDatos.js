'use strict';

/**
 * Muestra los datos almacenados en localStorage en el cuerpo de una tabla HTML.
 */
function mostrarDatos(datos) {
    // Obtiene la referencia al elemento HTML con id "cuerpo"
    const cuerpo = document.getElementById("cuerpo");

    // Verifica si hay datos almacenados en localStorage y si la longitud es mayor a 0
    if (localStorage.getItem("localDatos") && JSON.parse(localStorage.getItem("localDatos")).length > 0) {
        // Inicializa el contenido del cuerpo de la tabla
        cuerpo.innerHTML = "Los datos almacenados son: <br />";

        // Recorre cada dato en la lista de datos
        for (let dato of datos) {
            // Llama a la función representaDatos para agregar una fila a la tabla
            representaDatos(dato);
        }
    } else {
        // Si no hay datos almacenados, muestra un mensaje indicando que no existen datos
        cuerpo.innerHTML = 'No existen datos almacenados';
    }
}
