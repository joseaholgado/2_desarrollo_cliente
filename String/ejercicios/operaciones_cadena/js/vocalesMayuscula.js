"use strict";

//Funcion que me devuelve las vocales en mayusculas
function mayusculaVocales(texto){
    let resultado="";

    
    for(let i=0; i<texto.length; i++){
        //Cuando detecte la vocal me la concatena a la variable resultado
        if(texto[i]=='a' || texto[i]=='e' || texto[i]=='i' || texto[i]=='o' || texto[i]=='u'){
            resultado+=texto[i].toUpperCase();
        }else{
            resultado+=texto[i];
        }
document.getElementById("texto").value=resultado;
}};