"use strict";
document.addEventListener("DOMContentLoaded", function () {
    // Obtén una referencia al elemento de la imagen ampliada
    const imagenAmpliada = document.getElementById("imagen-ampliada");
  
    // Obtén una lista de todas las miniaturas
    const miniaturas = document.querySelectorAll(".miniatura");
    const miniaturas2 = document.querySelectorAll(".miniatura2");
  
    // Agrega un escuchador de eventos "click" a cada miniatura
    miniaturas.forEach(function (miniatura) {
      miniatura.addEventListener("click", function () {
        // Obtén la ruta de la imagen de la miniatura
        const rutaImagen = miniatura.querySelector("img").getAttribute("src");
        // Muestra la imagen en el div de la imagen ampliada
        imagenAmpliada.src = rutaImagen;
      });
    });
  
    // Agrega un escuchador de eventos "click" a las miniaturas del segundo grupo
    miniaturas2.forEach(function (miniatura) {
      miniatura.addEventListener("click", function () {
        // Obtén la ruta de la imagen de la miniatura
        const rutaImagen = miniatura.querySelector("img").getAttribute("src");
        // Muestra la imagen en el div de la imagen ampliada
        imagenAmpliada.src = rutaImagen;
      });
    });
  });
  


