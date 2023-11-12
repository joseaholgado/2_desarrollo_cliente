"use strict";
//Funcion en cual se decide cual es el algoritmo para ganar o perder contra la máquina 
function resultado(opcionJugador, opcionComputadora) {
    // Si la opción del jugador es igual a la de la computadora, se produce un empate
    if (opcionJugador === opcionComputadora) {
        return "¡Empate!";
    }
    // Casos donde el jugador gana
    if (
        (opcionJugador === "piedra" && opcionComputadora === "tijeras") ||
        (opcionJugador === "piedra" && opcionComputadora === "lagarto") ||
        (opcionJugador === "tijeras" && opcionComputadora === "papel") ||
        (opcionJugador === "tijeras" && opcionComputadora === "lagarto") ||
        (opcionJugador === "papel" && opcionComputadora === "piedra") ||
        (opcionJugador === "papel" && opcionComputadora === "spock") ||
        (opcionJugador === "lagarto" && opcionComputadora === "spock") ||
        (opcionJugador === "lagarto" && opcionComputadora === "papel") ||
        (opcionJugador === "spock" && opcionComputadora === "tijeras") ||
        (opcionJugador === "spock" && opcionComputadora === "piedra")
    ) {
        return "¡Ganaste!";
    }
    // Si no es un empate y no se ha ganado, se asume que el jugador ha perdido
    return "¡Perdiste!";
}