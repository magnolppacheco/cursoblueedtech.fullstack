/*                          Etiqueta 
Elabore um programa que escreve seu nome completo na primeira linha, 
seu endereço na segunda, o CEP na terceira e o telefone na quarta. */

const prompt = require('prompt-sync')();
console.clear();

console.log('Olá, necessitamos que forneça alguns de seus dados pessoais.');
console.log('Por favor, digite seu nome completo:');
let nome = String(prompt(''));
console.log('');
console.log('Agora, digite seu endereço:');
let endereço = String(prompt(''));
console.log('');
console.log('Digite o CEP de onde mora:');
let cep = String(prompt(''));
console.log('');
console.log('Digite seu telefone para contato:');
let telefone = String(prompt(''));
console.log(typeof telefone);
console.log(
    `Seu nome é ${nome}
Seu endereço é ${endereço}
Seu CEP é ${cep}
Seu número de telefone para contato é ${telefone}`,
);
