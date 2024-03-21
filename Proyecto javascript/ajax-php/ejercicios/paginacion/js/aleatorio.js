"use strict"

let anterior;

function aleatorioExclusivo(min, max) {
    if (min > max) {
        let temp = min;
        min = max;
        max = temp;
    }
    return Math.floor(Math.random() * (max - min)) + min; // INCLUYE EL RANGO SUPERIOR
}

function aleatorioInclusivo(min, max) {
    if (min > max) {
        let temp = min;
        min = max;
        max = temp;
    }
    return Math.floor(Math.random() * (max - min + 1)) + min; // INCLUYE EL RANGO SUPERIOR
}
