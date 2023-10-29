"use strict";

function resultado(opcionJugador, opcionComputadora) {
    if (opcionJugador === opcionComputadora) {
        return "¡Empate!";
    }
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
    return "¡Perdiste!";
}