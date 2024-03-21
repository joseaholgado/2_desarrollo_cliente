"use strict";

switch (operador) {
    case "+":
        resultado = sumar(num1, num2);
    case "-":
        resultado = restar(num1, num2);
    case "*":
        resultado = multiplicar(num1, num2);

    case "/":
        resultado = dividir(num1, num2);
    case "Entero":
        resultado = parteEntera(salida.innerHTML);
    case "Decimal":
        resultado = parteDecimal(salida.innerHTML);



}
return resultado;