/*                              Conversor de moedas
Crie um programa que solicite um um valor em real ao usuário e converta esse valor, para dólar. */

const prompt = require('prompt-sync')();
console.clear();

// Usarei a cotação do dolar para o dia 29/05/2022: 1 Dólar americano igual a 4,73 Real brasileiro
console.log('Por favor, digite o valor, em reais, que deseja converter:');
let reais = (+prompt('')).toFixed(2);
console.log('');
let dolar = (reais / 4.73).toFixed(2);
console.log('');
console.log(`Valor em Reais: R$ ${reais}.
Valor em Dolar: $ ${dolar}.`);
