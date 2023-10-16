"use strict";

function eleccionBoton(valor) {
    if (!tieneOperador) {
        num1 += valor;
        pantallaAbajo.textContent = num1;
    }
    if (tieneOperador) {
        num2 += valor;
        pantallaAbajo.textContent = num2;
    }
    if (valor === '+' || valor === '-' || valor === '/' || valor === '*'|| valor === 'R'|| valor === '+/-'|| valor === '%') {
        operador = valor;
        tieneOperador = true;
        pantallaAbajo.textContent = operador;
    }

    // Aquí debes configurar num1 en el valor de la memoria al comienzo de la función
    if (valor === '=') {
        operacioneBasicos();
        otrosCasos(valor);    
    }
    
    casosBorrados(valor);
    

    pantallaArriba.textContent = memoria; // Muestra el contenido de la memoria
}
