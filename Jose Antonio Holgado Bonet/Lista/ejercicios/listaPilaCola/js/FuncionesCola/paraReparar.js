"use strict";

import { Cola } from '../POO/Cola.js';

/**
 * Función para agregar un coche a la cola de coches para reparar.
 */
export function paraReparar(taller, coche) {
    // Utiliza el método encolar de la cola para agregar el coche a la cola para reparar.
    return taller.encolar(coche);
}
