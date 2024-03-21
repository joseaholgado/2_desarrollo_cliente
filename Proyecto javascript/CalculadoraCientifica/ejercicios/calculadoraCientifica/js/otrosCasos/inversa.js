"use strict";

// Esta función calcula la inversa de un número y actualiza la pantalla con el resultado. 
// Si no se ha configurado un operador previamente, se aplica a num1, de lo contrario, a num2.
function inversa() {
    if (!tieneOperador) {
        // Si no hay un operador previamente configurado, se aplica la inversa a num1
        num1 = num1.slice(0, -3); // Elimina el "1/x" al final de num1
        num1 = (1 / parseFloat(num1)).toString(); // Calcula la inversa y convierte el resultado a cadena
        pantallaAbajo.textContent = num1; // Actualiza la pantalla inferior con el resultado
        console.log(num1); // Muestra el resultado en la consola (puedes eliminar esto en producción)
    } else {
        // Si hay un operador previamente configurado, se aplica la inversa a num2
        num2 = num2.slice(0, -3); // Elimina el "1/x" al final de num2
        num2 = (1 / parseFloat(num2)).toString(); // Calcula la inversa y convierte el resultado a cadena
        pantallaAbajo.textContent = num2; // Actualiza la pantalla inferior con el resultado
    }
}


