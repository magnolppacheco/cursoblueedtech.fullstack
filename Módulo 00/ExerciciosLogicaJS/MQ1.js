/* Faça um script que peça um valor e mostre na tela se o valor é positivo 
ou negativo e implemente a funcionalidade de não aceitar o número 0. */

const prompt = require('prompt-sync')();
console.clear();

console.log(`Digite um número de valor qualquer:`);
let numero = +prompt('');
console.log();

while (numero == 0) {
    console.log('O zero não é válido. Digite um válido:');
    numero = +prompt('');
    console.log();
}
if (numero < 0) {
    console.log('O número digitado é negativo.');
} else {
    console.log('O número digitado é positivo.');
}
