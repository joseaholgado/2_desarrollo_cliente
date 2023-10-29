"use strict";

//Funcion que me cuenta las vocales, consonantes y palabras del texto
function contarPalabras(texto) {
    // Inicializamos las variables para contar vocales, consonantes y palabras.
    let vocales = 0;
    let consonantes = 0;
    let palabras = 0;
    
    // Convertimos el texto a minúsculas para simplificar el conteo de vocales y consonantes.
    const textoMin = texto.toLowerCase();

    // Usamos una expresión regular para buscar todas las consonantes en el texto.
    const consonantesEncontradas = textoMin.match(/[b-df-hj-np-tv-z]/g);

    // Dividimos el texto en palabras usando espacios como separadores.
    const textoPal = texto.split(" ");

    // Contamos la cantidad de palabras en el texto.
    palabras = textoPal.length;

    // Iteramos a través de cada caracter en el texto para contar las vocales.
    for (let i = 0; i < textoMin.length; i++) {
        if (textoMin[i] == 'a' || textoMin[i] == 'e' || textoMin[i] == 'i' || textoMin[i] == 'o' || textoMin[i] == 'u') {
            vocales++;
        }
    }

    // Usamos el operador ternario para verificar si se encontraron consonantes y obtener su cantidad.
    consonantes = consonantesEncontradas ? consonantesEncontradas.length : 0;

    // Mostramos los resultados en el elemento con id "salida".
    document.getElementById("salida").innerHTML = "Se han encontrado vocales " + vocales + " veces. <br>" +
                                                  "Se han encontrado consonantes " + consonantes + " veces. <br>" +
                                                  "Se han encontrado palabras " + palabras + " veces.";
}
