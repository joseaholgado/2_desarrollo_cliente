"use strict";

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