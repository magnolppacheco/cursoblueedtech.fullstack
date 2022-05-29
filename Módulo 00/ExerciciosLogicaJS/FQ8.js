/* Conversor de moedas: Crie um programa que solicite um valor em real ao usuário e converta esse valor, para:
DOLAR
EURO
LIBRA ESTERLINA
DÓLAR CANADENSE
PESO ARGENTINO
PESO CHILENO
Para esse exercício você precisará realizar uma pesquisa para saber a cotação de cada moeda em real. 
Mostrar o resultado no formato U$9999.99 */

const prompt = require('prompt-sync')();
console.clear();

// Cotação do dia 29/05/2022
console.log('Digite o valor em R$ que você deseja converter:');
let real = +prompt('');
let dolar = (real / 4.73).toFixed(2); // cotação: 4,73 - abreviação US$
let euro = (real / 5.08).toFixed(2); // cotação: 5,08 - abreviação €
let libraesterlina = (real / 5.97).toFixed(2); // cotação: 5,97 - abreviação £
let dolarcanadense = (real / 3.72).toFixed(2); // cotação: 3,72 - abreviação CA$
let pesoargetino = (real / 0.04).toFixed(2); // cotação: 0,0040 - abreviação $
let pesochileno = (real / 0.0057).toFixed(2); // cotação: 0,0057 - abreviação CLP$

console.log(`Valor em Reais: R$ ${real}.
Valor em Dolar: US$ ${dolar}.
Valor em Euro: € ${euro}.
Valor em Libras Esterlinas: £ ${libraesterlina}.
Valor em Dolar Canadense: CA$ ${dolarcanadense}.
Valor em Peso Argentino: $ ${pesoargetino}.
Valor em Peso Chileno: CLP$ ${pesoargetino}.`);
