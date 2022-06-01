/* Faça um Programa que peça a idade e a altura de 5 pessoas, 
armazene cada informação no seu respectivo array. 
Imprima a média de idade e de altura. */

const prompt = require('prompt-sync')();
console.clear();

let arrayidade = [];
let arrayaltura = [];
let contadoridade = 0;
let contadoraltura = 0;
let numerodepessoas = 5;
console.log();

while (contadoridade < numerodepessoas) {
    console.log('Insira a idade de uma pessoa:');
    idade = +prompt('');
    arrayidade.push(idade);
    contadoridade++;
    console.log();
}

while (contadoraltura < numerodepessoas) {
    console.log('Insira a altura de uma pessoa:');
    altura = +prompt('');
    arrayaltura.push(altura);
    contadoraltura++;
    console.log('');
}

let mediaidade =
    (arrayidade[0] +
        arrayidade[1] +
        arrayidade[2] +
        arrayidade[3] +
        arrayidade[4]) /
    5;
let mediaaltura =
    (arrayaltura[0] +
        arrayidade[1] +
        arrayidade[2] +
        arrayidade[3] +
        arrayidade[4]) /
    5;
console.log(`A media de altura das pessoas é : ${mediaidade}.`);
console.log(`A media de altura das pessoas é : ${mediaaltura}.`);
