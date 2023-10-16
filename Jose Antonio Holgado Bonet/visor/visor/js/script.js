"use strict"

let texto=document.getElementById("texto");

document.getElementById("boton-anterior").addEventListener("click", function(event){
    desplazarDer(-1);
});

document.getElementById("boton-posterior").addEventListener("click", function(event){
    desplazarIzq(1);

});

