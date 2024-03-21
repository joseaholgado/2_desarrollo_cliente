'use strict'


//funcion para la pelota
function drawBall() {
    ctx.beginPath();
    ctx.arc(x, y, ballRadius, 0, Math.PI * 2);
    ctx.fillStyle = colors[currentColorIndex];
    // ctx.fillStyle = "#7D70E0";
    ctx.fill();
    ctx.closePath();
}