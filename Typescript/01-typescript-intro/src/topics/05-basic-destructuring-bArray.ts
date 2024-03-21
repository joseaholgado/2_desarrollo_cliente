export { };

console.log("*******************************");
console.log("05-basic-destructuring-bArray");
console.log("*******************************");

const db: string[] = ['Gokü', 'Vegeta', 'Freezer'];
const dbz: string[] = ['Son Gohan', 'Cell', 'Trunks'];

console.error(`Personaje 3: ${db[2]}`);
console.error('Personaje 3: %s', dbz[2]);
console.error('Personaje 3:', dbz[3]); // Pero... ¿y si pido un valor que no está?
const trunks = dbz[3] || 'No hay personaje';
console.error('Personaje 3:', trunks);

// Desestructurando el array
const dbgt: string[] = ['Pan', 'Baby'];
const [p1 , , videl = 'No existe el personaje'] = dbgt;
console.error('Personaje 3:', videl);

console.log('-------------TAREA------------');
let url="hhtps://www.google.es";
let regExp = ;
let host =regExp.exec(url);