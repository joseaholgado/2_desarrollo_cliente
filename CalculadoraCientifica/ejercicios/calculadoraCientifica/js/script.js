// Declaración de variables para rastrear números, operadores y resultados
let num1 = '';
let num2 = '';
let operador = '';
let resultado = 0;
let memoria = 0;
let tieneOperador = false;
let tieneLetras = false;
let operadorEspecial = '';
let guardado = 0;

// Selección de elementos HTML para mostrar resultados en la calculadora
const pantallaAbajo = document.querySelector("[data-valor-inferior]");
const pantallaArriba = document.querySelector("[data-valor-superior]");

// Selección de todos los elementos con la clase "boton" (botones de la calculadora)
const botones = document.querySelectorAll(".boton");

// Agregando un oyente de eventos de clic a cada botón
botones.forEach(function (boton) {
  boton.addEventListener("click", function () {
    eleccionBoton(this.textContent);
  });
});

// Función eleccionBoton: maneja los eventos de clic en los botones de la calculadora
function eleccionBoton(valor) {
  // El código para manejar eventos de clic en los botones de la calculadora se implementa aquí
}