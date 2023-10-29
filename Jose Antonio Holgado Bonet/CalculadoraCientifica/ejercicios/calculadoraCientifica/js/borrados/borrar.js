"use strict";

/*
*Borra los dos últimos valores para mostrar en la calculadora lo que el usuario quiere
*/
//Función que borra el dígito de la calculadora de num1
function borrar1(){
    num1 = num1.slice(0, -2);
    pantallaAbajo.textContent = num1;
}
//Función que borra el dígito de la calculadora de num2
function borrar2(){
    console.log(num2);
    num2 = num2.slice(0, -2);
    pantallaAbajo.textContent = num2;
}