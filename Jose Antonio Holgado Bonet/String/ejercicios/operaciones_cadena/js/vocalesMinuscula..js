"use strict";

//Funcion que me devuelve las vocales en mayusculas
function minusculaVocales(texto){
    let resultado="";
    for(let i=0; i<texto.length; i++){
        if(texto[i]=='A' || texto[i]=='E' || texto[i]=='I' || texto[i]=='O' || texto[i]=='U'){
            resultado+=texto[i].toLowerCase();
        }else{
            resultado+=texto[i];
        }
document.getElementById("texto").value=resultado;
}};