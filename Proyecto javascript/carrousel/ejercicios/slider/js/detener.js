"use strict";

//Esta función se encarga de detener un intervalo de tiempo que se ha establecido. Utiliza la función clearInterval()
// de JavaScript para eliminar el intervalo identificado por la variable intervalo. Cuando se llama a detener(), 
//detiene el intervalo que ha sido previamente configurado.
function detener(){

    clearInterval(intervalo);
}

//Esta función también detiene un intervalo de tiempo, similar a la función detener().
// Sin embargo, esta función toma un parámetro intervalo, que es el ID del intervalo a ser eliminado. 
//Utiliza clearInterval() con el intervalo proporcionado para detener el intervalo
function limpiarIntervalo(intervalo) {
    clearInterval(intervalo);
}
