"use strict"


function random(texto) {
    let aleatorio = Math.random( Math.floor()* 10);
    console.log(aleatorio);

    switch (aleatorio) {
        case 0:
            mayuscula(texto.value);
            break;
        case 1:
            minuscula(texto.value);
            break;
        case 2:
            letraMayuscula(texto.value);
            break;
        case 3:
            ultimaMayuscula(texto.value);
            break;
        case 4:
            letraMinuscula(texto.value);
            break;
        case 5:
            ultimaMinuscula(texto.value);
            break;
        case 6:
            vocalesMayuscula(texto.value);
            break;
        case 7:
            vocalesMinuscula(texto.value);
            break;
        case 8:
            consonanteMayuscula(texto.value);
            break;
        default:
            consonanteMinuscula(texto.value);
            break;
    }
}