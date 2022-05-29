/* Faça um programa que leia 2 valores inteiros (A e B). 
Após, o programa deve mostrar uma mensagem "Sao Multiplos" ou "Nao sao Multiplos", 
indicando se os valores lidos são múltiplos entre si. */

const prompt = require("prompt-sync")();
console.clear();

console.log('Digite o primeiro número:');
let n1 = +prompt('');
console.log('Digite o segundo número:');
let n2 = +prompt('');
let nfinal = (n1)%(n2);
if(n1>=n2){
    if(nfinal === 0){
        console.log('Eles são múltiplos!');
    }
    else{
        console.log('Eles não são múltiplos!');}}
    
else{let nfinal = (n2)%(n1);
    if(nfinal === 0){console.log('Eles são múltiplos!');}
    else {console.log('Eles não são múltiplos!');}};