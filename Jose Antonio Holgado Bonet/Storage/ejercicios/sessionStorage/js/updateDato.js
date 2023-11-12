"use strict";
/**
 * Actualiza los valores de los campos 'nombre' y 'edad', borra el dato anterior con el nombre proporcionado
 * y actualiza la variable 'datos' almacenada en sessionStorage.
 */
function updateDato(nombreNew, edadNew) {
    // Actualiza los valores de los campos 'nombre' y 'edad' con los nuevos valores
    nombre.value = nombreNew;
    edad.value = edadNew;

    // Recupera los datos almacenados en sessionStorage y los convierte de nuevo en un objeto JavaScript
    datos = JSON.parse(sessionStorage.getItem("sessionDatos"));

    // Borra el dato anterior con el nombre proporcionado
    borrarDato(nombreNew);

    // mostrarDatos(datos);
}
