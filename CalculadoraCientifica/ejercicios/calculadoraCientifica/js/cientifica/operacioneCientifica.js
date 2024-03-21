"use strict";

/**
 * Realiza operaciones matemáticas específicas según el operador actual.
 */
function operacioneCientifica() {
    switch (operador) {
        case 'sen':
            // Calcula el seno del número en pantalla (num1 o num2)
            resultado = seno();
            memoria = resultado;
            tieneOperador = false;
            pantallaAbajo.textContent = resultado;
            break;
        case 'cos':
            // Calcula el coseno del número en pantalla (num1 o num2)
            resultado = coseno();
            memoria = resultado;
            tieneOperador = false;
            pantallaAbajo.textContent = resultado;
            break;
        case 'tan':
            // Calcula la tangente del número en pantalla (num1 o num2)
            resultado = tangente();
            memoria = resultado;
            tieneOperador = false;
            pantallaAbajo.textContent = resultado;
            break;
        case 'log':
            // Calcula el logaritmo del número en pantalla (num1 o num2)
            resultado = logaritmo();
            memoria = resultado;
            tieneOperador = false;
            pantallaAbajo.textContent = resultado;
            break;
        case 'a^2':
            // Calcula el cuadrado del número en pantalla (num1 o num2)
            resultado = exponente();
            memoria = resultado;
            tieneOperador = false;
            pantallaAbajo.textContent = resultado;
            break;
        case 'ln':
            // Calcula el logaritmo natural del número en pantalla (num1 o num2)
            resultado = logaritmoNatural();
            memoria = resultado;
            tieneOperador = false;
            pantallaAbajo.textContent = resultado;
            break;
        case '!':
            // Calcula el factorial del número en pantalla (num1)
            resultado = factorial(parseFloat(num1));
            memoria = resultado;
            tieneOperador = false;
            pantallaAbajo.textContent = resultado;
            break;
        case 'mod':
            // Calcula el módulo entre dos números en pantalla (num1 y num2)
            resultado = modulo(parseFloat(num1), parseFloat(num2));
            memoria = resultado;
            tieneOperador = false;
            pantallaAbajo.textContent = resultado;
            break;
        case 'a^b':
            // Calcula la potencia (a^b) entre dos números en pantalla (num1 y num2)
            resultado = exponenteVariable();
            memoria = resultado;
            tieneOperador = false;
            pantallaAbajo.textContent = resultado;
            break;
        default:
            // Caso de operador no reconocido
            break;
    }
}


