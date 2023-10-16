"use strict";


function operacioneBasicos(){
    if(memoria!=0){
    num1 = memoria; // Utiliza el valor de la memoria como num1
}
    switch (operador) {
        case '+':
            resultado = sumar(parseFloat(num1), parseFloat(num2));
            break;
        case '-':
            resultado = restar(parseFloat(num1), parseFloat(num2));
            break;
        case '/':
            resultado = dividir(parseFloat(num1), parseFloat(num2));
            break;
        case '*':
            resultado = multiplicar(parseFloat(num1), parseFloat(num2));
            break;
    }
    memoria = resultado;
    num2 = '';
    tieneOperador = false;
    resultado = 0;
}