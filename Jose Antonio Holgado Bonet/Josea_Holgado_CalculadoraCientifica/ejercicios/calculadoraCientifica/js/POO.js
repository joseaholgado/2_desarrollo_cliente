"use strict";
const textoValorSuperior = document.querySelector('[data-valor-superior]');
const textoValorInferior = document.querySelector('[data-valor-inferior]');
const bontonBorrarMemoria = document.querySelectorAll('[data-borrar-memoria]');
const bontonAtras = document.querySelectorAll('[data-atras]');
const botonBorrar = document.querySelector('[data-borrar]');
const botonBorrarTodo = document.querySelector('[data-borrar-todo]');
const bontonNumero = document.querySelectorAll('[data-numero]');
const bontonOperador = document.querySelectorAll('[data-operador]');
const botonIgual = document.querySelector('[data-igual]');


class Calculadora {
    constructor(textoValorInferior, textoValorSuperior) {
        this.textoValorInferior = textoValorInferior
        this.textoValorSuperior = textoValorSuperior
        this.valorInferior = ''
        this.valorSuperior = ''
        this.operador = undefined
    }

    agregarNumero(numero) {
        this.valorInferior = this.valorInferior + numero
    }
    imprimirDisplay() {
        this.textoValorInferior.innerText = this.valorInferior
        this.textoValorSuperior.innerText = this.valorSuperior
    }

    borrar() {
        this.valorInferior = this.valorInferior.slice(0, -1)
    }
    elegirOperacion(operador) {

        if (this.valorInferior == '') return
        if (this.valorSuperior != '') {
            this.realizarCalculo()
        }
        this.operador = operador
        this.valorSuperior = this.valorInferior
        this.valorInferior = ''
    }
    realizarCalculo() {
        let resultado
        let conversionValorSuperior = parseFloat(this.valorSuperior)
        let conversionValorInferior = parseFloat(this.valorInferior)

        switch (this.operador) {
            case '+':
                resultado = conversionValorSuperior + conversionValorInferior
                break;
            case '-':
                resultado = conversionValorSuperior - conversionValorInferior
                break;
            case '*':
                resultado = conversionValorSuperior * conversionValorInferior
                break;
            case '/':
                resultado = conversionValorSuperior / conversionValorInferior
                break;
        }

        this.valorInferior = resultado
        this.operador=undefined
        this.valorSuperior=''

    }

    limpiarPantalla() { 
        this.valorInferior= ''
        this.valorSuperior= ''
        this.operador=undefined
    }
}


const calculadora = new Calculadora(textoValorInferior, textoValorSuperior)

bontonNumero.forEach(boton => {
    boton.addEventListener('click', () => {
        calculadora.agregarNumero(boton.innerText)
        calculadora.imprimirDisplay()
    })
})


botonBorrar.addEventListener('click', () => {
    calculadora.borrar()
    calculadora.imprimirDisplay()
})

bontonOperador.forEach(boton => {
    boton.addEventListener('click', () => {
        calculadora.elegirOperacion(boton.innerText)
        calculadora.imprimirDisplay()
    })
})

botonIgual.addEventListener('click', () => {
    calculadora.realizarCalculo()
    calculadora.imprimirDisplay()
})

botonBorrarTodo.addEventListener('click', () => {
    calculadora.limpiarPantalla()
    calculadora.imprimirDisplay()
})






