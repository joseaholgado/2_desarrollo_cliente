'use strict';

/**
 * Almacena un nuevo dato en sessionStorage, actualizando la variable 'sessionDatos' que contiene un array de datos.
 * Si no hay datos almacenados previamente, inicializa 'sessionDatos' como un array vacío.
 */
function grabarDato(nombre, edad) {
    // Verifica si 'sessionDatos' está inicializado en sessionStorage
    if (sessionStorage.getItem("sessionDatos") == null) {
        // Si no hay datos almacenados previamente, inicializa 'sessionDatos' como un array vacío
        sessionStorage.setItem('sessionDatos', JSON.stringify([]));
    }

    // Obtiene los datos actuales almacenados en 'sessionDatos' y los convierte en un array de objetos JavaScript
    let datos = JSON.parse(sessionStorage.getItem("sessionDatos"));

    // Crea un nuevo objeto dato con el nombre y la edad proporcionados
    let dato = {
        nombre: nombre,
        edad: edad
    };

    // Agrega el nuevo dato al array de datos
    datos.push(dato);

    // Actualiza 'sessionDatos' en sessionStorage con el nuevo array de datos
    sessionStorage.setItem('sessionDatos', JSON.stringify(datos));

    // Muestra los datos actualizados
    mostrarDatos(datos);
}
