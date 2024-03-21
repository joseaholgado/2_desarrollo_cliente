'use strict';
/**
 * Almacena un dato en las cookies con una clave y un valor, con una caducidad de 1 minuto.
 */
function grabarDato(clave, valor) {
    // Obtiene la fecha actual en UTC
    let fecha = new Date();

    // Establece la caducidad en 1 minuto (en milisegundos)
    let caducidad = 5 * 60 * 1000;

    // Calcula la fecha de caducidad sumando la caducidad a la fecha actual
    let fechaMilisegundos = fecha.getTime() + caducidad;

    // Establece la fecha de caducidad en la fecha actualizada
    fecha.setTime(fechaMilisegundos);

    // Formatea la fecha de caducidad como una cadena UTC
    let fechaCaducidad = fecha.toUTCString();

    // Establece la cookie con la clave, valor, fecha de caducidad, y otras opciones de seguridad
    document.cookie =
        clave + "=" +
        valor + ";expires=" +
        fechaCaducidad + ";path=./;SameSite=Strict;Secure";

    // Actualiza la variable datos con las cookies actuales
    datos = document.cookie;

    // Muestra los datos actualizados
    mostrarDatos(datos);
}