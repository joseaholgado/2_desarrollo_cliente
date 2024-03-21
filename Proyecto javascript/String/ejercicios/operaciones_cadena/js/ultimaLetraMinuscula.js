"use strict";

// Función que convierte la última letra de una palabra a minúscula de la misma cadena
function minusculaUltimaLetra(texto) {

    //Convertimos la frase en mayusculas
    texto = texto.toUpperCase().split(" ");

    for (let i = 0; i < texto.length; i++) {
        if (texto[i] !== "") { // Verificar si la palabra no está vacía
            let palabra = texto[i];
            let ultimaLetra = palabra.charAt(palabra.length - 1).toLowerCase();
            texto[i] = palabra.slice(0, palabra.length - 1) + ultimaLetra;
        }
    }

    texto = texto.join(" ");

    document.getElementById("texto").value = texto;
}
