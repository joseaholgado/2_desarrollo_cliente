"use strict";

/**
 * Función para agregar una prenda al cesto de ropa para lavar (pila de lavado).
 */
export function paraLavar(cesto, prenda) {
    // Utiliza el método apilar de la pila para agregar la prenda al cesto de ropa para lavar.
    return cesto.apilar(prenda);
}