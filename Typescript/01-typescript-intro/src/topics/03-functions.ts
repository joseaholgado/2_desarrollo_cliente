export { };

console.log("*******************");
console.log("03-functions");
console.log("*******************");

function addNumbers1(): void {
    return undefined
}

function addNumbers2(a: any, b: any) {
}

function addNumbers3(a: number, b: number): number {
    return a + b;
}

// Lambda function o funciones flecha y backticks
const addNumbersArrow = (a: number, b: number): string => {
    return `${a + b}`;
}

function multiply(firstNumber: number, secondNumber?: number, base: number = 2) {
    return firstNumber * base;
}

const result1: number = addNumbers3(1, 2);
const result2: string = addNumbersArrow(1, 2);
const result3: number = multiply(5);
console.log({ result1, result2, result3 });

console.log("*******************");

interface Character { // esta interfaz definirá los tipos de los objetos que la instancien
    name: string;
    hp: number; // puntos de vida
    showHp: () => void; // mostrar los puntos de vida
}

const strider: Character = {
    name: 'Strider',
    hp: 50,
    showHp() {
        console.log(`Puntos de vida ${this.hp}`); // 'this' hace referencia al objeto que lo contiene
    }
}
const healCharacter = (character: Character, amount: number) => {
    character.hp += amount;
}

healCharacter(strider, 10); //Strider tienen 50 + 10 = 60
healCharacter(strider, 50); //Strider tienen 60 + 50 = 110

strider.showHp();