"use strict";

/**
 * Elimina la tarea de mayor prioridad del array de tareas seleccionadas.
 */
export function eliminarTarea(tareasSeleccionadas) {
  if (tareasSeleccionadas.length > 0) {
      // Encontrar la tarea de mayor prioridad
      let tareaMayorPrioridad = tareasSeleccionadas[0];
      let indiceMayorPrioridad = 0;

      for (let i = 1; i < tareasSeleccionadas.length; i++) {
          if (tareasSeleccionadas[i].posicion > tareaMayorPrioridad.posicion) {
              tareaMayorPrioridad = tareasSeleccionadas[i];
              indiceMayorPrioridad = i;
          }
      }

      // Eliminar la tarea de mayor prioridad del array
      tareasSeleccionadas.splice(indiceMayorPrioridad, 1);
  } else {
      // Muestra un mensaje en la consola si no hay tareas seleccionadas para eliminar.
      document.getElementById("resListaPrior2").innerHTML ="No hay tareas seleccionadas para eliminar.";
  }
}
