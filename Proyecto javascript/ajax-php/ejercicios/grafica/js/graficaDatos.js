'use strict';

let myChart = null;

function graficaDatos(datos) {
    console.log("Grafica de datos...");
    const cuerpo = document.getElementById("cuerpo"); // cuerpo = document.getElementById("cuerpo");
    cuerpo.innerHTML = "La representación gráfica es: <br />";

    if (myChart != null) {
        myChart.destroy();
    }

    let ctx = document.getElementById("lienzoGrafica");
    ctx.height = 500;

    // SUMA LOS DOS VALORES Y1+Y2 PARA TENER UN DATO MÁS PARA REPRESENTAR GRÁFICAMENTE
    console.log(datos[1]);
    const sumaDatos = datos[1].map((elemento, i) => parseInt(elemento) + parseInt(datos[2][i]));

    myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: datos[0],
            datasets: [{
                label: 'valor Y1',
                data: datos[1],
                backgroundColor: 'rgb(255, 99, 132)',
                borderColor: 'rgb(255, 99, 132)',
                borderWidth: 1,
                tension: 0.4,
                fill: false,
                
            },
            {
                label: 'valor Y2',
                data: datos[2],
                backgroundColor: 'rgb(132, 99, 255)',
                borderColor: 'rgb(132, 99, 255)',
                borderWidth: 1,
                tension: 0.4,
                fill: false,
                
            },
            {
                label: 'valor Y1+Y2',
                data: sumaDatos,
                backgroundColor: 'rgb(255, 132, 255)',
                borderColor: 'rgb(255, 132, 255)',
                borderWidth: 1,
                tension: 0.4,
                fill: false,
            
            }]
        },
        options: {
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}