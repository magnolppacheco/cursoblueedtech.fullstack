/* Escreva um programa que faça o computador “pensar” em um número inteiro entre 0 e 10 
e peça para o usuário tentar descobrir qual foi o número escolhido pelo computador. 
O programa deverá escrever na tela se o usuário venceu ou perdeu. */

const prompt = require('prompt-sync')();
console.clear();
const numerorandom = Math.floor(Math.random() * 10 + 1);
console.log(`Olá! Vamos iniciar uma brincadeira de advinhação.
Escolherei randomicamente um número e você terá que advinhar!`)
console.log('Digite um número de 0 a 10:');
const numeroentrada = +prompt('');
console.log();
if (numeroentrada === numerorandom){
    console.log('Você venceu!');
} else {
    console.log('Você perdeu!');
};
