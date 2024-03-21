"use strict";
// Muestra en el elemento con el ID 'mensaje' el resultado del juego junto con las elecciones del jugador y la computadora
function mostrar(resultado, opcionJugador, opcionComputadora) {
    mensaje.innerHTML = `Tu elegiste ${opcionJugador}, la computadora eligió ${opcionComputadora}. Resultado: ${resultado}`;
}