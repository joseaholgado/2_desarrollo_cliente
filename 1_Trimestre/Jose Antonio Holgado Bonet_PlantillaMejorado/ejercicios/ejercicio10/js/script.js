"use strict"

function saludar() {
    salida.innerHTML = `¡Hola, ${person}!`;
}

function despedir() {
    salida.innerHTML = `¡Adios, ${person}!`;
}

let person = prompt("Dime tu nombre, Por ejemplo", "'Jose'");
let salida = document.getElementById("salida");

document.getElementById("cuadrado").addEventListener("mouseover", saludar);
document.getElementById("cuadrado").addEventListener("mouseout", despedir);

