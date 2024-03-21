"use strict";
//Funcion para crear caracteres aleatorios
function caracterRandom() {
    // Declarar variables para almacenar la matrícula, letras y números
    let matricula = '';
    const letras = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numeros = '0123456789';

    // Genera una secuencia de 4 dígitos numéricos
    for (let i = 0; i < 4; i++) {
        const numeroAleatorio = numeros.charAt(Math.floor(Math.random() * numeros.length));
        matricula += numeroAleatorio;
    }

    // Agrega un guion (-) a la matrícula
    matricula += "-";

    // Genera una secuencia de 3 letras aleatorias
    for (let i = 0; i < 3; i++) {
        const letraAleatoria = letras.charAt(Math.floor(Math.random() * letras.length));
        matricula += letraAleatoria;
    }

    // Retorna la matrícula generada
    return matricula;
}

