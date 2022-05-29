/*                                  Calculadora de Dano
Escreva um programa que receba dois valores digitados pelo usuário: 
quantidade de vida de um monstro (entre 10 e 50) e valor do ataque do jogador por turno (entre 5 e 10). 
Baseado nos valores digitados, exiba a quantidade de turnos que o jogador irá demorar para conseguir derrotar 
o monstro (o jogador irá derrotar o monstro em 8 turnos). */

const prompt = require('prompt-sync')();
console.clear();

console.log('Digite o número de hit points que o monstro terá:');
let hitpoint = +prompt('');
console.log('');
console.log('Agora digite o dano causado por cada turno do jogador:');
let danoturno = +prompt('');
let qntturnos = Math.floor(hitpoint / danoturno);
console.log('');

if (hitpoint % danoturno != 0) {
    qntturnos = Math.floor(hitpoint / danoturno) + 1;
    console.log(`O jogador irá derrotar o monstro em ${qntturnos} turno(s).`);
} else {
    qntturnos = Math.floor(hitpoint / danoturno);
    console.log(`O jogador irá derrotar o monstro em ${qntturnos} turno(s).`);
}
