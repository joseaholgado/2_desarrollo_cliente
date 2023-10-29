"use strict";

// Esta función cambia el signo del número actual en pantalla y actualiza la pantalla con el resultado. 
// Dependiendo de si se ha configurado un operador previamente, se aplica a num1 o num2.
function cambiarSigno() {
    if (tieneOperador) {
        // Si hay un operador previamente configurado, se cambia el signo de num2
        num2 = (-1) * parseFloat(num2); // Cambia el signo de num2
        pantallaAbajo.textContent = num2; // Actualiza la pantalla inferior con el nuevo valor de num2
    } else {
        // Si no hay un operador previamente configurado, se cambia el signo de num1
        num1 = (-1) * parseFloat(num1); // Cambia el signo de num1
        pantallaAbajo.textContent = num1; // Actualiza la pantalla inferior con el nuevo valor de num1
    }
}


