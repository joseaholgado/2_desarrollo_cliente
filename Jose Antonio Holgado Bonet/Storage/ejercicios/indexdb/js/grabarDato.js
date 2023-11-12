'use strict';

// Función para grabar un nuevo dato en la base de datos
function grabarDato(nombre, edad) {
    console.log("Grabando datos...");
    solicitudDB = indexedDB.open(nombreBD, versionBD);

    // Manejo de errores durante la apertura de la base de datos para escritura
    solicitudDB.onerror = function (event) {
        console.error(`IndexedDB error: ${event.target.errorCode}`);
    };

    // Manejo de éxito en la apertura de la base de datos para escritura
    solicitudDB.onsuccess = function (event) {
        bd = event.target.result;
        canalBD = bd.transaction(tablaBD, "readwrite").objectStore(tablaBD);

        // Almacenamiento del nuevo registro en el almacén de objetos
        canalBD.put({ nombre, edad });
    };

    // Actualización de la interfaz después de grabar el dato
    mostrarDatos();
}