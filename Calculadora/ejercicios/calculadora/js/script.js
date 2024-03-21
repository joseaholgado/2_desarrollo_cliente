"use strict"


/*
//Otra forma de hacer el ehercicio anterior con class
let num1 = parseFloat(document.getElementById("num1").value);
let num2 = parseFloat(document.getElementById("num2").value);
let salida = document.getElementById("salida");
let resultado;

let operadores1 = Array.from(document.getElementsByClassName("operador"));
let operReal = Array.from(document.getElementsByClassName("operReal"));

let operadores2 = document.querySelectorAll(".operador");

for (let operador of operadores1) {
    operador.addEventListener("click", function () {
        resultado=resolverOper(parseFloat(num1.value), operador.value, parseFloat(num2.value));
    });
    salida.innerHTML=resultado;
};

for (let operador of operadores1) {
    operador.addEventListener("click", function () {
        resultado=resolverReal(salida.innerHTML);
    });
    salida.innerHTML=resultado;
};
*/



















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
    let resultado = parseFloat(num1) + parseFloat(num2);
    document.getElementById("salida").innerHTML = "Tu resultado es: " + resultado;
}

document.getElementById("botonMenos").addEventListener("click", function (event) {
    resta();
})

function resta() {
    leer();
    let resultado = parseFloat(num1) - parseFloat(num2);
    document.getElementById("salida").innerHTML = "Tu resultado es: " + resultado;
}

document.getElementById("botonMultiplicar").addEventListener("click", function (event) {
    Multiplicar();
})

function Multiplicar() {
    leer();
    let resultado = parseFloat(num1) * parseFloat(num2);
    document.getElementById("salida").innerHTML = "Tu resultado es: " + resultado;
}

document.getElementById("botonDividir").addEventListener("click", function (event) {
    dividir();
})

function dividir() {
    leer();
    let resultado = parseFloat(num1) / parseFloat(num2);
    document.getElementById("salida").innerHTML = "Tu resultado es: " + resultado;
}

document.getElementById("botonEntero").addEventListener("click", function (event) {
    entero();
})

//Mostramos la parte entera (redondeada hacia abajo) del primer operador con el uso de la función Math.floor
function entero() {
    leer();   
    let resultado = Math.floor(parseFloat(num1));
    document.getElementById("salida").innerHTML = "Tu parte entero es: " + resultado;
}

document.getElementById("botonDecimal").addEventListener("click", function (event) {
    decimal();
})

//Mostramos la parte decimal del segundo operador con el metodo ".split()" utilizando el (".") como seprador
function decimal() {
    leer();
    let resultado="0."+num2.split(".")[1];
    document.getElementById("salida").innerHTML = "Tu parte decimal es: " + resultado;
    //Mostramos la parte decimal del segundo operador con el uso de la función Math.floor
    //let resultado = parseFloat(num2) - Math.floor(parseFloat(num2));
    //document.getElementById("salida").innerHTML = "La parte decimal es: " + resultado;
}


