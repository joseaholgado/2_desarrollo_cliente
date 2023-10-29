"use strict";

function juego(){
    const opciones = ["piedra", "papel", "tijeras"];
    const numeroAleatorio = Math.floor(Math.random() * 3);
    return opciones[numeroAleatorio];
}