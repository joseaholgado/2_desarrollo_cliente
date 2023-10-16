"use strict";

// Calcula la inversa del número en pantalla y actualiza la pantalla
function inversa() {

    if (!tieneOperador) {
        num1 = (1 / parseFloat(num1)).toString();
        pantallaAbajo.textContent = num1;
        console.log(num1);
    } else {
        num2 = (1 / parseFloat(num2)).toString();
        pantallaAbajo.textContent = num2;
    }
}