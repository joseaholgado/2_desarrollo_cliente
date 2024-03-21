"use strict";

// Función para mostrar datos en la interfaz
function mostrarDatos() {
    console.log("Mostrando datos...");
    const cuerpo = document.getElementById("cuerpo");
    cuerpo.innerHTML = "Los datos almacenados son: <br />";

    // Apertura de la base de datos para lectura
    solicitudDB = indexedDB.open(nombreBD, versionBD);

    // Manejo de errores durante la apertura de la base de datos
    solicitudDB.onerror = function (event) {
        console.error(`IndexedDB error: ${event.target.errorCode}`);
    };

    // Manejo de éxito en la apertura de la base de datos para lectura
    solicitudDB.onsuccess = function (event) {
        bd = event.target.result;
        canalBD = bd.transaction(tablaBD, "readonly").objectStore(tablaBD);
        
         // Obtención de todos los registros en el almacén de objetos
        canalBD.getAll().onsuccess = function (event) {
            let registros = event.target.result;

            // Iteración sobre los registros para mostrarlos en la interfaz
            for (let registro of registros) {
                let linea = document.createElement("tr"),
                    campoNombre = document.createElement("td"),
                    campoClave = document.createElement("td"),

                    campoBorrar = document.createElement("td"),
                    botonBorrar = document.createElement("button"),
                    imagenBorrar = document.createElement("img");

                let campoUpdate = document.createElement("td"),
                    botonUpdate = document.createElement("button"),
                    imagenUpdate = document.createElement("img");

                campoNombre.innerHTML = registro.nombre;
                campoClave.innerHTML = registro.edad;

                botonBorrar.textContent = "Borrar ";
                botonBorrar.className = "borrar";
                botonBorrar.style.backgroundColor = "#007BFF";
                botonBorrar.style.color = "#fff";
                botonBorrar.style.padding = "5px 10px";
                botonBorrar.style.border = "none";
                botonBorrar.style.borderRadius = "4px";
                botonBorrar.style.cursor = "pointer";
                botonBorrar.addEventListener('click', function () {
                    borrarDato(registro.id);
                });

                imagenBorrar.src = "./img/delete.svg";
                imagenBorrar.width = "22";
                imagenBorrar.height = "22";
                imagenBorrar.style = "vertical-align: middle";

                botonUpdate.textContent = "Update ";
                botonUpdate.className = "update";
                botonUpdate.style.backgroundColor = "#007BFF";
                botonUpdate.style.color = "#fff";
                botonUpdate.style.padding = "5px 10px";
                botonUpdate.style.border = "none";
                botonUpdate.style.borderRadius = "4px";
                botonUpdate.style.cursor = "pointer";
                botonUpdate.addEventListener('click', function () {
                    updateDato(registro.id, nombreInput.value, edadInput.value);
                });

                imagenUpdate.src = "./img/update.svg";
                imagenUpdate.width = "22";
                imagenUpdate.height = "22";
                imagenUpdate.style = "vertical-align: middle";

                campoBorrar.appendChild(botonBorrar);
                botonBorrar.appendChild(imagenBorrar);
                campoUpdate.appendChild(botonUpdate);
                botonUpdate.appendChild(imagenUpdate);

                linea.appendChild(campoNombre);
                linea.appendChild(campoClave);
                linea.appendChild(campoBorrar);
                linea.appendChild(campoUpdate);

                cuerpo.appendChild(linea);
            }
        }
    };
}