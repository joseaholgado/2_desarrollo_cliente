"use strict";

/**
 * Función para agregar una tarea a la lista de tareas por hacer.
 */
export function parahacer(listaTarea, tarea) {
    // Utiliza el método llenar de la ListaTarea para agregar la tarea a la lista de tareas por hacer.
    return listaTarea.llenar(tarea);
}
