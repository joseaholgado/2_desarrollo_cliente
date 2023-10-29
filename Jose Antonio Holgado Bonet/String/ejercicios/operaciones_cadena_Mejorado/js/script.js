"use strict"
//En este archivo estará todos los Listeners
let texto=document.getElementById("texto");
const texto2=document.getElementById("texto2");
const salida = document.querySelector("#salida");


const botones = document.querySelectorAll(".boton");

botones.forEach(function (boton) {
    boton.addEventListener("click", function () {
      eleccionBoton(this.id);
    });
  });
console.log(texto);
function eleccionBoton(id, texto, texto2){
    
}
//Agrega el archivo de cargar API
document.getElementById("cargarApi").addEventListener("click", function(event){
    solicitar(texto);
    
});


