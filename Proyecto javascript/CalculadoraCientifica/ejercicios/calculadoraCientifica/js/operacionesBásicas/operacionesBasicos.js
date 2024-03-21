"use strict";

// Esta función realiza operaciones básicas (suma, resta, multiplicación y división) entre num1 y num2 según el operador configurado.
// Función operacioneBasicos: realiza operaciones básicas entre num1 y num2 según el operador configurado
function operacioneBasicos() {
    if (memoria !== 0) {
        num1 = memoria; // Utiliza el valor de la memoria como num1
    }

    switch (operador) {
        case '+':
            resultado = sumar(parseFloat(num1), parseFloat(num2)); // Realiza la suma
            memoria = resultado; // Almacena el resultado en la memoria
            num2 = ''; // Limpia num2
            tieneOperador = false; // Restablece la bandera de tener operador
            resultado = 0; // Restablece el resultado
            break;
        case '-':
            resultado = restar(parseFloat(num1), parseFloat(num2)); // Realiza la resta
            memoria = resultado; // Almacena el resultado en la memoria
            num2 = ''; // Limpia num2
            tieneOperador = false; // Restablece la bandera de tener operador
            resultado = 0; // Restablece el resultado
            break;
        case '/':
            resultado = dividir(parseFloat(num1), parseFloat(num2)); // Realiza la división
            memoria = resultado; // Almacena el resultado en la memoria
            num2 = ''; // Limpia num2
            tieneOperador = false; // Restablece la bandera de tener operador
            resultado = 0; // Restablece el resultado
            break;
        case '*':
            resultado = multiplicar(parseFloat(num1), parseFloat(num2)); // Realiza la multiplicación
            memoria = resultado; // Almacena el resultado en la memoria
            num2 = ''; // Limpia num2
            tieneOperador = false; // Restablece la bandera de tener operador
            resultado = 0; // Restablece el resultado
            break;
        default:
            // Operador desconocido o no configurado
            memoria = num1; // Restablece la memoria a num1
            break;
    }
}


