"use strict"

//Funcion que para la velocidad del texto
function parar(texto) {
    clearInterval(repite);
    document.getElementById("texto").value =texto;
}