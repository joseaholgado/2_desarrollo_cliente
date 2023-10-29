"use strict";

function juego(){
    const opciones = ["piedra", "papel", "tijeras", "lagarto", "spock"];
    const numeroAleatorio = Math.floor(Math.random() * 5);
    return opciones[numeroAleatorio];
}