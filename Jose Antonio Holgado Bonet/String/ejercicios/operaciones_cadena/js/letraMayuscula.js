"use strict";

// función que tranforma la primera letra de cada palabra en mayúsculas
function mayusculaLetra(texto) {

    //Convertimos la frase en minusculas
    texto = texto.toLowerCase();

    // Divide la frase en palabras utilizando el espacio como separador
    texto = texto.split(" ");

    // Recorremos la frase con el for; Coge la primera letra y la convierte en mayúscula; concatenamos el resto de la palabra
    for (let i = 0; i < texto.length; i++) {
        texto[i] = texto[i].charAt(0).toUpperCase() + texto[i].slice(1);
    }
    
    // Me junta las palabras capitalizadas
    texto = texto.join(" ");
    document.getElementById("texto").value = texto;
}