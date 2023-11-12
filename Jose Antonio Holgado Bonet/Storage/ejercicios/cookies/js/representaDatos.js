"use strict";

// Función que representa los datos en una tabla
function representaDatos(dato) {
    // Crear elementos HTML para representar los datos en una fila de la tabla
    let linea = document.createElement("tr");
    let campoClave = document.createElement("td");
    let campoValor = document.createElement("td");
    let campoBorrar = document.createElement("td");
    let campoUpdate = document.createElement("td");
    let botonBorrar = document.createElement("button");
    let botonUpdate = document.createElement("button");

    // Crear imágenes para los botones de borrar y actualizar
    let imagenBorrar = document.createElement("img");
    let imagenUpdate = document.createElement("img");

    // Configurar los campos de clave y valor con los datos proporcionados
    campoClave.innerHTML = dato[0]; // en dato[0] está la clave
    campoValor.innerHTML = dato[1]; // en dato[1] está el valor

    // Configurar el botón y la imagen para borrar
    botonBorrar.innerHTML = "Borrar";
    botonBorrar.style.backgroundColor = "#007BFF";
    botonBorrar.style.color = "#fff";
    botonBorrar.style.padding = "5px 10px";
    botonBorrar.style.border = "none";
    botonBorrar.style.borderRadius = "4px";
    botonBorrar.style.cursor = "pointer";
    botonBorrar.addEventListener("click", function () {
        borrarDato(dato[0]); // Llamar a la función borrarDato con la clave correspondiente
    });

    imagenBorrar.src = "./img/delete.svg";
    imagenBorrar.width = "22";
    imagenBorrar.height = "22";
    imagenBorrar.style = "vertical-align: middle";

    // Configurar el botón y la imagen para actualizar
    botonUpdate.innerHTML = "Update";
    botonUpdate.style.backgroundColor = "#007BFF";
    botonUpdate.style.color = "#fff";
    botonUpdate.style.padding = "5px 10px";
    botonUpdate.style.border = "none";
    botonUpdate.style.borderRadius = "4px";
    botonUpdate.style.cursor = "pointer";
    botonUpdate.addEventListener("click", function () {
        updateDato(dato[0], dato[1]); // Llamar a la función updateDato con la clave y valor correspondientes
    });

    imagenUpdate.src = "./img/update.svg";
    imagenUpdate.width = "22";
    imagenUpdate.height = "22";
    imagenUpdate.style = "vertical-align: middle";

    // Añadir los elementos a la fila de la tabla
    linea.appendChild(campoClave);
    linea.appendChild(campoValor);
    campoBorrar.appendChild(botonBorrar);
    campoBorrar.appendChild(imagenBorrar);
    campoUpdate.appendChild(botonUpdate);
    campoUpdate.appendChild(imagenUpdate);
    linea.appendChild(campoBorrar);
    linea.appendChild(campoUpdate);

    // Añadiendo el cuerpo de la tabla al DOM
    cuerpo.appendChild(linea);
}
