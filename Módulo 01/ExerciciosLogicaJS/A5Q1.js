/* Faça um programa que leia um nome de usuário e a sua senha e 
não aceite a senha igual ao nome do usuário, mostrando uma mensagem 
de erro e voltando a pedir as informações. */

const prompt = require('prompt-sync')();
console.clear();

console.log('Olá, digite seu nome de usuário:');
let nome = String(prompt('').toLocaleLowerCase());
console.log('');
console.log('Digite uma senha para sua conta de usuário:');
let senha = String(prompt('').toLocaleLowerCase());

while (nome == senha) {
    console.log('O usuário e a senha não podem ser iguais.');
    console.log('Por favor, digite um novo usuário válido:');
    nome = String(prompt('').toLocaleLowerCase());
    console.log('');
    console.log('Por favor, digite uma nova senha válida:');
    senha = String(prompt('').toLocaleLowerCase());
}
console.log('Obrigado! cadastro efetuado com sucesso.');
