'use strict';

// Función para actualizar un dato en la base de datos
function updateDato(id, nuevoNombre, nuevaEdad) {
    console.log("Actualizando datos...");
    solicitudDB = indexedDB.open(nombreBD, versionBD);

    // Manejo de errores durante la apertura de la base de datos para escritura
    solicitudDB.onerror = function (event) {
        console.error(`IndexedDB error: ${event.target.errorCode}`);
    };

    // Manejo de éxito en la apertura de la base de datos para escritura
    solicitudDB.onsuccess = function (event) {
        bd = event.target.result;
        canalBD = bd.transaction(tablaBD, "readwrite").objectStore(tablaBD);

        // Obtener el registro por ID
        const getRequest = canalBD.get(id);

        getRequest.onsuccess = function () {
            const registro = getRequest.result;

            if (registro) {
                // Modificar el nombre y la edad
                registro.nombre = nuevoNombre;
                registro.edad = nuevaEdad;

                // Actualizar el registro modificado en la base de datos
                const putRequest = canalBD.put(registro);

                putRequest.onsuccess = function () {
                    console.log("Registro actualizado correctamente");
                    mostrarDatos(); // Actualizar la visualización de los datos en la interfaz
                };

                putRequest.onerror = function () {
                    console.error("Error al actualizar el registro");
                };
            } else {
                console.error("Registro no encontrado");
            }
        };

        getRequest.onerror = function () {
            console.error("Error al obtener el registro");
        };
    };
}