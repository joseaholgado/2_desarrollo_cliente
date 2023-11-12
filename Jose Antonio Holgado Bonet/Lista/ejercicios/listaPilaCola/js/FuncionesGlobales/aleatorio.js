"use strict";

/**
 * Genera un número aleatorio entre un rango dado, incluyendo el rango superior.
 */
export function generaN(inferior, superior) {
    return Math.floor(Math.random() * ((superior + 1) - inferior) + inferior);
}

/**
 * Genera un código ASCII aleatorio que representa una letra mayúscula o minúscula.
 * @returns {number} - El código ASCII de la letra generada.
 */
export function generaC() {
    let resultado;

    // Genera un número aleatorio representando un código ASCII.
    resultado = generaN(65, 122);

    // Asegura que el código ASCII generado sea una letra mayúscula o minúscula, no otros caracteres.
    while (resultado > 90 && resultado < 97) {
        resultado = generaN(65, 122);
    }
    
    return resultado;
}
