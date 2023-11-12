"use strict";
// Genera resultados para 14 partidos simulando una quiniela
function quiniela(){
    let resultados = [];
    // Genera resultados para 14 partidos simulando una quiniela

    // Bucle para generar los resultados de 14 partidos
    for (let i = 0; i < 14; i++) {
        // Genera un número aleatorio entre 0 y 2
        let num = Math.floor(Math.random() * 3);

        // Asigna un resultado ('1', 'X' o '2') según el número aleatorio
        if (num === 0) {
            resultados.push("X"); // Empate
        } else if (num === 1) {
            resultados.push("1"); // Victoria local
        } else {
            resultados.push("2"); // Victoria visitante
        }
    }
    return resultados; // Retorna un array con los resultados de la quiniela
}