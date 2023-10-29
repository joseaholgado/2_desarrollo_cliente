"use strict";
// Calcula el módulo de dos números.
function modulo(num1, num2) {
    // Convierte num1 y num2 a números flotantes
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);

    // Calcula el módulo de num1 entre num2
    let resultado = num1 % num2;

    // Regresa el resultado
    return resultado;
}