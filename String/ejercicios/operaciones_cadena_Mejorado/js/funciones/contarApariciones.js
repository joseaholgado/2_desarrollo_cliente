"use strict";

//Función que me encuentra un caracter simple o palabra escrito por el usuario en el textarea de abajo. Y lo busca del textarea de arriba
function contarApariciones(texto, palabra) {
    let contador = 0;

    // Si la longitud de la cadena de búsqueda es 1, consideramos que el usuario busca un solo carácter
    if (palabra.length == 1) {
        for (let i = 0; i < texto.length; i++) {
            if (texto[i] == palabra) {
                contador++;
            }
        }
    } else {
        // Si no, realizamos la búsqueda de la palabra en el texto
        let palabras = texto.split(" ");
        palabras.forEach(function (p) {
            if (p == palabra) {
                contador++;
            }
        });
    }

    document.getElementById("salida").innerHTML = "Las veces vistas de " + "'" + palabra + "'" + " son: " + contador;
    console.log(contador);
}
