/*                            Qual o valor do troco?
Crie um programa que calcule o troco de uma compra no valor de R$100,98 e que foi paga com R$150,00. 
O valor do troco deve ser exibido no console. */

const prompt = require('prompt-sync')();
console.clear();

let valorcompra = 100.98;
let valorpago = 150.0;
let troco = (valorpago - valorcompra).toFixed(2);

console.log(`O valor do troco da compra é de R$ ${troco}.`);
