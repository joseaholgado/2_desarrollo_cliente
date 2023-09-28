"use strict"

let num1;
let num2;

//Esta es la función que me lee los operadores en cada función
function leer() {
    num1 = document.getElementById("num1").value;
    num2 = document.getElementById("num2").value;

}
//La función se ejecuta al accionar el botón
document.getElementById("botonMas").addEventListener("click", function (event) {
    suma();
})

function suma() {
    leer();
    // console.log(num1,num2);
    let resultado = parseFloat(num1) + parseFloat(num2);
    document.getElementById("salida").innerHTML = "Tu resultado es: " + resultado;
}

document.getElementById("botonMenos").addEventListener("click", function (event) {
    resta();
})

function resta() {
    leer();
    // console.log(num1,num2);
    let resultado = parseFloat(num1) - parseFloat(num2);
    document.getElementById("salida").innerHTML = "Tu resultado es: " + resultado;
}

document.getElementById("botonMultiplicar").addEventListener("click", function (event) {
    Multiplicar();
})

function Multiplicar() {
    leer();
    // console.log(num1,num2);
    let resultado = parseFloat(num1) * parseFloat(num2);
    document.getElementById("salida").innerHTML = "Tu resultado es: " + resultado;
}

document.getElementById("botonDividir").addEventListener("click", function (event) {
    dividir();
})

function dividir() {
    leer();
    // console.log(num1,num2);
    let resultado = parseFloat(num1) / parseFloat(num2);
    document.getElementById("salida").innerHTML = "Tu resultado es: " + resultado;
}

