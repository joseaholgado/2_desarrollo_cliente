'use strict'

//funcion para el uso del rato
function mouseMoveHandler(e) {
    let relativeX = e.clientX - canvas.offsetLeft;
    
    if (relativeX > 0 && relativeX < canvas.width) {
        paddleX = relativeX - paddleWidth / 2;
        
        // Asegúrate de que la paleta nunca salga del canvas
        if (paddleX < 0) {
            paddleX = 0;
        } else if (paddleX > canvas.width - paddleWidth) {
            paddleX = canvas.width - paddleWidth;
        }
    }
    
}