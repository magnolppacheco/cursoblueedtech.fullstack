/* Faça um Programa para um caixa eletrônico. 
O programa deverá perguntar ao usuário a valor do saque e depois informar quantas notas de cada valor serão fornecidas. 
As notas disponíveis serão as de 1, 5, 10, 50 e 100 reais. O valor mínimo é de 10 reais e o máximo de 600 reais. 
O programa não deve se preocupar com a quantidade de notas existentes na máquina.
Exemplo 1: Para sacar a quantia de 256 reais, o programa fornece duas notas de 100, uma nota de 50, uma nota de 5 e uma nota de 1.
Exemplo 2: Para sacar a quantia de 399 reais, o programa fornece três notas de 100, uma nota de 50, quatro notas de 10,
uma nota de 5 e quatro notas de 1. */

const prompt = require('prompt-sync')();
console.clear();
console.log('Qual valor do saque desejado?');
let valorsaque = +prompt('');
while (valorsaque < 10 || valorsaque > 600) {
    console.log('Saque mínimo: 10 R$.');
    console.log('Saque máximo: 600 R$.');
    console.log('Por favor, escolha um valor entre o limite de saque dísponivel.');
    console.log('Qual valor do saque desejado?');
    valorsaque = +prompt('');
}
console.log();
let notas100 = Math.floor(valorsaque / 100);
let notas50 = Math.floor((valorsaque % 100) / 50);
let notas10 = Math.floor(((valorsaque % 100) % 50) / 10);
let notas5 = Math.floor((((valorsaque % 100) % 50) % 10) / 5);
let notas1 = Math.floor((((valorsaque % 100) % 50) % 10) % 5);
console.log(`Notas de 100: ${notas100}`);
console.log(`Notas de 50: ${notas50}`);
console.log(`Notas de 10: ${notas10}`);
console.log(`Notas de 5: ${notas5}`);
console.log(`Notas de 1: ${notas1}`);
