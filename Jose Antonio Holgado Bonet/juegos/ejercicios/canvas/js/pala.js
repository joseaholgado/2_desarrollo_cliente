'use strict'

//funcion para la pala
function drawPaddle() {
    ctx.beginPath();
    ctx.rect(paddleX, canvas.height - paddleHeight, paddleWidth, paddleHeight);
    ctx.fillStyle = "#E0874D";
    ctx.fill();
    ctx.closePath();
    collisionDetection();
}