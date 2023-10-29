"use strict";

//Función que invierte la caden string 
function invertir(texto) {
    let invertido = "";
    for (let i = texto.length - 1; i >= 0; i--) {//Tecorro el texto del final hasta el principio
        invertido += texto[i];
    }
    document.getElementById("salida").innerHTML = "El texto invertido es: " + invertido;
}
