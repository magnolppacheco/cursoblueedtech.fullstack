/*                      E os 10% do garçom? -
Defina uma variável para o valor de uma refeição que custou R$ 42,54. 
Na sequência, defina uma variável para o valor da taxa de serviço que é de 10%. 
Por fim defina uma variável que será responsável pelo cálculo do valor total da conta
e exiba-o no console com a seguinte formatação: R$99.99 (valor com duas casas decimais). */

const prompt = require('prompt-sync')();
console.clear();

let valorrefeiçao = 42.54;
let taxaserviço = 0.1; // valore referente a 10% = 10/100 = 0.1
const total = (valorrefeiçao + valorrefeiçao * taxaserviço).toFixed(2);
console.log(`O valor total da conta foi: R$${total}.`);
