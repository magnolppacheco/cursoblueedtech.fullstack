/* Faça um Programa que peça dois números e imprima o maior deles, 
e informe caso eles sejam iguais.*/

const prompt = require("prompt-sync")();
console.clear();

console.log('Digite um número:');
let n1 = +prompt('');
console.log('Digite mais um número:');
let n2 = +prompt('');

const n1maior = n1 > n2;
const n2maior = n2 > n1;
if(n1maior){
    console.log(n1)}
else if(n2maior){
console.log(n2)}
else{
 console.log(n1,' é igual a ', n2)};
