"use strict";

// Función eleccionBoton: maneja los eventos de clic en los botones de la calculadora
function eleccionBoton(valor) {
    // Comprueba si no se ha establecido un operador previamente
    if (!tieneOperador) {
        num1 += valor; // Agrega el valor del botón a num1

        // Manejo de botones especiales
        if (valor == '+/-') {
            cambiarSigno(num1);
        } else if (valor == '1/x') {
            inversa(num1);
        } else if (valor == "e") {
            num1 = e(valor);
        } else if (valor == "π") {
            num1 = pi(valor);
        } else if (valor == 'Rnd') {
            num1 = random();
        }

        pantallaAbajo.textContent = num1; // Actualiza la pantalla inferior con num1
    }

    // Si hay un operador establecido
    if (tieneOperador) {
        num2 += valor; // Agrega el valor del botón a num2

        // Manejo de botones especiales
        if (valor == '+/-') {
            cambiarSigno(num2);
        } else if (valor == '1/x') {
            inversa(num2);
        } else if (valor == "e") {
            num2 = e(valor);
        } else if (valor == "π") {
            num2 = pi(valor);
        } else if (valor == 'Rnd') {
            num2 = random();
        }

        pantallaAbajo.textContent = num2; // Actualiza la pantalla inferior con num2
    }

    // Si el botón es un operador
    if (valor === '+' || valor === '-' || valor === '/' || valor === '*' || valor === '√' || valor === '%' ||
        valor === 'sen' || valor === 'cos' || valor === 'tan' || valor === 'log' || valor === 'ln' || valor === 'a^2' ||
        valor === '!' || valor === 'mod' || valor === 'a^b') {
        if (valor != '%') {
            operador = valor; // Establece el operador
        } else {
            operadorEspecial = valor; // Establece operador especial
        }
        tieneOperador = true; // Indica que hay un operador configurado
        pantallaAbajo.textContent = operador; // Actualiza la pantalla inferior con el operador
    }

    // Cuando se presiona el botón de igual (=)
    if (valor === '=') {
        // Realiza operaciones básicas, científicas y otros casos según el operador y los números
        if (operadorEspecial == '%') {
            porcentaje();
        }
        operacioneBasicos();
        operacioneCientifica();
        otrosCasos(operador, num1, num2);

        pantallaAbajo.textContent = memoria; // Actualiza la pantalla inferior con el resultado en memoria
        num2 = ''; // Reinicia num2
    }

    // Manejo de casos de borrado
    casosBorrados(valor);

    pantallaArriba.textContent = memoria; // Muestra el contenido de la memoria en la pantalla superior
}

