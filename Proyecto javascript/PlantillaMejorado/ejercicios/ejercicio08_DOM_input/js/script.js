"use strict"

function inicio() {
    function saludar() {
        const nombreInput = document.getElementById("nombre");
        const nombre = nombreInput.value;
        const resultado = document.getElementById("salida");
        resultado.innerHTML = `Hola ${nombre}`;
    }

    document.getElementById("saludar").onclick = function () {
        saludar();
    };
}

window.onload = inicio;

