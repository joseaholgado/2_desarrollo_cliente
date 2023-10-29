"use strict"


let nombre = "Jose"; 

function saluda(nombre) {
    const resultado = document.getElementById("salida");
    resultado.innerHTML = `Hola ${nombre}`;
}

function despide(nombre) {
    const resultado = document.getElementById("salida");
    resultado.innerHTML = `Adios ${nombre}`;
}

document.getElementById("nombre").addEventListener('keyup', function () {
    nombre = document.getElementById("nombre").value;
});

document.getElementById("cuadrado").addEventListener('mouseover', function () {
    saluda(nombre);
});

document.getElementById("cuadrado").addEventListener('mouseout', function () {
    despide(nombre);
});
