"use strict";

// Importa la clase Lista desde el archivo './Lista.js'
import { Lista } from './Lista.js';

/**
 * Clase Pila que representa una pila que hereda de la clase Lista.
 */
export class Pila extends Lista {
   
    constructor() {
        // Llama al constructor de la clase padre (Lista) para inicializar la lista.
        super();
    }

  
    apilar(elemento) {
        // Utiliza el método enlistar de la clase Lista para agregar el elemento al final de la lista.
        return super.enlistar(elemento, super.tamano());
    }

   
    desapilar() {
        // Utiliza el método desenlistarPila de la clase Lista para quitar el último elemento de la lista.
        return super.desenlistarPila(super.tamano() - 1);
    }

    
    ojear() {
        // Utiliza el método ojear de la clase Lista para obtener el último elemento de la lista.
        return super.ojear(super.tamano() - 1);
    }
}
