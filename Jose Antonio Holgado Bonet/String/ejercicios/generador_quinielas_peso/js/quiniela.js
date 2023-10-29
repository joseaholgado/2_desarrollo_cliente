"use strict";

function generarQuiniela(valoresPorcentajes) {
    const opciones = ["1", "X", "2"];
    let resultados = [];

    for (let i = 0; i < 14; i++) {
        const numeroAleatorio = Math.random(); // Número aleatorio entre 0 y 1
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

    return resultados.join(", "); // Formatear los resultados como una cadena separada por comas
}