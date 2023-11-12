"use strict"

/**
 * Elimina todos los datos almacenados en sessionStorage bajo la clave 'sessionDatos'.
 * Después de borrar los datos, actualiza la visualización llamando a la función mostrarDatos.
 */
function borrarTodo() {
    // Elimina la clave 'sessionDatos' y sus datos asociados en sessionStorage
    sessionStorage.removeItem('sessionDatos');

    // Actualiza la visualización de los datos (puede mostrar un mensaje de que no hay datos)
    mostrarDatos();
}
