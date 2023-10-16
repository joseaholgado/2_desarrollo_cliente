"use strict";

function otrosCasos(valor) {
    switch (valor) {
        case '%':
            if (!tieneOperador) {
            resultado = porcentaje(parseFloat(num1));
            }
            break;
        case '1/x':
            inversa();
            break;
        case '+/-':
            cambiarOperador();
            break;
        case 'R':
            num1=''
            resultado= raizCuadrada(parseFloat(num2));
            break;
    }
    console.log(resultado);
    memoria = resultado;
    num2 = '';
    tieneOperador = false;
    pantallaAbajo.textContent = resultado;
    
}