"use strict"
// Importamos la clase Lista, asumiendo que está definida en otro archivo
import {Lista} from './Lista.js';

// Definición de la clase Cola que extiende de la clase Lista
export class Cola extends Lista {
    // El constructor de la cola simplemente invoca al constructor de la clase Lista
    constructor() {
        super();
    }

    encolar(elemento) {
        // Utiliza el método enlistar de la clase Lista para agregar el elemento al inicio (posición 0)
        return super.enlistar(elemento, 0);
        
    }

    desencolar() {
        // Utiliza el método desenlistar de la clase Lista para quitar el elemento al final (última posición)
        return super.desenlistar(super.tamano() - 1);
        
    }

    ojear() {
        // Utiliza el método ojear de la clase Lista para obtener el elemento en la primera posición
        return super.ojear(0);
       
    }
}