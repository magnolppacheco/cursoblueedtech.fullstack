/* Jogo da adivinhação - Escreva um programa que faça o computador “pensar” em 
um número inteiro entre 0 e 10 e peça para o usuário tentar descobrir qual foi 
o número escolhido pelo computador. O programa deve ser repetir até o usuário acertar 
o número, e a cada palpite deve dizer se o número é maior ou menor que o palpite. 
No final dele deve escrever na tela que o usuário encontrou o número, e mostrar 
a quantidade de palpites que foi necessária. */

const prompt = require('prompt-sync')();
console.clear();
let numeropc = Math.floor(Math.random() * 10 + 1);
console.log(numeropc);
console.log('Tente advinhar o número gerado aleatoriamente de 0 a 10.');
console.log('Qual número você acha que foi gerado?');
let numerousuario = +prompt('');
console.log();
let contador = 1; // definindo o contador para saber a quantidade de tentativas

while (numerousuario != numeropc) {
    console.log('Foi por pouco, tente novamente:');
    numerousuario = +prompt('');
    console.log();
    contador1 = contador++;
}
console.log(`Parabéns! o número gerado foi igual ao seu palpite!
Você advinhou em ${contador} tentativa(s).`);
