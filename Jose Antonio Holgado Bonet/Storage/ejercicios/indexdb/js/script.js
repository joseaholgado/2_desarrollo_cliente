'use strict';
// Declaración de variables para la gestión de IndexedDB
let datos = [];
let solicitudDB,
    bd,
    canalBD;
let nombreBD = "DATOS";
let versionBD = 1;
let tablaBD = "datos";

// Apertura de la base de datos o creación si no existe
solicitudDB = indexedDB.open(nombreBD, versionBD);

// Manejo de errores durante la apertura de la base de datos
solicitudDB.onerror = function (event) {
    console.error(`IndexedDB error: ${event.target.errorCode}`);
};

// Manejo de éxito en la apertura de la base de datos
solicitudDB.onsuccess = function (event) {
    console.info('Conexión satisfactoria');
    bd = event.target.result;
    mostrarDatos(); // MUESTRO LOS DATOS después de la conexión exitosa
};

// Configuración de la base de datos durante la actualización (o creación)
solicitudDB.onupgradeneeded = function (event) {
    console.info('Base de datos creada');
    bd = event.target.result;

    // Creación de un almacén de objetos (Object Store) con índices
    let registros = bd.createObjectStore(tablaBD, { keyPath: "id", autoIncrement: true });
    registros.createIndex("nombre", "nombre", { unique: false });
    registros.createIndex("edad", "edad", { unique: false });

    // Evento completado para indicar que la creación ha terminado
    registros.oncompleted = function (event) {
        console.info('Almacén de datos creado');
    }
};

// DATOS
const nombreInput = document.getElementById("nombre");
const edadInput = document.getElementById("edad");

// GUARDAR
const guardar = document.getElementById("guardar");
guardar.addEventListener("click", function () {
    grabarDato(nombreInput.value, edadInput.value);
});

// BORRAR
const borrar = document.getElementById("borrar");
borrar.addEventListener("click", function () {
    borrarDato(nombreInput.value);
});