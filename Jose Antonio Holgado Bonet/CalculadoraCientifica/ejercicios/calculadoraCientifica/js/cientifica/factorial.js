"use strict";
//Calcula el factorial de un número.
function factorial(num1) {
    num1 = parseFloat(num1);

    if (isNaN(num1)) {
        return NaN; // Manejo de casos donde num1 no es un número
    }

    if (num1 < 0) {
        return -1; // Manejo de números negativos
    } else if (num1 <= 1) {
        return 1; // Condición de parada para números 0 y 1
    } else {
        return num1 * factorial(num1 - 1);
    }
}