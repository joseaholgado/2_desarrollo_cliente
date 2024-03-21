"use strict";
//Funcion que hace que aleatoriamente la maquina eliga una posicion del array
function juego(){
    const opciones = ["piedra", "papel", "tijeras", "lagarto", "spock"];
    const numeroAleatorio = Math.floor(Math.random() * 5); // Genera un número aleatorio entre 0 y 4
    return opciones[numeroAleatorio]; // Retorna una opción aleatoria del array 'opciones'
}