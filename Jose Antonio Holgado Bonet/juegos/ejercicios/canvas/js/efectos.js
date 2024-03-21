'use strict';

// La función draw() se encarga de dibujar elementos en el canvas
function draw() {
    // Limpia el canvas para eliminar elementos anteriores
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Dibuja los bloques del juego
    drawBricks();

    // Dibuja la pelota
    drawBall();

    // Dibuja la pala
    drawPaddle();

    // Dibuja el puntaje
    drawScore();

    // Dibuja las vidas restantes
    drawLives();

    // Realiza la detección de colisiones entre la pelota y los bloques
    collisionDetection();

    // Lógica de movimiento de la pelota y manejo de rebotes

    // Si la pelota alcanza los bordes izquierdo o derecho del canvas, cambia la dirección horizontal
    if (x + dx > canvas.width - ballRadius || x + dx < ballRadius) {
        dx = -dx;
        // Cambia al siguiente color
        currentColorIndex = (currentColorIndex + 1) % colors.length;
    }

    // Si la pelota alcanza el borde superior del canvas, cambia la dirección vertical
    if (y + dy < ballRadius) {
        dy = -dy;
        // Cambia al siguiente color
        currentColorIndex = (currentColorIndex + 1) % colors.length;
    }

    // Si la pelota toca la parte inferior del canvas
    if (y + dy > canvas.height - ballRadius) {
        // Si la pelota está dentro de los límites de la pala
        if (x > paddleX && x < paddleX + paddleWidth) {
            // Si la pelota golpea la pala, cambia la dirección y aumenta la velocidad
            if (y = y - paddleHeight) {
                dy = -dy;
                dy *= 1.1; // Aumenta la velocidad vertical en un 10%
                dx *= 1.1; // Aumenta la velocidad horizontal en un 10%
            }
        } else {
            // Si la pelota toca la parte inferior y no golpea la pala, se pierde una vida
            lives--;

            // Si no quedan vidas, muestra "GAME OVER" y reinicia el juego
            if (!lives) {
                alert("GAME OVER");
                clearInterval(intervalo); // Detiene el intervalo del juego
                document.location.reload(); // Recarga la página para reiniciar el juego
            } else {
                // Reinicia la posición de la pelota y la pala si quedan vidas
                x = canvas.width / 2;
                y = canvas.height - 30;
                dx = 2;
                dy = -2;
                paddleX = (canvas.width - paddleWidth) / 2;
            }
        }
    }

    // Mueve la pala hacia la izquierda o la derecha según las teclas presionadas
    if (rightPressed && paddleX < canvas.width - paddleWidth) {
        paddleX += 7;
    } else if (leftPressed && paddleX > 0) {
        paddleX -= 7;
    }

    // Actualiza las posiciones de la pelota en cada iteración
    x += dx;
    y += dy;

    // Llama a la función draw() de manera recursiva para animar el juego
    // requestAnimationFrame(draw);
}

