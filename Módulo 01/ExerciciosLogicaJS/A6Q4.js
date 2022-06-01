/* Faça um programa que simule um lançamento de dados. 
Lance o dado 100 vezes e armazene os resultados em um array. 
Depois, mostre quantas vezes cada valor foi conseguido. */

const prompt = require('prompt-sync')();
console.clear();

// Variaveis
let valor1 = [];
let valor2 = [];
let valor3 = [];
let valor4 = [];
let valor5 = [];
let valor6 = [];
let numerolancamentos = 100;

// Usando for para a repetição de lançamentos 100 vezes
for (let i = 0; i < numerolancamentos; i++) {
    let valor = Math.floor(Math.random() * 6 + 1);

    // Jogando os valores obtidos para dentro dos arrays.
    if (valor == 1) {
        valor1.push(valor);
    } else if (valor == 2) {
        valor2.push(valor);
    } else if (valor == 3) {
        valor3.push(valor);
    } else if (valor == 4) {
        valor4.push(valor);
    } else if (valor == 5) {
        valor5.push(valor);
    } else {
        valor6.push(valor);
    }
}
// Imprimindo a quantidade de vezes que os números foram sorteados.
console.log(`O valor 1 foi sorteado ${valor1.length} vezes.
O valor 2 foi sorteado ${valor2.length} vezes.
O valor 3 foi sorteado ${valor3.length} vezes.
O valor 4 foi sorteado ${valor4.length} vezes.
O valor 5 foi sorteado ${valor5.length} vezes.
O valor 6 foi sorteado ${valor6.length} vezes.`);
