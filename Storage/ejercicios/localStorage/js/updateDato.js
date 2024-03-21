"use strict";
/**
 * Actualiza los valores de los campos 'nombre' y 'edad', borra el dato anterior con el nombre proporcionado
 * y actualiza la variable 'datos' almacenada en localStorage.
 */
function updateDato(nombreNew, edadNew) {
    // Actualiza los valores de los campos 'nombre' y 'edad' con los nuevos valores
    nombre.value = nombreNew;
    edad.value = edadNew;

    // Recupera los datos almacenados en localStorage y los convierte de nuevo en un objeto JavaScript
    datos = JSON.parse(localStorage.getItem("localDatos"));

    // Borra el dato anterior con el nombre proporcionado
    borrarDato(nombreNew);

    // Puedes descomentar la siguiente línea si deseas mostrar los datos actualizados
    // mostrarDatos(datos);
}
