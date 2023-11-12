'use strict';

// Función para borrar un dato de la base de datos
function borrarDato(id) {
    console.log("Borrando datos...");
    solicitudDB = indexedDB.open(nombreBD, versionBD);

    // Manejo de errores durante la apertura de la base de datos para escritura
    solicitudDB.onerror = function (event) {
        console.error(`IndexedDB error: ${event.target.errorCode}`);
    };

    // Manejo de éxito en la apertura de la base de datos para escritura
    solicitudDB.onsuccess = function (event) {
        bd = event.target.result;
        canalBD = bd.transaction(tablaBD, "readwrite").objectStore(tablaBD);

        // Borrado del registro por ID
        canalBD.delete(id);
    };

    mostrarDatos(); // Actualización de la interfaz después de borrar el dato
}