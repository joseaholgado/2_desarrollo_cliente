"use strict"
/**
 * Elimina todos los datos almacenados en localStorage bajo la clave 'localDatos'.
 * Después de borrar los datos, actualiza la visualización llamando a la función mostrarDatos.
 */
function borrarTodo() {
    // Elimina la clave 'localDatos' y sus datos asociados en localStorage
    localStorage.removeItem('localDatos');

    // Actualiza la visualización de los datos (puede mostrar un mensaje de que no hay datos)
    mostrarDatos();
}
