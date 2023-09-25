"use strict"

function inicio() {
    let person = prompt("Dime tu nombre, Por ejemplo", "'Jose'");
    let salida = document.getElementById("salida");
    salida.innerHTML = `¡Hola, ${person}!`;
 }
 window.onload = inicio;
