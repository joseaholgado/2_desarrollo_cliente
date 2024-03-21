"use strict";
// Controla la animación de desplazamiento hacia la derecha de un elemento en una página web.
function deslizarDer() {
    // Detiene cualquier intervalo previamente establecido
    clearInterval(intervalo);

    // Inicializa la posición y el intervalo de tiempo basado en el valor del elemento con ID "tiempo"
    posicion = 0;
    inputIntervalo = tiempo.value * 1000; // Multiplica el valor de "tiempo" por 1000 para obtener segundos

    // Configuración de propiedades CSS para la animación del slider hacia la derecha
    marco.style.top = "0px"; // Establece la propiedad 'top' del elemento 'marco' a '0px'
    marco.style.flexDirection = "row-reverse"; // Define la dirección del contenedor 'marco' como 'row-reverse'
    marco.style.left = "0px"; // Inicializa la posición 'left' del elemento 'marco' a '0px'

    // Establece un nuevo intervalo para la animación
    intervalo = setInterval(function () {
        // Actualiza la posición y la propiedad 'left' del elemento 'marco' para la animación
        posicion++;
        marco.style.transition = "left 1s linear"; // Define la animación de transición para el desplazamiento hacia la derecha
        marco.style.left = posicion * 300 + "px"; // Modifica la propiedad 'left' del elemento 'marco' para simular el desplazamiento horizontal

        // Reinicia la posición del slider y la posición 'left' si alcanza cierto punto
        if (posicion === 8) {
            posicion = 0;
            marco.style.left = "0px";
        }
    }, inputIntervalo); // Intervalo de tiempo para la animación en milisegundos
}