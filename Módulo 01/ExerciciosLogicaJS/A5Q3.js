/* Faça um programa que peça um número par, e repita a execução caso o número digitado seja ímpar. */

const prompt = require('prompt-sync')();
console.clear();

console.log('Digite um número par:');
let numeropar = +prompt('');
let confirmaçãopar = numeropar % 2; // dividindo por 2 para que se obtenha sempre resto 0.
console.log('');

while (confirmaçãopar != 0) {
    console.log('O número digitado é impar. Por favor, digite um número par:');
    numeropar = +prompt('');
    confirmaçãopar = numeropar % 2;
    console.log('');
}
console.log(`Certo! O número ${numeropar} é par.`);
