"use strict"
//En este archivo estará todos los Listeners
let texto=document.getElementById("texto");

document.getElementById("botonMayuscula").addEventListener("click", function(event){
    mayuscula(texto.value);
});
document.getElementById("botonMinuscula").addEventListener("click",  function(event){
    minuscula(texto.value);
});
document.getElementById("botonMay_prime_letra").addEventListener("click", function(event){
    mayusculaLetra(texto.value);
});
document.getElementById("botonMay_ult_letra").addEventListener("click",  function(event){
    mayusculaUltimaLetra(texto.value);
});
document.getElementById("botonMin_prime_letra").addEventListener("click",  function(event){
    minusculaLetra(texto.value);
});
document.getElementById("botonMin_ult_letra").addEventListener("click",  function(event){
    minusculaUltimaLetra(texto.value);
});
document.getElementById("botonMayu_vocales").addEventListener("click",  function(event){
    mayusculaVocales(texto.value);
});
document.getElementById("botonMin_vocales").addEventListener("click",  function(event){
    minusculaVocales(texto.value);
});
document.getElementById("botonMay_consonantes").addEventListener("click",  function(event){
    mayusculaConsonantes(texto.value);
});
document.getElementById("botonMin_consonantes").addEventListener("click", function(event){
    minusculaConsonantes(texto.value);
});
document.getElementById("random").addEventListener("click", function(event){
    random(texto.value);
});
document.getElementById("rapido").addEventListener("click", function(event){
    rapido(texto.value);
});
document.getElementById("lento").addEventListener("click", function(event){
    lento(texto.value);
});
document.getElementById("parar").addEventListener("click", function(event){
    parar(texto.value);
});


