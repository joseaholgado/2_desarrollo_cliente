"use strict";

// Importar clases y funciones desde módulos
import { Pila } from './POO/Pila.js';
import { Cola } from './POO/Cola.js';
import { paraLavar } from './FuncionesPila/paraLavar.js';
import { lavar } from './FuncionesPila/lavar.js';
import { paraReparar } from './FuncionesCola/paraReparar.js';
import { reparar } from './FuncionesCola/reparar.js';
import { mostrarResPila } from './FuncionesPila/mostrarResPila.js';
import { generaN } from './FuncionesGlobales/aleatorio.js';
import { mostrarResCola } from './FuncionesCola/mostrarResCola.js';
import { mostrarResLista } from './FuncionesLista/mostrarResLista.js';
import { ListaTarea } from './POO/ListaTarea.js';
import { parahacer } from './FuncionesLista/parahacer.js';
import { cumplido } from './FuncionesLista/cumplido.js';
import { actualizarArray } from './FuncionesListaPrioridad/actualizarArray.js';
import { mostrarTareasSeleccionadas } from './FuncionesListaPrioridad/mostrarTarea.js';
import { eliminarTarea } from './FuncionesListaPrioridad/eliminarTarea.js';

//-----------------------------PILA LAVADORA---------------------------------//////////
const PRENDAS = [
    'CAMISA',
    'PANTALÓN',
    'CAMISETA',
    'TOALLA',
    'CALCETINES',
    'CHAQUETA',
    'BUFANDA',
    'SUDADERA',
    'CHALECO',
    'ABRIGO'
];

const cesto = new Pila();

// Evento para introducir una prenda en la lavadora
const introducir = document.getElementById("introducir");
introducir.addEventListener("click", function () {
    let prenda = PRENDAS[generaN(1, PRENDAS.length) - 1];
    paraLavar(cesto, prenda);
    mostrarResPila(cesto);
});

// Evento para obtener una prenda lavada
const obtener = document.getElementById("obtener");
obtener.addEventListener("click", function () {
    console.log(`He lavado: ${lavar(cesto)}`);
    mostrarResPila(cesto);
});

/////////////////---------------------------------COLA TALLER--------------------------/////////////////////
const MATRICULAS = [
    '12345-ABC',
    '23456-BCD',
    '34567-CDE',
    '45678-DEF',
    '56789-EFG',
    '67890-FGH',
    '78901-GHI',
    '89012-HIJ',
    '90123-IJK',
    '98765-JKL'
];
const taller = new Cola();

// Evento para que un coche llegue al taller
const llegada = document.getElementById("llegada");
llegada.addEventListener("click", function () {
    let coche = MATRICULAS[generaN(1, MATRICULAS.length) - 1];
    paraReparar(taller, coche);
    mostrarResCola(taller);
});

// Evento para atender un coche en el taller
const atender = document.getElementById("atender");
atender.addEventListener("click", function () {
    console.log(`He reparado: ${reparar(taller)}`);
    mostrarResCola(taller);
});

////-----------------------------LISTA TAREAS---------------------------------////////////////
const TAREAS = [
    '0-LLAMAR',
    '1-RECOGER',
    '2-ENTRENAR',
    '3-ORDENAR',
    '4-FREGAR',
    '5-COMPRAR',
    '6-LIMPIAR',
    '7-ESTUDIAR',
    '8-LAVARSE',
    '9-COMIDA'
];

const listaTarea = new ListaTarea();

// Evento para añadir una tarea a la lista
const anadir = document.getElementById("anadir");
anadir.addEventListener("click", function () {
    let tarea = TAREAS[generaN(1, TAREAS.length) - 1];
    parahacer(listaTarea, tarea);
    mostrarResLista(listaTarea);
});

// Evento para eliminar una tarea completada de la lista
const eliminar = document.getElementById("eliminar");
eliminar.addEventListener("click", function () {
    console.log(`He completado: ${cumplido(listaTarea)}`);
    mostrarResLista(listaTarea);
});
///-----------------------------LISTA PRIORIDADES---------------------------------////////////////


let listaTareas = [
    { posicion: 0, tarea: "HACER LA CAMA" },
    { posicion: 1, tarea: "IR AL SUPERMERCADO" },
    { posicion: 2, tarea: "ESTUDIAR" },
    { posicion: 3, tarea: "COCINAR" },
    { posicion: 4, tarea: "HACER EJERCICIO" },
    { posicion: 5, tarea: "LLAMAR A PACO" },
    { posicion: 6, tarea: "LEER" },
    { posicion: 7, tarea: "ORGANIZAR EL ARMARIO" },
    { posicion: 8, tarea: "VER UNA PELICULA" },
    { posicion: 9, tarea: "ESCRIBIR EN EL DIARIO" }
  ];
  
  let tareasSeleccionadas = [];
  
  const anadirPrior = document.getElementById('anadirPrior');
  anadirPrior.addEventListener("click", function () {
    actualizarArray(listaTareas, tareasSeleccionadas);
    mostrarTareasSeleccionadas(tareasSeleccionadas);
  });
  
  const eliminarPrior = document.getElementById('eliminarPrior');
  eliminarPrior.addEventListener("click", function () {
    eliminarTarea(tareasSeleccionadas);
    mostrarTareasSeleccionadas(tareasSeleccionadas);
  });


