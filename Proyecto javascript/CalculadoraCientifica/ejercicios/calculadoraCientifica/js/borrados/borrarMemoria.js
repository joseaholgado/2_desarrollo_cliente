"use strict";

/*
* Borra el contenido de las variables num1, num2 y memoria. Además, de cambiar el valor del boolean "tieneOperador"
*/
//Función que borra lo que haya en memoria
function borrarMemoria(){
 num1 = '';
 num2 = '';
 operador = '';
 memoria = 0;
 tieneOperador = false;
 pantallaAbajo.textContent = '';
}