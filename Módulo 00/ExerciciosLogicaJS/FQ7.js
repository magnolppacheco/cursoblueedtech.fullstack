/*                              Você está na flor da idade?
Defina uma variável para o valor do ano do nascimento;
Defina uma variável para o valor do ano atual;
Defina uma variável que calcula o valor final da idade da pessoa;
Exiba uma mensagem final dizendo a idade da pessoa e a mensagem "Você está na flor da idade". */

const prompt = require('prompt-sync')();
console.clear();

console.log('Digite seu ano de nascimento:');
let anonascimento = +prompt('');
console.log('');
console.log('Digite o ano atual:');
let anoatual = +prompt('');
console.log();
let idadeusuario = anoatual - anonascimento;

console.log(`Você tem ${idadeusuario} anos.
Você está na flor da idade.`);
