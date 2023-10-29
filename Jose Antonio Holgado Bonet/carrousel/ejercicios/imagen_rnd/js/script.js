"use strict";

// Definir un array de imágenes con sus respectivas descripciones
const imagenes = [
    { src: "img/buho.jpg", descripcion: "Buho" },
    { src: "img/caballo.jpg", descripcion: "Caballo" },
    { src: "img/camaleon.jpg", descripcion: "Camaleon" },
    { src: "img/delfines.jpg", descripcion: "Delfines" },
    { src: "img/mono.jpg", descripcion: "Monos" },
    { src: "img/panda.jpg", descripcion: "Panda" },
    { src: "img/tigre.jpg", descripcion: "Tigre" },
    { src: "img/perro.jpg", descripcion: "Perro chachi" }
];


const imagenesMezcladas = mezclarArray(imagenes); // Crea un array mezclado aleatoriamente
let slideIndex = 0; // Variable que representa el índice del slide actual


// Muestra la primera imagen aleatoria al cargar la página
document.addEventListener("DOMContentLoaded", function () {
    imagenesMezcladas.forEach((imagen, index) => {
        const slide = document.querySelector(".slide:nth-child(" + (index + 1) + ")");
        slide.querySelector("img").src = imagen.src; // Establece la imagen del slide
        slide.querySelector(".descripcion").textContent = imagen.descripcion; // Establece la descripción del slide
    });
    mostrarSlide(0); // Muestra el primer slide al cargar la página
});

// Función para mezclar aleatoriamente el array de imágenes
function mezclarArray(array) {
    const newArray = array.slice(); // Hace una copia del array original para no alterarlo directamente
    for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1)); // Genera un índice aleatorio
        // Intercambia los elementos en las posiciones 'i' y 'j' para mezclar el array
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray; // Retorna el array mezclado aleatoriamente
}





