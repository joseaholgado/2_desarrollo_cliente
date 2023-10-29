"use strict"

let num1 ;
let num2 ;

//Esta es la función que me lee los operadores en cada función
function leer() {
    num1 = document.getElementById("num1").value;
    num2 = document.getElementById("num2").value;
}

//La función se ejecuta al accionar el botón
document.getElementById("botonBinarioDecimal").addEventListener("click", function (event) {
    binarioDecimal();
});
document.getElementById("botonOctalDecimal").addEventListener("click", function (event) {
    octalDecimal();
});
document.getElementById("botonHexadecimalDecimal").addEventListener("click", function (event) {
    hexadecimalDecimal();
});

document.getElementById("botonBinario").addEventListener("click", function (event) {
    binario();
});
document.getElementById("botonOctal").addEventListener("click", function (event) {
    octal();
});
document.getElementById("botonHexadecimal").addEventListener("click", function (event) {
    hexadecimal();
});

// Convierte el valor de num2  en decimal utilizando parseInt(num2, base a elegir).
// El segundo argumento, es la base que lo convierte a lo que queramos si binario, octal o hexadecimal
function hexadecimalDecimal(){
    leer();
    let resultado=parseInt(num2, 16);
    document.getElementById("salida2").innerHTML = "Resultado en hexadecimal: " +resultado;
}
function octalDecimal(){
    leer();
    let resultado=parseInt(num2, 8);
    document.getElementById("salida2").innerHTML = "Resultado en octal: " + resultado;
}
function binarioDecimal(){
    leer();
    let resultado=parseInt(num2, 2);
    document.getElementById("salida2").innerHTML = "Resultado en binario: " + resultado;
}

// Convierte el valor de num1 (decimal) en una cadena binaria utilizando parseInt() y toString().
// parseInt(num1) convierte num1 en un número entero.
// toString() convierte ese número entero en una cadena que queramos.
function binario() {
    leer();
    let resultado = parseInt(num1).toString(2);
    document.getElementById("salida1").innerHTML = "Resultado en binario: " + resultado;
}

function octal() {
    leer();
    let resultado = parseInt(num1).toString(8);
    document.getElementById("salida1").innerHTML = "Resultado en octal: " + resultado;
}

function hexadecimal() {
    leer();
    let resultado = parseInt(num1).toString(16);
    document.getElementById("salida1").innerHTML = "Resultado en hexadecimal: " + resultado;
}
