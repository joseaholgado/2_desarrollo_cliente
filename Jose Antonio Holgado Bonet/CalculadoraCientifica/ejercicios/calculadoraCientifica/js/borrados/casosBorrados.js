"use strict";

// Declara una función llamada casosBorrados que toma un argumento llamado 'valor'
// Comienza un bloque 'switch' que evalúa el valor de 'valor'.
function casosBorrados(valor) {
    switch (valor) {
        case '_':
            if (!tieneOperador) {
                borrar1();
            } else {
                borrar2();
            }
            break;
        case 'CE':
            borrarTodo();
            break;
        case 'C':
            if (!tieneOperador) {
                borrarOperador1();
            } else {
                borrarOperador2();
            }
            break;
        case 'M':
            borrarMemoria();
            break;
            
    }
}