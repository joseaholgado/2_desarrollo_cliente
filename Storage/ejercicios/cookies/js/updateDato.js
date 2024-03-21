"use strict";
//Función que actualiza los datos de una cookie
function updateDato(claveNew, valorNew){
    // Actualiza los valores de los elementos con los valores proporcionados
    clave.value=claveNew;
    valor.value=valorNew;
     // Suponiendo que tienes una función llamada borrarDato definida en otro lugar
    borrarDato(claveNew);
    // Actualiza la variable datos con los datos actuales de las cookies
    datos=document.cookie;
     // Muestra los datos actualizados
    mostrarDatos(datos);
}