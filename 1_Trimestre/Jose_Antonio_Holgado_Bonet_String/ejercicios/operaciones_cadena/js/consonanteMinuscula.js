"use strict";

//Funcion que me devuelve las consonantes en minusculas
function minusculaConsonantes(texto){
    let resultado="";
console.log(texto);
    
    for(let i=0; i<texto.length; i++){
        //Cuando detecte la consonante me la concatena a la variable resultado
        if(!(texto[i]=='A' || texto[i]=='E' || texto[i]=='I' || texto[i]=='O' || texto[i]=='U')){
            resultado+=texto[i].toLowerCase();
        }else{
            resultado+=texto[i];
        }
document.getElementById("texto").value=resultado;
}};