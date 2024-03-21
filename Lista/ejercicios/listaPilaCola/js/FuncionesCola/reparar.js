"use strict";

/**
 * Función para retirar y reparar el primer coche en la cola de reparación.
 */
export function reparar(taller) {
    // Utiliza el método desencolar de la cola para retirar el primer coche en la cola para reparar.
    return taller.desencolar();
}
