'use strict';

/**
 * Almacena un nuevo dato en localStorage, actualizando la variable 'localDatos' que contiene un array de datos.
 * Si no hay datos almacenados previamente, inicializa 'localDatos' como un array vacío.
 * Después de almacenar el nuevo dato, actualiza la visualización llamando a la función mostrarDatos.
 */
function grabarDato(nombre, edad) {
    // Verifica si 'localDatos' está inicializado en localStorage
    if (localStorage.getItem("localDatos") == null) {
        // Si no hay datos almacenados previamente, inicializa 'localDatos' como un array vacío
        localStorage.setItem('localDatos', JSON.stringify([]));
    }

    // Obtiene los datos actuales almacenados en 'localDatos' y los convierte en un array de objetos JavaScript
    let datos = JSON.parse(localStorage.getItem("localDatos"));

    // Crea un nuevo objeto dato con el nombre y la edad proporcionados
    let dato = {
        nombre: nombre,
        edad: edad
    };

    // Agrega el nuevo dato al array de datos
    datos.push(dato);

    // Actualiza 'localDatos' en localStorage con el nuevo array de datos
    localStorage.setItem('localDatos', JSON.stringify(datos));

    // Muestra los datos actualizados
    mostrarDatos(datos);
}
