export { }; // con esto indicamos que este archivo pertenece al proyecto

console.log("VARIABLES");

let nombre: string = 'Strike';
let puntosVida: number = 95;
let arma: string = 'Espada';

console.log(nombre, puntosVida, arma);

nombre = 'Vader';
puntosVida = 100;
arma = 'light saber';

console.log(nombre, puntosVida, arma);

console.log("FUNCION e INTERFAZ");

interface Productos {
    nombre: string,
    precio: number
}

let smartphone: Productos = {
    nombre: 'iphone',
    precio: 500
};

let tablet: Productos = {
    nombre: 'ipad',
    precio: 700
};

let productos: Productos[] = [smartphone, tablet];

function calculaISV(productos: Productos[]): [number, number] {
    let total = 0;
    productos.forEach(({ precio }) => {
        total += precio;
    });
    return ([total, total * 0.15]);
}
console.log(calculaISV(productos));

console.log("OBJETOS");

interface Personaje {
    habilidades?: string[],
    hp?: number,
    nombre?: string,
    puebloNatal?: string
}

let samurai: Personaje = {
    habilidades: ['espada', 'salto'],
    hp: 100,
    nombre: 'Tanjiro'
};

let ninja: Personaje = {
    habilidades: ['espia', 'salto'],
    hp: 100,
    nombre: 'Kamui',
    puebloNatal: 'Tokio'
}

console.log(samurai, ninja);
console.log(samurai.habilidades, ninja.nombre)

let heroe: Personaje = {};
/* let heroe: Personaje = {
    habilidades: [],
    hp: 0,
    nombre: '',
    puebloNatal: ''
} */
heroe.habilidades = ['vuelo'];
heroe.puebloNatal = 'malaga';