"use strict";

/**
 * Clase Lista que representa una lista genérica.
 */
export class Lista {
   
    constructor() {
        // Inicializa una nueva instancia de un array para almacenar los elementos de la lista.
        this.lista = new Array();
    }

    /**
     * Método para agregar un elemento en una posición específica de la lista.
     */
    enlistar(elemento, posicion) {
        return this.lista.splice(posicion, 0, elemento);
    }

    /**
     * Método para quitar y devolver el primer elemento de la lista (utilizado en la implementación de una pila).
     */
    desenlistarPila(posicion) {
        return this.lista.shift(posicion);
    }

    /**
     * Método para quitar un elemento de la lista en una posición específica.
     */
    desenlistar(posicion) {
        return this.lista.splice(posicion, 1);
    }

    /**
     * Método para quitar un elemento de la lista en una posición específica (utilizado en la implementación de una lista de prioridades).
     */
    eliminarPrior(posicion) {
        return this.lista.splice(posicion, 1);
    }

    /**
     * Método para obtener el elemento en una posición específica de la lista.
     */
    ojear(posicion) {
        return this.lista[posicion];
    }

    /**
     * Método que indica si la lista está vacía.
     * @returns {boolean} - `true` si la lista está vacía, `false` de lo contrario.
     */
    vacia() {
        return (this.lista.length === 0);
    }

    /**
     * Método que devuelve la cantidad de elementos en la lista.
     * @returns {number} - La longitud de la lista.
     */
    tamano() {
        return this.lista.length;
    }

    /**
     * Método para mostrar la lista en la consola y actualizar un elemento en el HTML.
     */
    mostrarPila() {
        console.log(this.lista);
        document.getElementById("resPila").innerHTML = this.lista;
        if (this.lista.length >= 10) {
            document.getElementById("pilaLleno").innerHTML = `EMPIEZA A LAVAR GUARRO!`;
        } else {
            document.getElementById("pilaLleno").innerHTML = ``;
        }
    }

    /**
     * Método para mostrar la lista en la consola y actualizar un elemento en el HTML.
     */
    mostrarCola() {
        console.log(this.lista);
        document.getElementById("resCola").innerHTML = this.lista;
        if (this.lista.length >= 10) {
            document.getElementById("colaLleno").innerHTML = `EMPIEZA A REPARAR FLOJO!`;
        } else {
            document.getElementById("colaLleno").innerHTML = ``;
        }
    }

    /**
     * Método para mostrar la lista en la consola y actualizar un elemento en el HTML.
     */
    mostrarResLista() {
        console.log(this.lista);
        document.getElementById("resLista").innerHTML = this.lista;
        if (this.lista.length >= 10) {
            document.getElementById("listaLleno").innerHTML = `EMPIEZA A HACER LAS TAREAS!`;
        } else {
            document.getElementById("listaLleno").innerHTML = ``;
        }
    }
}
