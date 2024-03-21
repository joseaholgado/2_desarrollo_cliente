'use strict';

function visualizarDatos(data) {
    console.log("Visualizando datos...");
    const cuerpo = document.getElementById("cuerpo"); // cuerpo = document.getElementById("cuerpo");
    cuerpo.innerHTML = "Los datos almacenados son: <br />";
    
    for (let row of data) { // RECORRO CADA UNO DE LOS 10 REGISTROS
        var linea = document.createElement("tr"), // creo una fila
            campoValorX = document.createElement("td"), // creo una celda para el valor1
            campoValorY1 = document.createElement("td"), // creo una celda para la valor2
            campoValorY2 = document.createElement("td"), // creo una celda para la valor3
            campoBorrar = document.createElement("td"), // creo una celda para el botón 'borrar'
            botonBorrar = document.createElement("input"), // creo un botón
            imagenBorrar = document.createElement("img"), // creo una imagen
            campoUpdate = document.createElement("td"), // creo una celda para el botón 'update'
            botonUpdate = document.createElement("input"), // creo un botón
            imagenUpdate = document.createElement("img"); // creo una imagen

        campoValorX.innerHTML = row[0]; // escribo el valor1 contenido en el array
        campoValorY1.innerHTML = row["valorY1"]; // escribo el valor2 contenido en el array
        campoValorY2.innerHTML = row[2]; // escribo el valor3 contenido en el array

        //-------------borrar-----------/////
        botonBorrar.type = "button";
        botonBorrar.id = "borrar";
        botonBorrar.value = "Borrar";
        botonBorrar.addEventListener('click', function () { // añado al botón un evento de escucha (listener)
            borrarDatos(row["valorX"]); // la función 'forEach' tiene una variable 'posición', la cuál uso para saber el elemento que he de borrar
        });

        imagenBorrar.src = "./img/delete.svg"; // añado al botón una imagen
        imagenBorrar.alt = "Borrar";
        imagenBorrar.width = "22"; // añado al botón los estilos
        imagenBorrar.height = "22";
        imagenBorrar.style = "vertical-align: middle";

        campoBorrar.appendChild(botonBorrar); // añado el botón a la celda
        campoBorrar.appendChild(imagenBorrar); // añado la imagen al botón

       

        //---------------------------update------------------------------//
        botonUpdate.type = "button";
        botonUpdate.id = "update";
        botonUpdate.value = "Update";
        botonUpdate.addEventListener('click', function () { // añado al botón un evento de escucha (listener)      
            updateDatos(row["valorX"],row["valorY1"],row["valorY2"]); // la función 'forEach' tiene una variable 'posición', la cuál uso para saber el elemento que he de borrar
        });
        
        imagenUpdate.src = "./img/update.svg"; // añado al botón una imagen
        imagenUpdate.alt = "Update";
        imagenUpdate.width = "22"; // añado al botón los estilos
        imagenUpdate.height = "22";
        imagenUpdate.style = "vertical-align: middle";

        campoUpdate.appendChild(botonUpdate); // añado el botón a la celda
        campoUpdate.appendChild(imagenUpdate); // añado la imagen al botón

        linea.appendChild(campoValorX); // añado a la línea la celda con el valor1
        linea.appendChild(campoValorY1); // añado a la línea la celda con el valor2
        linea.appendChild(campoValorY2); // añado a la línea la celda con el valor3
        linea.appendChild(campoBorrar); // añado a la línea la celda con el botón
        linea.appendChild(campoUpdate); // añado a la línea la celda con el botón

        cuerpo.appendChild(linea); // añado al tbody 'cuerpo' la línea
    }
}