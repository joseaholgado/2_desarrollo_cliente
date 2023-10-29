"use strict";

// Obtiene referencias a elementos del HTML
let marco = document.getElementById("marco"); //Variable para almacenar el marco con el id
let tiempo = document.getElementById("tiempo");//Variable para almacenar el tiempo con el id
let botones = document.querySelectorAll(".slider")//Variable para almacenar todos los elementos de "slider" 
let intervalo;// Variable para almacenar un intervalo de tiempo
let posicion; // Variable para almacenar alguna posición
let inputIntervalo;// Variable para almacenar un intervalo

// Evento al hacer clic en el elemento con el ID "parar"
let parar = document.getElementById("parar").addEventListener("click", function(e){
detener();// Llama a la función detener()
});

// Agrega eventos a cada botón con la clase "slider"
botones.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
        switch (btn.id) {
            case "slide-izq":
                deslizarIzq();// Llama a la función para deslizar a la izquierda
                break;
            case "slide-der":
                deslizarDer();// Llama a la función para deslizar a la derecha
                break;
            case "slide-abajo":
                deslizarAbajo();// Llama a la función para deslizar hacia abajo
                break;
            case "slide-arriba":
                deslizarArriba();// Llama a la función para deslizar hacia arriba
                break;
        }
    });
});




