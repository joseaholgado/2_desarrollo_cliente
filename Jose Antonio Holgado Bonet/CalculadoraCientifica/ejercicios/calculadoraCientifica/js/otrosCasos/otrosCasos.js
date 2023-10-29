"use strict";

// Función otrosCasos: maneja operaciones especiales según el operador y los números
function otrosCasos(operador, num1, num2) {
    switch (operador) {
        case '%':
            if (tieneOperador) {
                // Obtén el valor del porcentaje del operando (num2)
                const porcentaje = parseFloat(num2);

                // Realiza la operación según el tipo de operador seleccionado
                switch (operador) {
                    case '*':
                        memoria = (parseFloat(num1) * porcentaje) / 100;
                        break;
                    case '+':
                        memoria = parseFloat(num1) + (parseFloat(num1) * porcentaje) / 100;
                        break;
                    case '-':
                        memoria = parseFloat(num1) - (parseFloat(num1) * porcentaje) / 100;
                        break;
                    case '/':
                        memoria = parseFloat(num1) / (parseFloat(num1) * porcentaje) / 100;
                        break;
                    default:
                        // Operador desconocido
                        memoria = num1;
                        break;
                }

                // Muestra el resultado en la pantalla inferior
                pantallaAbajo.textContent = memoria;
                num1 = memoria.toString(); // Actualiza num1 para futuras operaciones
                tieneOperador = false;
            }
            break;

        case '√':
            num1 = ''; // Reinicia num1
            resultado = raizCuadrada(parseFloat(num2)); // Calcula la raíz cuadrada de num2
            memoria = resultado; // Almacena el resultado en memoria
            tieneOperador = false;
            pantallaAbajo.textContent = resultado; // Muestra el resultado en la pantalla inferior
            break;
    }
}


