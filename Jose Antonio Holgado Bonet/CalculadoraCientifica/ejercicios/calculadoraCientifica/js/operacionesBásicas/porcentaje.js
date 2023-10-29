"use strict";
// Función porcentaje: realiza cálculos de porcentaje con respecto a num1 y num2
function porcentaje(){
    if(memoria!=0){
        num1 = memoria; // Utiliza el valor de la memoria como num1
    }
        switch (operador) {
            case '+':
                resultado = parseFloat(num1)+parseFloat(num2)/100*parseFloat(num1);
                memoria = resultado;
                num2 = '';
                operador='';
                tieneOperador = false;
                resultado = 0;
                break;
            case '-':
                resultado = parseFloat(num1)-parseFloat(num2)/100*parseFloat(num1);
                resultado = resultado*num1;
                memoria = resultado;
                num2 = '';
                operador='';
                tieneOperador = false;
                resultado = 0;
                break;
            case '/':
                resultado = parseFloat(num1)/parseFloat(num2)/100*parseFloat(num1);
                memoria = resultado;
                num2 = '';
                operador='';
                tieneOperador = false;
                resultado = 0;
                break;
            case '*':
                resultado = parseFloat(num1)*parseFloat(num2)/100*parseFloat(num1);
                memoria = resultado;
                num2 = '';
                operador='';
                tieneOperador = false;
                resultado = 0;
                break;
        }
       
    }
