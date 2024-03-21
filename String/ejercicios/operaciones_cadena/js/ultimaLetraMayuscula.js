"use strict";

// Función que convierte la última letra de una palabra a mayúscula de la misma cadena
function mayusculaUltimaLetra(texto) {

    //Convertimos la frase en minusculas
    texto = texto.toLowerCase().split(" ");

    for (let i = 0; i < texto.length; i++) {
        if (texto[i] !== "") { // Verificar si la palabra no está vacía
            let palabra = texto[i];
            let ultimaLetra = palabra.charAt(palabra.length - 1).toUpperCase();
            texto[i] = palabra.slice(0, palabra.length - 1) + ultimaLetra;
        }
    }

    texto = texto.join(" ");

    document.getElementById("texto").value = texto;
}
