"use strict";

// Importa la clase Lista desde el archivo './Lista.js'
import { Lista } from './Lista.js';

/**
 * Clase ListaTarea que representa una lista de tareas que hereda de la clase Lista.
 */
export class ListaTarea extends Lista {
    
    constructor() {
        // Llama al constructor de la clase padre (Lista) para inicializar la lista.
        super();
    }

    /**
     * Método para llenar la lista de tareas con un elemento en la última posición.
     */
    llenar(elemento) {
        return super.enlistar(elemento, super.tamano());
    }

    /**
     * Método para vaciar la lista de tareas eliminando un elemento de la última posición.
     * El método elige aleatoriamente entre usar la lógica de una cola o una pila para eliminar el elemento.
     
     */
    vaciar() {
        if (Math.random() < 0.5) {
            console.log("cola");
            return super.desenlistar(super.tamano() - 1);
        } else {
            console.log("pila");
            return super.desenlistarPila(super.tamano() - 1);
        }
    }

    ojear() {
        // Utiliza el método ojear de la clase Lista para obtener el último elemento.
        return super.ojear(super.tamano() - 1);
    }
}
