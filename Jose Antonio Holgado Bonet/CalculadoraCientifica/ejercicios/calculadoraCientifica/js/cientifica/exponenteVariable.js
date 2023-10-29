"use strict";
/**
 * Calcula el resultado de elevar un número a una potencia variable.
 * @returns {number} El resultado de elevar num1 a la potencia num2.
 */
function exponenteVariable() {
    // Utiliza la función `Math.pow` para calcular la potencia
    // Convierte num1 y num2 a números flotantes para asegurarse de que sean valores numéricos
    return Math.pow(parseFloat(num1), parseFloat(num2));
}