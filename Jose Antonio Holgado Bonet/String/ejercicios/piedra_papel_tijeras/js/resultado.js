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
        (opcionJugador === "papel" && opcionComputadora === "piedra") ||
        (opcionJugador === "tijeras" && opcionComputadora === "papel")
    ) {
        return "¡Ganaste!";
    }

    // Si no es un empate y no se ha ganado, se asume que el jugador ha perdido
    return "¡Perdiste!";
}