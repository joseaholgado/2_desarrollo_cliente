"use strict"

//Esta función me crea un numero random entre 0 y 9
function numeroAleatorio(min, max) {

    return Math.floor(Math.random() * (max - min + 1)) + min;

}
//Función para generar de forma aleatoria una función de las letras, utilizando un switch
function random(texto) {
    console.log(texto);
    console.log(numeroAleatorio(0, 9));

    switch (numeroAleatorio(0, 9)) {

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
let intervalo;
// Función para ejecutar "random()" cada 2 segundos
function iniciarRandom() {
    parar();
    intervalo = setInterval(function () {
        random(texto.value);
    }, 2000); // 2000 milisegundos = 2 segundos

}

//Función para parar el intervalo
function parar() {
    clearInterval(intervalo);
    
}


//Funcion para ejecutar "rapido()" cada medio segundo
function rapido() {
    console.log(intervalo);
    if (intervalo != null) {
        parar();
        intervalo = setInterval(function () {
            random(texto.value);
        }, 500); // 500 milisegundos = medio segundo
    }
}

//Funcion para ejecutar "lento()" cada 4 segundo
function lento() {
    console.log(intervalo);
    if (intervalo != null) {
        console.log(intervalo);
        parar();
        // Establece un intervalo más largo 
        intervalo = setInterval(function () {
            random(texto.value);
        }, 4000); // Cambia a 4 segundos para hacerlo más lento
    }
};
