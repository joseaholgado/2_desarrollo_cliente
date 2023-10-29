"use strict";
let mensaje = document.getElementById("mensaje");
let btn = document.getElementById("btn");

btn.addEventListener("click", function () {
    let resultados = quiniela();
    mensaje.innerHTML = resultados;
});
