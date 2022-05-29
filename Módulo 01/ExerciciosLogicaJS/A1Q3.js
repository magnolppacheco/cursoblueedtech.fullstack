/* Leia 3 valores de entrada, referentes à idade de uma pessoa em: anos, meses e dias. 
Exemplo: eu tenho 30 anos, 2 meses 3 7 dias. 
Calcule e exiba o total de dias que essa pessoa já viveu. 
Obs.: apenas para facilitar o cálculo, considere todo ano com 365 dias e todo mês com 30 dias. */

const prompt = require("prompt-sync")();
console.clear();
console.log('Olá, digite sua idade conforme as solicitações a seguir:');
console.log('Qual a sua idade em anos?');
let anos = +prompt('');
console.log('e em meses?');
let meses = +prompt('');
console.log('e dias?');
let dias = +prompt('');
const total= ((anos*365)+(meses*30)+dias);
console.log('Você viveu',total,'dias.');
