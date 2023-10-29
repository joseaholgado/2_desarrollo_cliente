"use strict";


//La función deslizarIzq() realiza la animación de deslizamiento hacia la izquierda de un elemento en una página web.
function deslizarIzq() {
    // Detiene cualquier intervalo previamente establecido
    clearInterval(intervalo);

    // Inicializa la posición y el intervalo de tiempo basado en el valor del elemento con ID "tiempo"
    posicion = 1;
    inputIntervalo = tiempo.value * 1000; // Multiplica el valor de "tiempo" por 1000 para obtener segundos

    // Configura propiedades CSS para la animación del slider hacia la izquierda
    marco.style.top = "0px";
    marco.style.flexDirection = "row";
    marco.style.left = "0px";

    // Establece un nuevo intervalo para la animación
    intervalo = setInterval(function () {
        // Actualiza la posición y la propiedad left del elemento 'marco' para la animación
        posicion++;
        marco.style.transition = "left 1s linear";
        marco.style.left = 300 - posicion * 300 + "px";

        // Reinicia la posición del slider y la posición left si alcanza cierto punto
        if (posicion === 9) {
            posicion = 0;
            marco.style.left = "0px";
        }

        // Muestra la descripción para los elementos 'buho' y 'panda'
        mostrarDescripcion("buho");
        mostrarDescripcion("panda");
    }, inputIntervalo); // Intervalo de tiempo para la animación en milisegundos
}
