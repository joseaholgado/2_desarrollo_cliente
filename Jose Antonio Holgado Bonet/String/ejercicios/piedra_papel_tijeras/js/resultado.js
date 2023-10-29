"use strict";

function resultado(opcionJugador, opcionComputadora) {
    if (opcionJugador === opcionComputadora) {
        return "¡Empate!";
    }
    if (
        (opcionJugador === "piedra" && opcionComputadora === "tijeras") ||
        (opcionJugador === "papel" && opcionComputadora === "piedra") ||
        (opcionJugador === "tijeras" && opcionComputadora === "papel")
    ) {
        return "¡Ganaste!";
    }
    return "¡Perdiste!";
}