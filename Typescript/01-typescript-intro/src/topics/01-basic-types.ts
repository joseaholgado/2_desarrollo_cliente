export { }; // con esto indicamos que este archivo pertenece al proyecto

console.log("**************");
console.log("01-basic-types");
console.log("**************");

let variable1 = 'Strider';
variable1 = 'Rider';

const variable2 = 'Strider';
console.log(variable2);

const name: string = 'Strider';
let hpPoints: number | 'FULL' = 95;
const isAlive: boolean = true;

if (hpPoints>50){
    console.log('Está vivo');
console.log({ name, hpPoints, isAlive });
}
hpPoints = 'FULL';
if(hpPoints =='FULL'){
    console.log('Está repleto de energía');
console.log({ name, hpPoints, isAlive });
}
