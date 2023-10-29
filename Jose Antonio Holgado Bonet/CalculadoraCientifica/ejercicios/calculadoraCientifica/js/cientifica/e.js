"use strict";
/**
 * Calcula el valor de la constante matemática "e" (número de Euler).
 * @param {string} valor - El valor que se pasa como argumento (puede ser cualquier cadena, pero no se utiliza en el cálculo).
 * @returns {number} El valor de la constante matemática "e" (aproximadamente 2.71828).
 */
function e(valor) {
    console.log(valor);
    if (!tieneOperador) {
        // Si no se proporciona un operador, se devuelve el valor de "e" directamente
        return Math.exp(1);
    } else {
        // Si se proporciona un operador (que no se utiliza en el cálculo), también se devuelve el valor de "e"
        return Math.exp(1);
    }
}