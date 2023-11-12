'use strict';

/**
 * Elimina un dato específico con el nombre proporcionado de 'sessionDatos' almacenado en sessionStorage.
 * Después de borrar el dato, actualiza la visualización llamando a la función mostrarDatos.
 */
function borrarDato(nombre) {
    // Obtiene los datos actuales almacenados en 'sessionDatos' y los convierte en un array de objetos JavaScript
    let datos = JSON.parse(sessionStorage.getItem("sessionDatos"));

    // Crea un nuevo array para almacenar los datos después de la eliminación
    let newDatos = [];

    // Itera sobre cada dato en 'datos'
    for (let dato of datos) {
        // Si el nombre del dato actual no coincide con el nombre proporcionado, agrega el dato al nuevo array
        if (dato.nombre != nombre) {
            newDatos.push(dato);
        }
    }

    // Actualiza 'sessionDatos' en sessionStorage con el nuevo array de datos
    sessionStorage.setItem('sessionDatos', JSON.stringify(newDatos));

    // Actualiza la visualización de los datos después de la eliminación
    mostrarDatos(newDatos);
}
