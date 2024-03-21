"use strict";
//Funcion que hace que aleatoriamente la maquina eliga una posicion del array
function juego() {
    const opciones = ["piedra", "papel", "tijeras"];
    const numeroAleatorio = Math.floor(Math.random() * 3); // Genera un número aleatorio entre 0 y 2
    return opciones[numeroAleatorio]; // Retorna una opción aleatoria del array 'opciones'
}