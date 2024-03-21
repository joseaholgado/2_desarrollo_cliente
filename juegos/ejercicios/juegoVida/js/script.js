"use strict";

// Obtener el canvas y su contexto 2D
let canvas = document.getElementById("juegoDeLaVidaCanvas");
let ctx = canvas.getContext("2d");

// Establecer dimensiones del canvas
canvas.width = 600;
canvas.height = 600;

// Definir el número de columnas y filas en la cuadrícula
let cols = 50;
let rows = 50;

// Crear una matriz para representar la cuadrícula del juego
let grid = new Array(cols);



// Crear la cuadrícula inicial (placa de Petri) con células vivas o muertas aleatorias
function createGrid() {

    for (let i = 0; i < grid.length; i++) {
        grid[i] = new Array(rows);
        for (let j = 0; j < grid[i].length; j++) {
            grid[i][j] = Math.random() > 0.8 ? 1 : 0; // 20% de probabilidad de estar viva


        }
    }
}



// Obtener un color aleatorio en formato hexadecimal
function colorAleatorio() {
    let color = Math.floor(Math.random() * 16777215).toString(16);
    return color;
}



// Dibujar la cuadrícula en el canvas
function drawGrid() {
    // Dibujar los cuadrados para cada celda en la cuadrícula
    for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
            ctx.strokeRect(i * 12, j * 12, 12, 12);
        }
    }

    // Rellenar las celdas vivas con color naranja y las celdas muertas con color negro
    for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
            if (grid[i][j] === 1) {
                ctx.fillStyle = "orange"; // Color naranja para células vivas
                ctx.fillRect(i * 12, j * 12, 12, 12);
            } else {
                ctx.fillStyle = "black"; // Color negro para células muertas
                ctx.fillRect(i * 12, j * 12, 12, 12);
            }
            ctx.strokeRect(i * 12, j * 12, 12, 12);
        }
    }
}
createGrid();
drawGrid();


// Función para actualizar el estado de la cuadrícula según las reglas del "juego de la vida"
function updateGrid() {
    // Crear una copia de la placa de Petri
    let nextGrid = grid.map(arr => [...arr]);

    // Aplicar las reglas del juego
    /**
     * 1. Una célula viva con menos de 2 vecinos vivos muere.
     * 2. Una célula viva con 2 o 3 vecinos vivos sigue viva.
     * 3. Una célula viva con más de 3 vecinos vivos muere.
     * 4. Una célula muerta con exactamente 3 vecinos vivos se convierte en una célula viva.
     */

    for (let i = 0; i < grid.length; i++) {

        for (let j = 0; j < grid[i].length; j++) {

            let vecinos = 0;

            if (i > 0) {
                if (grid[i - 1][j] === 1) vecinos++;
            }
            if (i < cols - 1) {
                if (grid[i + 1][j] === 1) vecinos++;
            }
            if (j > 0) {
                if (grid[i][j - 1] === 1) vecinos++;
            }
            if (j < rows - 1) {
                if (grid[i][j + 1] === 1) vecinos++;
            }
            if (i > 0 && j > 0) {
                if (grid[i - 1][j - 1] === 1) vecinos++;
            }
            if (i < cols - 1 && j > 0) {
                if (grid[i + 1][j - 1] === 1) vecinos++;
            }
            if (i > 0 && j < rows - 1) {
                if (grid[i - 1][j + 1] === 1) vecinos++;
            }
            if (i < cols - 1 && j < rows - 1) {
                if (grid[i + 1][j + 1] === 1) vecinos++;
            }

            if (grid[i][j] === 1 && vecinos < 2) {
                nextGrid[i][j] = 0;
            }
            else if (grid[i][j] === 1 && vecinos > 3) {
                nextGrid[i][j] = 0;
            }
            else if (grid[i][j] === 0 && vecinos === 3) {
                nextGrid[i][j] = 1;
            }
        }
    }
    grid = nextGrid;
    drawGrid();
}
// funcion para ir limpiando el tablero
function limpiarTablero() {
    // Llena todo el tablero con células muertas (valor 0) y dibuja el tablero
    for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
            grid[i][j] = 0;
            ctx.fillStyle = "white";
            ctx.fillRect(i * 12, j * 12, 12, 12);
            ctx.strokeRect(i * 12, j * 12, 12, 12);
        }
    }
}

