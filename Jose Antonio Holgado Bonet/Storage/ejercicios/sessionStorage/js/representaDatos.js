"use strict";
/**
 * Crea y agrega una nueva fila a una tabla HTML representando los datos proporcionados.
 * La fila incluye campos para 'nombre' y 'edad', así como botones para borrar y actualizar.
 */
function representaDatos(dato) {
    // Crea elementos HTML para representar los datos en una fila de la tabla
    let linea = document.createElement("tr");
    let campoNombre = document.createElement("td");
    let campoEdad = document.createElement("td");
    let campoBorrar = document.createElement("td");
    let campoUpdate = document.createElement("td");
    let botonBorrar = document.createElement("button");
    let botonUpdate = document.createElement("button");

    // Crea imágenes para los botones de borrar y actualizar
    let imagenBorrar = document.createElement("img");
    let imagenUpdate = document.createElement("img");

    // Configura los campos de 'nombre' y 'edad' con los valores proporcionados en el objeto dato
    campoNombre.innerHTML = dato.nombre;
    campoEdad.innerHTML = dato.edad;

    // Configura el botón y la imagen para borrar
    botonBorrar.innerHTML = "Borrar";
    botonBorrar.style.backgroundColor = "#007BFF";
    botonBorrar.style.color = "#fff";
    botonBorrar.style.padding = "5px 10px";
    botonBorrar.style.border = "none";
    botonBorrar.style.borderRadius = "4px";
    botonBorrar.style.cursor = "pointer";
    botonBorrar.addEventListener("click", function () {
        borrarDato(dato.nombre);
    });

    imagenBorrar.src = "./img/delete.svg";
    imagenBorrar.width = "22";
    imagenBorrar.height = "22";
    imagenBorrar.style = "vertical-align: middle";

    // Configura el botón y la imagen para actualizar
    botonUpdate.innerHTML = "Update";
    botonUpdate.style.backgroundColor = "#007BFF";
    botonUpdate.style.color = "#fff";
    botonUpdate.style.padding = "5px 10px";
    botonUpdate.style.border = "none";
    botonUpdate.style.borderRadius = "4px";
    botonUpdate.style.cursor = "pointer";
    botonUpdate.addEventListener("click", function (){
        updateDato(dato.nombre, dato.edad);
    });

    imagenUpdate.src = "./img/update.svg";
    imagenUpdate.width = "22";
    imagenUpdate.height = "22";
    imagenUpdate.style = "vertical-align: middle";

    // Agrega los elementos a la fila de la tabla
    linea.appendChild(campoNombre);
    linea.appendChild(campoEdad);
    campoBorrar.appendChild(botonBorrar);
    campoBorrar.appendChild(imagenBorrar);
    campoUpdate.appendChild(botonUpdate);
    campoUpdate.appendChild(imagenUpdate);
    linea.appendChild(campoBorrar);
    linea.appendChild(campoUpdate);

    //Añade la el cuerpo al DOM
    cuerpo.appendChild(linea);
}
