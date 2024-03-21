"use strict";
//Función que verifica si el texto es un palíndromo
function palindromo(texto) {
    // Elimina los espacios en blanco y convierte a minúsculas
    texto = texto.toLowerCase().replace(/ /g, "");

    // Invierte la cadena
    const cadenaInvertida = texto.split("").reverse().join("");

    // Compara la cadena original con la cadena invertida
    if (texto == cadenaInvertida) {
        return document.getElementById("salida").innerHTML = "Sí, es un palíndromo";
    } else {
        return document.getElementById("salida").innerHTML = "No, no es un palíndromo";
    }
    
    
}