// funcion para pintar una celula
function pintarCelula(event) {
    let x = event.clientX - canvas.offsetLeft;
    let y = event.clientY - canvas.offsetTop;

    let i = Math.floor(x / 12);
    let j = Math.floor(y / 12);

    grid[i][j] = 1;
    ctx.fillStyle = "#" + colorAleatorio();
    ctx.fillRect(i * 12, j * 12, 12, 12);
    ctx.strokeRect(i * 12, j * 12, 12, 12);

    console.log("x: " + x + " y: " + y);
}

// Variable intervalo
let interval;
let running = false;


/*----------------------------------------------------------- BOTONES----------------------------------------------------------------------------------------------------*/

document.getElementById("start").addEventListener("click", function () {
    if (!running) {
        interval = setInterval(updateGrid, 100);
        running = true;
    }
});

document.getElementById("stop").addEventListener("click", function () {
    clearInterval(interval);
    running = false;

});

document.getElementById("reiniciar").addEventListener("click", function () {
    clearInterval(interval);
    createGrid();
    drawGrid();
    running = false;
});

document.getElementById("limpiar").addEventListener("click", function () {
    limpiarTablero();
});

canvas.addEventListener("click", function (event) {
    pintarCelula(event);
});

/*-------------------------------------------------------------- GUARDADO -----------------------------------------------------------------*/


let nombreDB = "myDatabase";
let version = 2;
let tablaBD = 'grids';


document.getElementById("guardar").addEventListener("click", function () {
    let nombreEstado = document.getElementById("nombreEstado").value;

    // Guardar en localStorage
    localStorage.setItem('grid-' + nombreEstado, JSON.stringify(grid));

    // Guardar en IndexedDB
    let openRequest = indexedDB.open(nombreDB, version);

    openRequest.onupgradeneeded = function () {
        let db = openRequest.result;
        if (!db.objectStoreNames.contains(tablaBD)) {
            db.createObjectStore(tablaBD);
        }
    };

    openRequest.onerror = function () {
        console.error("Error", openRequest.error);
    };

    openRequest.onsuccess = function () {
        let db = openRequest.result;
        let transaction = db.transaction(tablaBD, "readwrite");
        let grids = transaction.objectStore(tablaBD);
        let request = grids.put(grid, 'grid-' + nombreEstado);

        request.onerror = function () {
            console.error("Error", request.error);
        };
    };
});


/*------------------------------------------------------------ CARGA ---------------------------------------------------------------*/


window.onload = function () {
    let select = document.getElementById("estadosGuardados");

    let openRequest = indexedDB.open(nombreDB, version);

    openRequest.onsuccess = function () {
        let db = openRequest.result;
        let transaction = db.transaction(tablaBD, "readonly");
        let grids = transaction.objectStore(tablaBD);
        let request = grids.openCursor();

        request.onsuccess = function () {
            let cursor = request.result;
            if (cursor) {
                let option = document.createElement("option");
                option.value = cursor.key;
                option.text = cursor.key;
                select.appendChild(option);

                cursor.continue();
            }
        };

        request.onerror = function () {
            console.error("Error", request.error);
        };
    };

    openRequest.onerror = function () {
        console.error("Error", openRequest.error);
    };
};


document.getElementById("estadosGuardados").addEventListener("change", function () {
    let nombreEstado = this.value;

    let openRequest = indexedDB.open(nombreDB, version);

    openRequest.onsuccess = function () {
        let db = openRequest.result;
        let transaction = db.transaction(tablaBD, "readonly");
        let grids = transaction.objectStore(tablaBD);
        let request = grids.get(nombreEstado);

        request.onsuccess = function() {
            if (request.result !== undefined) {
                grid = request.result;
                
                drawGrid();
            } else {
                console.error("No se encontró ningún estado con el nombre '" + nombreEstado + "'");
            }
        };

        request.onerror = function () {
            console.error("Error", request.error);
        };
    };

    openRequest.onerror = function () {
        console.error("Error", openRequest.error);
    };
});






