"use strict";

//let nombre= prompt("Escribe un nombre: ", "Jose");

let nombre;
let grabar = doucment.getElementById("grabar");

function guardar(){
    nombre=document.getElementById("nombre").value;
}

function saludar() {
    document.getElementById("salida").innerHTML=`Hola ${nombre}`;
}

function despedir(){
document.getElementById("salida").innerHTML=`Adios  ${nombre}`;
}
