"use strict"

function numeroAleatorio(min,max) {
    
    return Math.floor(Math.random( ) * (max - min+1)) + min;

}
function random(texto) {
    console.log(texto);
    console.log(numeroAleatorio(0,9));

    switch (numeroAleatorio(0,9)) {

        case 0:
            mayuscula(texto);
            break;
        case 1:
            minuscula(texto);
            break;
        case 2:
            mayusculaLetra(texto);
            break;
        case 3:
            mayusculaUltimaLetra(texto);
            break;
        case 4:
            minusculaLetra(texto);
            break;
        case 5:
            minusculaUltimaLetra(texto);
            break;
        case 6:
            mayusculaVocales(texto);
            break;
        case 7:
            minusculaVocales(texto);
            break;
        case 8:
            mayusculaConsonantes(texto);
            break;
        case 9:
            minusculaConsonantes(texto);
            break;
    }

    
}

// Función para ejecutar "random()" cada 2 segundos
function iniciarRandom() {
   let intervalo = setInterval(function () {
      random(texto.value);
    }, 2000); // 2000 milisegundos = 2 segundos
  }