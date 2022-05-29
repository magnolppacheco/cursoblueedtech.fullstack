/* Neste problema, deve-se ler o nome de uma peça que chamaremos de peça1, 
o número de peças1 que o usuário quer, o valor unitário de cada peça1, o nome de uma peça2, 
o número de peças2 e o valor unitário de cada peça2. Após, calcule e mostre o valor a ser pago.
Supondo que as duas peças são bermudas e camisas. */

const prompt = require("prompt-sync")();
console.clear();

peça1 = 'camisa';
peça2 = 'bermuda';
console.log(`Olá! No momento, apenas camisas e bermudas
 estão disponíveis no estoque.`);
 console.log('Qual peça você deseja adquirir?');
let produto = prompt('');
console.log();
let produtolower = produto.toLowerCase(); //Convertendo para letras minúsculas.
if(produtolower == peça1){
    let camisa = 25; // Custo em reais de cada camisa
    console.log('Cada camisa custa',camisa,'R$.');
    let nºdepeças = prompt('Quantas camisas deseja?');
    let total = nºdepeças*camisa;
    console.log('O valor total dos itens desejados é:',total,'R$.')
} else if(produtolower == peça2){
    let bermuda = 30; // Custo em reais de cada bermuda
    console.log('Cada bermuda custa',bermuda,'R$.');
    nºdepeças = prompt('Quantas bermudas deseja?');
    total = nºdepeças*bermuda;
    console.log('O valor total dos itens desejados é:',total,'R$.');
} else {
    console.log('Produto não disponível em estoque.');
};