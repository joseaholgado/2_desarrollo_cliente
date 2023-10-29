"use strict"


let nombre = "Jose";

window.addEventListener('load', function () { 
    function saluda(nombre) {
        const salida = document.getElementById("salida");
        salida.innerHTML = `Hola ${nombre}`;
    }

    function despide(nombre) {
        const salida = document.getElementById("salida");
        salida.innerHTML = `Adios ${nombre}`;
    }

    document.getElementById("nombre").addEventListener('change', function () {
        console.log(nombre);
        nombre = document.getElementById("nombre").value;
        console.log(nombre);
    }); 

    document.getElementById("saludar").addEventListener('click', function () {
        saluda(nombre);
    }); 

    document.getElementById("despedir").addEventListener('click', function () {
        despide(nombre);
    }); 

});

window.onload = inicio;
