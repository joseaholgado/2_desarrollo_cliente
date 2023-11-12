'use strict';

/**
 * Elimina un dato de las cookies con la clave proporcionada, estableciendo una fecha de caducidad en el pasado.
 */
function borrarDato(clave) {
    // Obtiene la fecha actual en UTC
    let fecha = new Date();

    // Establece la caducidad en 1 minuto (en milisegundos)
    let caducidad = 1 * 60 * 1000;

    // Calcula la fecha de caducidad restando la caducidad a la fecha actual
    let fechaMilisegundos = fecha.getTime() - caducidad;

    // Establece la fecha de caducidad en el pasado para eliminar la cookie
    fecha.setTime(fechaMilisegundos);

    // Formatea la fecha de caducidad como una cadena UTC
    let fechaCaducidad = fecha.toUTCString();

    // Establece la cookie con la clave proporcionada y una fecha de caducidad en el pasado para eliminarla
    document.cookie =
        clave + "=;expires=" +
        fechaCaducidad + ";path=./;SameSite=Strict;Secure";

    // Actualiza la variable datos con las cookies actuales
    let datos = document.cookie;

    // Muestra los datos actualizados
    mostrarDatos(datos);
}