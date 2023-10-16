"use strict";
function borrar1(){
    console.log(num1);
    num1 = num1.slice(0, -2);
    console.log(num1);
    pantallaAbajo.textContent = num1;
}
function borrar2(){
    console.log(num2);
    num2 = num2.slice(0, -2);
    console.log(num2);
    pantallaAbajo.textContent = num2;
}