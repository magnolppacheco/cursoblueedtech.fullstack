// Faça um programa que leia um número, e informe se ele é par ou impar.

const prompt = require("prompt-sync")();
console.clear();

console.log('Digite um número:');
let numero = +prompt('');
let resto = numero%2;
if(resto === 0){
    console.log('O número é par!');
}
else{
    console.log('O número é impar!');
};