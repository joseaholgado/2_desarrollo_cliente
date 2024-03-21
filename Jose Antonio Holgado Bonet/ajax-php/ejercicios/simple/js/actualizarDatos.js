"use strict";

// Definimos la función actualizarDatos
function actualizarDatos() {
    // Recogemos los datos actualizados de los campos de entrada del usuario

    // Obtenemos el valor del elemento con id "valorX"
    let dvalorX = document.getElementById("valorX").value;
    // Obtenemos el valor del elemento con id "valorY1"
    let dvalorY1 = document.getElementById("valorY1").value;
    // Obtenemos el valor del elemento con id "valorY2"
    let dvalorY2 = document.getElementById("valorY2").value;

    // Creamos un objeto con los datos recogidos
    let datos = {
        "dvalorX": dvalorX,
        "dvalorY1": dvalorY1,
        "dvalorY2": dvalorY2
    };

    // Enviamos una petición AJAX para actualizar los datos en el servidor
    // llamadaAjax es una función que realiza la petición AJAX
    // './php/actualizarAjax.php' es la ruta al script PHP que maneja la actualización de los datos
    // datos es el objeto que contiene los datos a actualizar
    // 'post' es el método HTTP que se utiliza para la petición
    let peticionAjax = llamadaAjax('./php/actualizarAjax.php', datos, 'post');

    // Cuando la petición AJAX se completa con éxito, se ejecuta esta función
    peticionAjax.done(function (data) {
        // Imprimimos un mensaje en la consola
        console.log("Datos actualizados...");
        // Opcionalmente, recargamos o refrescamos la tabla para reflejar los cambios
        mostrarDatos();
    });

    // Si la petición AJAX falla, se ejecuta esta función
    peticionAjax.fail(function (data) {
        // Imprimimos un mensaje de error en la consola
        console.log("Error updating data...");
        // Imprimimos los datos del error en la consola
        console.log(data);
    });
}

