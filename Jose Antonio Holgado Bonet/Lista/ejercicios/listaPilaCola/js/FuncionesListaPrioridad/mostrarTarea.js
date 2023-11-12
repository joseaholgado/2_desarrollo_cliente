"use strict";

/**
 * Función para mostrar las tareas seleccionadas en el HTML.
 */
export function mostrarTareasSeleccionadas(tareasSeleccionadas) {
    // Obtiene el elemento del HTML donde se mostrarán las tareas seleccionadas.
    const listaTareasSeleccionadas = document.getElementById("resListaPrior");
    
    // Limpia el contenido actual del elemento.
    listaTareasSeleccionadas.innerHTML = "";

    // Itera sobre el array de tareas seleccionadas y crea elementos de lista para cada tarea.
    for (let i = 0; i < tareasSeleccionadas.length; i++) {
        const listItem = document.createElement("li");
        // Muestra la información de la tarea en el elemento de lista.
        listItem.textContent = `Tarea ${tareasSeleccionadas[i].posicion}: ${tareasSeleccionadas[i].tarea}`;
        // Agrega el elemento de lista al contenedor en el HTML.
        listaTareasSeleccionadas.appendChild(listItem);
    }
}
