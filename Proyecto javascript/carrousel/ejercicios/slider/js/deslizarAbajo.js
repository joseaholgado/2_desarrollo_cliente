"use strict";

// Controla la animación de desplazamiento hacia abajo de un elemento en una página web.
function deslizarAbajo() {
    // Detiene cualquier intervalo previamente establecido
    clearInterval(intervalo);

    // Inicializa la posición y el intervalo de tiempo basado en el valor del elemento con ID "tiempo"
    posicion = 0;
    inputIntervalo = tiempo.value * 1000; // Multiplica el valor de "tiempo" por 1000 para obtener segundos

    // Configuración de propiedades CSS para la animación del slider hacia abajo
    marco.style.top = "-1778px"; // Establece la propiedad 'top' del elemento 'marco' a -1778px para posicionarlo inicialmente fuera de la pantalla
    marco.style.flexDirection = "column-reverse"; // Define la dirección del contenedor 'marco' como 'column-reverse'
    marco.style.left = "0px"; // Inicializa la posición 'left' del elemento 'marco' a '0px'

    // Establece un nuevo intervalo para la animación
    intervalo = setInterval(function () {
        // Actualiza la posición y la propiedad 'top' del elemento 'marco' para la animación
        posicion++;
        marco.style.transition = "top 1s linear"; // Define la animación de transición para el desplazamiento hacia abajo
        marco.style.top = -1778 + posicion * 254 + "px"; // Modifica la propiedad 'top' del elemento 'marco' para simular el desplazamiento vertical

        // Reinicia la posición del slider si alcanza cierto punto
        if (posicion === 8) {
            posicion = 0;
            marco.style.top = "0px"; // Restablece la propiedad 'top' del elemento 'marco' a '0px' para reiniciar el desplazamiento
        }
    }, inputIntervalo); // Intervalo de tiempo para la animación en milisegundos
}
