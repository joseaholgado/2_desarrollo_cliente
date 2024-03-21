"use strict";
// función que tranforma la primera letra de cada palabra en minúscualas
function minusculaLetra(texto) {
 
    //Convertimos la frase en mayusculas
    texto = texto.toUpperCase().split(" ");


    for (let i = 0; i < texto.length; i++) {
        texto[i] = texto[i].charAt(0).toLowerCase() + texto[i].slice(1);
    }

    
    texto = texto.join(" ");
    document.getElementById("texto").value = texto;
}