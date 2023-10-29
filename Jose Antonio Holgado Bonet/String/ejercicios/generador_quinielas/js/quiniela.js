"use strict";

function quiniela(){
    let resultados = [];
    for (let i = 0; i < 14; i++) {
        let num = Math.floor(Math.random() * 3);
        if (num === 0) {
            resultados.push("X");
        } else if (num === 1) {
            resultados.push("1");
        } else {
            resultados.push("2");
        }
    }
    return resultados;
}