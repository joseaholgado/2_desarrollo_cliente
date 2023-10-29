"use strict";
// Controla la animación de desplazamiento hacia la arriba de un elemento en una página web.
function deslizarArriba() {
    // Detiene cualquier intervalo previamente establecido
    clearInterval(intervalo);

    // Inicializa la posición y el intervalo de tiempo basado en el valor del elemento con ID "tiempo"
    posicion = 1;
    inputIntervalo = tiempo.value * 1000; // Multiplica el valor de "tiempo" por 1000 para obtener segundos

    // Configuración de propiedades CSS para la animación del slider hacia arriba
    marco.style.top = "0px"; // Establece la propiedad 'top' del elemento 'marco' a '0px'
    marco.style.flexDirection = "column"; // Define la dirección del contenedor 'marco' como 'column'

    // Establece un nuevo intervalo para la animación
    intervalo = setInterval(function () {
        // Actualiza la posición y la propiedad 'top' del elemento 'marco' para la animación
        posicion++;
        marco.style.transition = "top 1s linear"; // Define la animación de transición para el desplazamiento hacia arriba
        marco.style.top = 254 - posicion * 254 + "px"; // Modifica la propiedad 'top' del elemento 'marco' para simular el desplazamiento vertical

        // Reinicia la posición del slider y la posición 'bottom' si alcanza cierto punto
        if (posicion === 8) {
            posicion = 0;
            marco.style.bottom = "0px";
        }
    }, inputIntervalo); // Intervalo de tiempo para la animación en milisegundos
}