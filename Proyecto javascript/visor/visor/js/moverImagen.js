"use strict";


function desplazar(direction) {
    currentIndex += direction;
    if (currentIndex < 1) {
      currentIndex = 3;
    } else if (currentIndex > 3) {
      currentIndex = 1;
    }
  
    const imagenes = [
      "./imagenes/foto1.jpg",
      "./imagenes/foto2.jpg",
      "./imagenes/foto3.jpg",
    ];

    const imgElement = document.querySelector("#fondo2 img");
    imgElement.src = imagenes[currentIndex - 1];
    document.querySelector("#descripcion").textContent = "Descripción de la imagen " + currentIndex;
  }
  desplazar(0);














/*
var desplazaFondoUno = 0;

const fondoUno = document.getElementById("fondoUno");
const fondotres = document.getElementById("fondotres");

setInterval(desplazarIzq, 50);
setInterval(desplazarDer, 50); // 50ms = 0.05s. Si cada 0.05s desplazo 10px, cada 2,25s desplazo todo el fondo
//setInterval(repetir, 2250); // Esto quiere decir que cada 2250ms tengo que volver a repetir el proceso

function desplazarIzq() {
    desplazaFondoUno -= 10;
    let desplazafondotres = desplazaFondoUno + 450;
    fondoUno.style.left = desplazaFondoUno + "px";
    fondotres.style.right = desplazafondotres + "px";
}
function desplazarDer() {
    desplazaFondoUno += 10;
    let desplazafondotres = desplazaFondoUno - 450;
    fondoUno.style.left = desplazaFondoUno + "px";
    fondotres.style.right = desplazafondotres + "px";
}

/*
function repetir() {
    fondoUno.style.left = "0px";
    fondotres.style.left = "450px";
    desplazaFondoUno = 0;
}
*/