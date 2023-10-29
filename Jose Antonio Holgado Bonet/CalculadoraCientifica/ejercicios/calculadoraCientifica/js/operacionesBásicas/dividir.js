"use strict";
//Funcion que realiza una división
function dividir(num1, num2) {
    if (num2 !== 0) {//Condición para que no divida con el 0
      return num1 / num2;
    } else {
      return "Error: División por cero";
    }
}