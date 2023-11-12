"use strict";

/**
 * Genera una quiniela basada en los porcentajes dados para cada opción.
 * @param {number[]} valoresPorcentajes - Un array con los porcentajes para cada opción (1, X, 2).
 * @returns {string[]} - Devuelve un array de resultados de quiniela para 14 partidos.
 */
function quiniela(valoresPorcentajes) {
    const opciones = ["1", "X", "2"];
    let resultados = [];

    for (let i = 0; i < 14; i++) {
        const numeroAleatorio = Math.random(); // Genera un número aleatorio entre 0 y 1
        let acumulado = 0;
        let resultadoElegido = "";

        for (let j = 0; j < valoresPorcentajes.length; j++) {
            acumulado += valoresPorcentajes[j];

            if (numeroAleatorio < acumulado) {
                resultadoElegido = opciones[j];
                break;
            }
        }

        resultados.push(resultadoElegido);
    }

    return resultados; // Retorna un array con los resultados de la quiniela para los 14 partidos
}