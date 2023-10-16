"use strict";

let num1 = ''; // Usamos una cadena para almacenar los números
let num2 = '';
let operador = '';
let resultado = 0;
let memoria=0;
let tieneOperador = false;
let tieneLetras=false;


const pantallaAbajo = document.querySelector("[data-valor-inferior]");
const pantallaArriba = document.querySelector("[data-valor-superior]");
// Llamo a todos los elementos con la clase "boton"
const botones = document.querySelectorAll(".boton");

// Recorro cada botón y agrego un oyente de eventos clic
botones.forEach(function (boton) {
  boton.addEventListener("click", function () {
    eleccionBoton(this.textContent);
  });
});



