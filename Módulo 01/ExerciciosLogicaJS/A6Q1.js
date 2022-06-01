/* Faça um Programa que leia 20 números inteiros e armazene-os num array. 
Armazene os números pares no array PAR e os números IMPARES no array IMPAR. 
Imprima os três vetores. */

const prompt = require('prompt-sync')();
console.clear();

let par = [];
let impar = [];
let geral = [];
console.log('Quantos numeros deseja adicionar?');
let quantidade = 20;
let count = 0;

while (count < quantidade) {
    console.log('digite um numero inteiro:');
    let numero = +prompt('');
    geral.push(numero);
    count++;
    if (numero % 2 == 0) {
        par.push(numero);
    } else {
        impar.push(numero);
    }
}
console.log(par);
console.log(impar);
console.log(geral);
