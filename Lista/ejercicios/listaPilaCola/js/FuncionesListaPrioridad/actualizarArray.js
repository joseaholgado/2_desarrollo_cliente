"use strict";

/**
 * Función para actualizar un array de tareas seleccionadas tomando una tarea aleatoria de otra lista.
 */
export function actualizarArray(listaTareas, tareasSeleccionadas) {
    if (listaTareas.length > 0) {
        // Obtener un índice aleatorio dentro del rango de la lista de tareas.
        const indiceAleatorio = Math.floor(Math.random() * listaTareas.length);

        // Extraer la tarea aleatoria y almacenarla en el array de tareas seleccionadas.
        const tareaAleatoria = listaTareas.splice(indiceAleatorio, 1)[0];
        tareasSeleccionadas.push(tareaAleatoria);
    } else {
        // Mostrar un mensaje en el HTML si no hay más tareas para seleccionar.
        document.getElementById("resListaPrior2").innerHTML = "No hay más tareas para seleccionar.";
    }
}
