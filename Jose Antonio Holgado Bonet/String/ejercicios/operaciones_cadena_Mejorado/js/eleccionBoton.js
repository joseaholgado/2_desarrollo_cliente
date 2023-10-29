"use strict";

/*
* En este archivo se encuentra la función elecciónBoton que recibe por argumentos el id de los botones.
*/
function eleccionBoton(id) {
    const palabra = document.getElementById("texto2").value;
    switch (id) {
        case 'contarApariciones':
            contarApariciones(texto.value, palabra);
            break;
        case 'contarPalabras':
            contarPalabras(texto.value);
            break;
        case 'invertir':
            invertir(texto.value);
            break;
        case 'palindromo':
            palindromo(texto.value);
            break;
    }
}