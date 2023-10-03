"use strict";

function sumar(num1, num2){
    return num1+num2;
}
function restar(num1, num2){
    return num1-num2;
}
function multiplicar(num1, num2){
    return num1*num2;
}
function sumdividir(num1, num2){
    return num1/num2;
}
function parteEntera(valor){
    return parseInt(valor);
}
function parteDecimal(valor){
    return parseFloar("0"+valor.toString().split(".")[1]).toFixed(2);
}